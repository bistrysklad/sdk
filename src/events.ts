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

async function* sseFrames(
  client: ClientOptions,
  options: SubscribeOptions,
  after: string | undefined,
  signal: AbortSignal,
): AsyncGenerator<Frame> {
  const stopped = new AbortController();
  const lifetime = AbortSignal.any([signal, stopped.signal]);
  const connect = AbortSignal.any([
    lifetime,
    AbortSignal.timeout(options.connectTimeoutMs ?? 10000),
  ]);
  const token = await tokenOf(client, connect);
  const url = new URL("/api/v1/events/stream", apiOrigin(client.baseUrl));
  if (after !== undefined) url.searchParams.set("after", after);
  let timer: ReturnType<typeof setTimeout> | undefined;
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
  const arm = (ms: number) => {
    clearTimeout(timer);
    timer = setTimeout(() => stopped.abort(), ms);
  };
  arm(options.connectTimeoutMs ?? 10000);
  try {
    const response = await (client.fetch ?? fetch)(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "text/event-stream",
        ...(client.companyId
          ? { "X-Bistrysklad-Company": client.companyId }
          : {}),
        ...(after ? { "Last-Event-ID": after } : {}),
      },
      signal: lifetime,
      redirect: "error",
    });
    if (!response.ok) {
      const value = (await response.json().catch(() => undefined)) as
        { error?: { code?: string; message?: string } } | undefined;
      const retry = response.headers.get("Retry-After");
      const retryAfterMs =
        retry && /^\d+(\.\d+)?$/.test(retry) ? Number(retry) * 1000 : null;
      throw new BistryskladError(
        value?.error?.message ??
          `Event request failed (HTTP ${response.status})`,
        response.status,
        value?.error?.code ?? "EVENT_HTTP_ERROR",
        undefined,
        { limit: null, remaining: null, retryAfterMs },
      );
    }
    if (
      !response.headers.get("Content-Type")?.startsWith("text/event-stream") ||
      !response.body
    )
      throw streamError(
        "EVENT_PROTOCOL_INVALID",
        "Expected text/event-stream response",
      );
    reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "",
      data: string[] = [],
      id = "",
      size = 0;
    while (!lifetime.aborted) {
      arm(options.idleTimeoutMs ?? 45000);
      const { value, done } = await reader.read();
      clearTimeout(timer);
      if (done) return;
      buffer += decoder.decode(value, { stream: true });
      // Support LF, CRLF and CR, including CRLF split across network chunks.
      for (;;) {
        const index = buffer.search(/[\r\n]/);
        if (
          index < 0 ||
          (buffer[index] === "\r" && index === buffer.length - 1)
        )
          break;
        const line = buffer.slice(0, index);
        if (line.length + size > 65536)
          throw streamError(
            "EVENT_PROTOCOL_INVALID",
            "Event frame exceeds 64 KiB",
          );
        buffer = buffer.slice(
          index +
            (buffer[index] === "\r" && buffer[index + 1] === "\n" ? 2 : 1),
        );
        if (!line) {
          if (data.length) {
            let decoded: unknown;
            try {
              decoded = JSON.parse(data.join("\n"));
            } catch {
              throw streamError("EVENT_PROTOCOL_INVALID", "Invalid event JSON");
            }
            const frame = parseFrame(decoded);
            if (id && id !== frame.cursor)
              throw streamError(
                "EVENT_PROTOCOL_INVALID",
                "SSE ID differs from cursor",
              );
            data = [];
            id = "";
            size = 0;
            yield frame;
          } else {
            id = "";
            size = 0;
          }
        } else if (!line.startsWith(":")) {
          size += line.length;
          const colon = line.indexOf(":");
          const field = colon < 0 ? line : line.slice(0, colon);
          const raw = colon < 0 ? "" : line.slice(colon + 1);
          const content = raw.startsWith(" ") ? raw.slice(1) : raw;
          if (field === "data") data.push(content);
          if (field === "id") id = content;
        }
      }
      if (buffer.length + size > 65536)
        throw streamError(
          "EVENT_PROTOCOL_INVALID",
          "Event frame exceeds 64 KiB",
        );
    }
  } finally {
    clearTimeout(timer);
    stopped.abort();
    await reader?.cancel().catch(() => {});
  }
}
export function subscribeToEvents(
  client: ClientOptions,
  options: SubscribeOptions = {},
): AsyncIterable<WarehouseEvent> {
  return reconnecting(client, options, (after, signal) =>
    sseFrames(client, options, after, signal),
  );
}
