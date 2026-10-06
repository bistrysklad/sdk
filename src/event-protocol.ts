import { apiOrigin, BistryskladError } from "./transport.js";
import type { ClientOptions } from "./transport.js";
import type { components } from "./schema.js";

export type WarehouseEvent = components["schemas"]["WarehouseEvent"];
export interface StreamStatus {
  state: "connected" | "heartbeat" | "reconnecting";
  cursor?: string;
  attempt?: number;
}
export interface SubscribeOptions {
  after?: string;
  signal?: AbortSignal;
  reconnect?: boolean;
  /** Consecutive disconnects without receiving a business event. Default: 10. */
  maxReconnectAttempts?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
  /** Handshake and token-provider deadline, default: 10 seconds. */
  connectTimeoutMs?: number;
  /** No frames received within this interval: reconnect. Default: 45 seconds. */
  idleTimeoutMs?: number;
  onStatus?: (status: StreamStatus) => void;
}
export const noQuota = { limit: null, remaining: null, retryAfterMs: null };
export function streamError(
  code: string,
  message: string,
  status = 0,
): BistryskladError {
  return new BistryskladError(message, status, code, undefined, noQuota);
}
export type Frame =
  | WarehouseEvent
  | { type: "ready"; cursor: string }
  | { type: "heartbeat"; cursor: string };
export function parseFrame(value: unknown): Frame {
  const f = value as Record<string, unknown> | null;
  if (!f || typeof f !== "object")
    throw streamError("EVENT_PROTOCOL_INVALID", "Invalid event frame");
  if (f.type === "error") {
    if (typeof f.code !== "string" || typeof f.status !== "number")
      throw streamError("EVENT_PROTOCOL_INVALID", "Invalid error frame");
    throw streamError(
      f.code,
      typeof f.message === "string" ? f.message : "Event stream failed",
      f.status,
    );
  }
  if (
    typeof f.cursor !== "string" ||
    !/^[-a-zA-Z0-9_]+:(0|[1-9]\d{0,18})$/.test(f.cursor)
  )
    throw streamError("EVENT_PROTOCOL_INVALID", "Invalid event cursor");
  if (f.type === "ready" || f.type === "heartbeat") return f as Frame;
  if (
    ![
      "product.created",
      "product.updated",
      "product.deleted",
      "catalog.invalidated",
    ].includes(String(f.type)) ||
    !(f.entityId === null || typeof f.entityId === "string") ||
    typeof f.source !== "string" ||
    typeof f.occurredAt !== "string" ||
    !Number.isFinite(Date.parse(f.occurredAt))
  )
    throw streamError("EVENT_PROTOCOL_INVALID", "Invalid warehouse event");
  return f as WarehouseEvent;
}
export function validateOptions(
  client: ClientOptions,
  options: SubscribeOptions,
): void {
  apiOrigin(client.baseUrl);
  for (const value of [
    options.connectTimeoutMs ?? 10000,
    options.idleTimeoutMs ?? 45000,
    options.baseDelayMs ?? 500,
    options.maxDelayMs ?? 30000,
  ])
    if (!Number.isFinite(value) || value <= 0)
      throw new Error("Stream timeouts and delays must be positive");
  const attempts = options.maxReconnectAttempts ?? 10;
  if (!Number.isInteger(attempts) || attempts < 0 || attempts > 1000)
    throw new Error("maxReconnectAttempts must be between 0 and 1000");
  if (
    options.after !== undefined &&
    (typeof options.after !== "string" || options.after.length > 128)
  )
    throw new Error("Invalid event cursor");
}
export async function tokenOf(
  client: ClientOptions,
  signal: AbortSignal,
): Promise<string> {
  signal.throwIfAborted();
  return new Promise((resolve, reject) => {
    const abort = () => reject(signal.reason);
    signal.addEventListener("abort", abort, { once: true });
    Promise.resolve()
      .then(() =>
        typeof client.token === "function" ? client.token() : client.token,
      )
      .then((token) => {
        if (!token || /[\r\n]/.test(token))
          throw streamError(
            "AUTH_TOKEN_INVALID",
            "Missing or invalid API token",
          );
        resolve(token);
      })
      .catch(reject)
      .finally(() => signal.removeEventListener("abort", abort));
  });
}
export async function pause(ms: number, signal: AbortSignal): Promise<void> {
  signal.throwIfAborted();
  return new Promise((resolve, reject) => {
    const done = () => {
      signal.removeEventListener("abort", abort);
      resolve();
    };
    const timer = setTimeout(done, ms);
    const abort = () => {
      clearTimeout(timer);
      signal.removeEventListener("abort", abort);
      reject(signal.reason);
    };
    signal.addEventListener("abort", abort, { once: true });
  });
}
export async function* reconnecting(
  client: ClientOptions,
  options: SubscribeOptions,
  connect: (
    after: string | undefined,
    signal: AbortSignal,
  ) => AsyncIterable<Frame>,
): AsyncGenerator<WarehouseEvent> {
  validateOptions(client, options);
  const stop = new AbortController();
  const signal = AbortSignal.any([
    stop.signal,
    ...(options.signal ? [options.signal] : []),
  ]);
  let cursor = options.after,
    attempts = 0;
  try {
    while (!signal.aborted) {
      try {
        for await (const frame of connect(cursor, signal)) {
          if (frame.type === "ready" || frame.type === "heartbeat") {
            if (cursor === undefined) cursor = frame.cursor;
            options.onStatus?.({
              state: frame.type === "ready" ? "connected" : "heartbeat",
              cursor,
            });
          } else {
            yield frame;
            // Advance only when the consumer asks for the next event.
            cursor = frame.cursor;
            attempts = 0;
          }
        }
        throw streamError("EVENT_CONNECTION_CLOSED", "Event connection closed");
      } catch (error) {
        if (signal.aborted) return;
        const failure =
          error instanceof BistryskladError
            ? error
            : streamError("EVENT_CONNECTION_FAILED", "Event connection failed");
        const retryable =
          [0, 408, 429, 500, 502, 503, 504].includes(failure.status) &&
          ![
            "EVENT_PROTOCOL_INVALID",
            "AUTH_TOKEN_INVALID",
            "API_MONTHLY_QUOTA_EXCEEDED",
          ].includes(failure.code);
        if (
          !retryable ||
          options.reconnect === false ||
          attempts >= (options.maxReconnectAttempts ?? 10)
        )
          throw failure;
        attempts++;
        options.onStatus?.({
          state: "reconnecting",
          cursor,
          attempt: attempts,
        });
        const delay = Math.min(
          options.maxDelayMs ?? 30000,
          (options.baseDelayMs ?? 500) * 2 ** Math.min(attempts - 1, 20),
        );
        await pause(
          Math.max(delay, failure.rateLimit.retryAfterMs ?? 0),
          signal,
        );
      }
    }
  } catch (error) {
    if (!signal.aborted) throw error;
  } finally {
    stop.abort();
  }
}
