import createClient from "openapi-fetch";
import type { paths } from "./schema.js";

export interface RetryPolicy {
  maxAttempts?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
}
export interface CallOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
  idempotencyKey?: string;
  retry?: RetryPolicy;
  contentType?: string;
  fileName?: string;
}
export interface RateLimit {
  limit: number | null;
  remaining: number | null;
  retryAfterMs: number | null;
}
export type ResponseMode = "full" | "minimal";
export interface ClientOptions {
  responseMode?: ResponseMode;
  baseUrl: string;
  token: string | (() => string | Promise<string>);
  fetch?: typeof fetch;
  timeoutMs?: number;
  retry?: RetryPolicy;
  companyId?: string;
  onResponse?: (info: {
    status: number;
    rateLimit: RateLimit;
    idempotencyKey?: string;
  }) => void;
}
export class BistryskladError extends Error {
  readonly name = "BistryskladError";
  constructor(
    message: string,
    readonly status: number,
    readonly code: string,
    readonly idempotencyKey: string | undefined,
    readonly rateLimit: RateLimit,
    readonly details?: unknown,
    options?: ErrorOptions,
  ) {
    super(message, options);
  }
}
export function apiOrigin(url: string): string {
  const parsed = new URL(url);
  if (
    !["http:", "https:"].includes(parsed.protocol) ||
    parsed.username ||
    parsed.password ||
    parsed.search ||
    parsed.hash ||
    !["", "/", "/api", "/api/", "/api/v1", "/api/v1/"].includes(parsed.pathname)
  )
    throw new Error(
      "baseUrl must be an HTTP(S) origin or its /api/v1 URL, without credentials or query",
    );
  return parsed.origin;
}
const emptyQuota = (): RateLimit => ({
  limit: null,
  remaining: null,
  retryAfterMs: null,
});
function quota(headers: Headers): RateLimit {
  const number = (name: string) => {
    const value = headers.get(name);
    return value !== null && Number.isFinite(Number(value))
      ? Number(value)
      : null;
  };
  const retry = headers.get("Retry-After");
  return {
    limit: number("X-RateLimit-Limit"),
    remaining: number("X-RateLimit-Remaining"),
    retryAfterMs:
      retry === null
        ? null
        : /^\d+(\.\d+)?$/.test(retry)
          ? Number(retry) * 1000
          : Math.max(0, Date.parse(retry) - Date.now()) || null,
  };
}
function pause(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    signal.throwIfAborted();
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
export class Transport {
  constructor(readonly options: ClientOptions) {
    apiOrigin(options.baseUrl);
  }
  async invoke(
    method: string,
    path: string,
    params: Record<string, string>,
    body: unknown,
    query: unknown,
    options: CallOptions = {},
    minimal = false,
  ): Promise<unknown> {
    const write = method !== "get";
    const key = write
      ? (options.idempotencyKey ?? globalThis.crypto.randomUUID())
      : undefined;
    const timeout = options.timeoutMs ?? this.options.timeoutMs ?? 30_000;
    if (!Number.isInteger(timeout) || timeout <= 0 || timeout > 2147483647)
      throw new Error("timeoutMs must be an integer between 1 and 2147483647");
    const retry = { ...this.options.retry, ...options.retry };
    const attempts = retry.maxAttempts ?? 3;
    if (!Number.isInteger(attempts) || attempts < 1 || attempts > 10)
      throw new Error("maxAttempts must be between 1 and 10");
    for (const delay of [retry.baseDelayMs, retry.maxDelayMs])
      if (
        delay !== undefined &&
        (!Number.isFinite(delay) || delay < 0 || delay > 2147483647)
      )
        throw new Error(
          "Retry delays must be finite milliseconds between 0 and 2147483647",
        );
    const deadline = AbortSignal.timeout(timeout);
    const signal = AbortSignal.any([
      ...(options.signal ? [options.signal] : []),
      deadline,
    ]);
    let latest = emptyQuota();
    const interrupted = () =>
      new BistryskladError(
        deadline.aborted ? "API request timed out" : "API request cancelled",
        0,
        deadline.aborted ? "TIMEOUT" : "ABORTED",
        key,
        latest,
      );
    const token = await new Promise<string>((resolve, reject) => {
      if (signal.aborted) {
        reject(interrupted());
        return;
      }
      const abort = () => reject(interrupted());
      signal.addEventListener("abort", abort, { once: true });
      Promise.resolve()
        .then(() =>
          typeof this.options.token === "function"
            ? this.options.token()
            : this.options.token,
        )
        .then(
          (value) => {
            signal.removeEventListener("abort", abort);
            if (typeof value !== "string" || !value)
              reject(
                new BistryskladError(
                  "API token is required",
                  0,
                  "AUTH_ERROR",
                  key,
                  latest,
                ),
              );
            else resolve(value);
          },
          (error) => {
            signal.removeEventListener("abort", abort);
            reject(
              new BistryskladError(
                "API token provider failed",
                0,
                "AUTH_ERROR",
                key,
                latest,
                undefined,
                { cause: error },
              ),
            );
          },
        );
    });
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      ...(minimal ? { Prefer: "return=minimal" } : {}),
      ...(key ? { "Idempotency-Key": key } : {}),
      ...(this.options.companyId
        ? { "X-Bistrysklad-Company": this.options.companyId }
        : {}),
      ...(options.contentType ? { "Content-Type": options.contentType } : {}),
      ...(options.fileName
        ? { "X-File-Name": encodeURIComponent(options.fileName) }
        : {}),
    };
    const client = createClient<paths>({
      baseUrl: apiOrigin(this.options.baseUrl),
      fetch: async (request) => {
        // Serialize once. Each attempt is a fresh Request with identical bytes and key.
        const bytes =
          write && request.body !== null
            ? await request.arrayBuffer()
            : undefined;
        for (let attempt = 1; ; attempt++) {
          try {
            signal.throwIfAborted();
            const response = await (this.options.fetch ?? globalThis.fetch)(
              new Request(request.url, {
                method: request.method,
                headers: request.headers,
                body: bytes,
                signal,
                redirect: "error",
              }),
            );
            latest = quota(response.headers);
            const data = await response.arrayBuffer();
            this.options.onResponse?.({
              status: response.status,
              rateLimit: latest,
              idempotencyKey: key,
            });
            if (
              [429, 502, 503, 504].includes(response.status) &&
              attempt < attempts
            ) {
              await pause(
                Math.min(
                  timeout,
                  latest.retryAfterMs ??
                    Math.min(
                      (retry.baseDelayMs ?? 200) * 2 ** (attempt - 1),
                      retry.maxDelayMs ?? 2000,
                    ),
                ),
                signal,
              );
              continue;
            }
            if (!response.ok) {
              let payload: unknown;
              try {
                payload = JSON.parse(new TextDecoder().decode(data));
              } catch {
                /* proxy HTML: never include it or tokens in errors */
              }
              const error = (
                payload as
                  { error?: { code?: string; message?: string } } | undefined
              )?.error;
              throw new BistryskladError(
                error?.message ??
                  `API request failed (HTTP ${response.status})`,
                response.status,
                error?.code ?? "HTTP_ERROR",
                key,
                latest,
                payload,
              );
            }
            if (minimal) {
              let compact: unknown;
              try {
                compact = JSON.parse(new TextDecoder().decode(data));
              } catch {}
              if (
                !compact ||
                typeof compact !== "object" ||
                !("revision" in compact) ||
                typeof compact.revision !== "string" ||
                !("result" in compact) ||
                "state" in compact
              )
                throw new BistryskladError(
                  "Server did not return the requested compact response. The command may already be committed; retain its idempotency key.",
                  response.status,
                  "COMPACT_RESPONSE_UNSUPPORTED",
                  key,
                  latest,
                );
            }
            return new Response(response.status === 204 ? null : data, {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
            });
          } catch (error) {
            if (error instanceof BistryskladError) throw error;
            if (signal.aborted)
              throw new BistryskladError(
                deadline.aborted
                  ? "API request timed out"
                  : "API request cancelled",
                0,
                deadline.aborted ? "TIMEOUT" : "ABORTED",
                key,
                latest,
                undefined,
                { cause: error },
              );
            if (attempt >= attempts)
              throw new BistryskladError(
                "API connection failed",
                0,
                "NETWORK_ERROR",
                key,
                latest,
                undefined,
                { cause: error },
              );
            await pause(
              Math.min(
                (retry.baseDelayMs ?? 200) * 2 ** (attempt - 1),
                retry.maxDelayMs ?? 2000,
              ),
              signal,
            ).catch((error) => {
              throw new BistryskladError(
                "API request interrupted",
                0,
                deadline.aborted ? "TIMEOUT" : "ABORTED",
                key,
                latest,
                undefined,
                { cause: error },
              );
            });
          }
        }
      },
    });
    const invoke = client.request as unknown as (
      method: string,
      path: string,
      init: object,
    ) => Promise<{ data: unknown }>;
    try {
      const result = await invoke(method, path, {
        params: { path: params, query },
        headers,
        body,
        signal,
        ...(options.contentType
          ? { bodySerializer: (value: unknown) => value }
          : {}),
        ...((path.includes("/images/") && method === "get") ||
        path.endsWith("/file") ||
        path.endsWith("/export")
          ? { parseAs: "blob" }
          : {}),
      });
      return result.data;
    } catch (error) {
      if (error instanceof BistryskladError) throw error;
      throw new BistryskladError(
        "API response is not valid JSON",
        0,
        "INVALID_RESPONSE",
        key,
        latest,
        undefined,
        { cause: error },
      );
    }
  }
}
