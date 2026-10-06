import WebSocket from "ws";
import { apiOrigin, BistryskladError } from "./transport.js";
import type { ClientOptions } from "./transport.js";
import {
  parseFrame,
  reconnecting,
  streamError,
  tokenOf,
} from "./event-protocol.js";
import type {
  Frame,
  SubscribeOptions,
  WarehouseEvent,
} from "./event-protocol.js";
export type {
  WarehouseEvent,
  SubscribeOptions,
  StreamStatus,
} from "./event-protocol.js";

async function* socketFrames(
  client: ClientOptions,
  options: SubscribeOptions,
  after: string | undefined,
  signal: AbortSignal,
): AsyncGenerator<Frame> {
  const connect = AbortSignal.any([
    signal,
    AbortSignal.timeout(options.connectTimeoutMs ?? 10000),
  ]);
  const token = await tokenOf(client, connect);
  connect.throwIfAborted();
  const url = new URL("/api/v1/events/ws", apiOrigin(client.baseUrl));
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  if (after !== undefined) url.searchParams.set("after", after);
  const socket = new WebSocket(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(client.companyId
        ? { "X-Bistrysklad-Company": client.companyId }
        : {}),
    },
    handshakeTimeout: options.connectTimeoutMs ?? 10000,
    maxPayload: 65536,
    perMessageDeflate: false,
    followRedirects: false,
  });
  let queue: Frame[] = [],
    failure: unknown,
    closed = false,
    wake = () => {};
  let idle: ReturnType<typeof setTimeout>;
  const fail = (error: unknown) => {
    failure = error;
    closed = true;
    wake();
    socket.terminate();
  };
  const arm = () => {
    clearTimeout(idle);
    idle = setTimeout(
      () => fail(streamError("EVENT_IDLE_TIMEOUT", "Event stream timed out")),
      options.idleTimeoutMs ?? 45000,
    );
  };
  const abort = () => {
    closed = true;
    wake();
    socket.terminate();
  };
  signal.addEventListener("abort", abort, { once: true });
  socket.on("error", () => {
    if (!closed)
      fail(
        streamError("EVENT_CONNECTION_FAILED", "WebSocket connection failed"),
      );
  });
  socket.on("close", () => {
    closed = true;
    wake();
  });
  socket.on("open", arm);
  socket.on("ping", arm);
  socket.on("unexpected-response", (_request, response) => {
    let body = "";
    response.on("data", (chunk) => {
      body += String(chunk);
      if (body.length > 65536) response.destroy();
    });
    response.on("end", () => {
      let error: { code?: string; message?: string } | undefined;
      try {
        error = JSON.parse(body).error;
      } catch {
        /* proxy response */
      }
      const retry = response.headers["retry-after"];
      fail(
        new BistryskladError(
          error?.message ??
            `WebSocket request failed (HTTP ${response.statusCode})`,
          response.statusCode ?? 503,
          error?.code ?? "EVENT_HTTP_ERROR",
          undefined,
          {
            limit: null,
            remaining: null,
            retryAfterMs:
              typeof retry === "string" && /^\d+$/.test(retry)
                ? Number(retry) * 1000
                : null,
          },
        ),
      );
    });
    response.on("error", () =>
      fail(
        streamError("EVENT_CONNECTION_FAILED", "WebSocket handshake failed"),
      ),
    );
  });
  socket.on("message", (data, binary) => {
    try {
      if (binary)
        throw streamError("EVENT_PROTOCOL_INVALID", "Expected a text frame");
      const frame = parseFrame(JSON.parse(String(data)));
      if (queue.length >= 256) {
        queue = [];
        throw streamError(
          "EVENT_BUFFER_FULL",
          "Consumer fell behind; reconnect with last consumed cursor",
        );
      }
      queue.push(frame);
      arm();
      wake();
    } catch (error) {
      fail(
        error instanceof BistryskladError
          ? error
          : streamError("EVENT_PROTOCOL_INVALID", "Invalid event JSON"),
      );
    }
  });
  try {
    if (signal.aborted) abort();
    while (!signal.aborted) {
      if (queue.length) {
        yield queue.shift()!;
        continue;
      }
      if (closed) {
        if (failure) throw failure;
        return;
      }
      await new Promise<void>((resolve) => {
        wake = resolve;
      });
    }
  } finally {
    clearTimeout(idle!);
    signal.removeEventListener("abort", abort);
    socket.terminate();
  }
}
/** Server-side WebSocket transport; import separately to keep browser bundles free of Node dependencies. */
export function subscribeToEvents(
  client: ClientOptions,
  options: SubscribeOptions = {},
): AsyncIterable<WarehouseEvent> {
  return reconnecting(client, options, (after, signal) =>
    socketFrames(client, options, after, signal),
  );
}
