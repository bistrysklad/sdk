import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { WebSocketServer } from "ws";
import { build } from "esbuild";
import {
  createBistryskladClient,
  subscribeToEvents as sse,
} from "../dist/index.js";
import { subscribeToEvents as websocket } from "../dist/node.js";

const event = (n) => ({
  type: "product.updated",
  cursor: `synthetic-company:${n}`,
  entityId: "synthetic-product",
  source: "products",
  occurredAt: "2026-10-06T00:00:00.000Z",
});
async function fixture(handler) {
  const server = createServer(handler),
    ws = new WebSocketServer({ noServer: true });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  return {
    server,
    ws,
    baseUrl: `http://127.0.0.1:${server.address().port}`,
    async close() {
      for (const c of ws.clients) c.terminate();
      ws.close();
      server.closeAllConnections();
      await new Promise((r) => server.close(r));
    },
  };
}
const options = {
  baseDelayMs: 1,
  maxDelayMs: 2,
  connectTimeoutMs: 1000,
  idleTimeoutMs: 1000,
};
test(
  "SSE parses split CRLF/UTF-8 and reconnects with the last consumed cursor and renewed token",
  { timeout: 10000 },
  async () => {
    const requests = [];
    let calls = 0;
    const f = await fixture((req, res) => {
      requests.push({ url: req.url, headers: req.headers });
      res.writeHead(200, { "Content-Type": "text/event-stream" });
      const n = requests.length;
      const message = n === 1 ? { ...event(1), entityId: "Товар" } : event(2);
      const text = `event: ready\r\ndata: {"type":"ready","cursor":"synthetic-company:0"}\r\n\r\nid: ${message.cursor}\r\nevent: product.updated\r\ndata: ${JSON.stringify(message)}\r\n\r\n`;
      const bytes = Buffer.from(text);
      // Every byte separately, including Unicode bytes and CRLF boundaries.
      void (async () => {
        for (const byte of bytes) {
          if (res.destroyed) return;
          res.write(Buffer.from([byte]));
          await delay(0);
        }
        res.end();
      })();
    });
    const stop = new AbortController();
    try {
      const iterator = sse(
        {
          baseUrl: f.baseUrl,
          token: () => `synthetic-${++calls}`,
          companyId: "synthetic-company",
        },
        { ...options, signal: stop.signal },
      )[Symbol.asyncIterator]();
      assert.equal((await iterator.next()).value.entityId, "Товар");
      assert.equal((await iterator.next()).value.cursor, "synthetic-company:2");
      stop.abort();
      await iterator.return();
      assert.equal(calls, 2);
      assert.equal(requests[1].headers["last-event-id"], "synthetic-company:1");
      assert.match(requests[1].url, /after=synthetic-company%3A1/);
      assert.equal(requests[1].headers.authorization, "Bearer synthetic-2");
      assert.equal(
        requests[0].headers["x-bistrysklad-company"],
        "synthetic-company",
      );
    } finally {
      stop.abort();
      await f.close();
    }
  },
);
test(
  "SSE authentication/cursor/protocol errors are terminal and idle cancellation releases the connection",
  { timeout: 10000 },
  async () => {
    let mode = "auth",
      requests = 0;
    const f = await fixture((_req, res) => {
      requests++;
      if (mode === "auth") {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            error: { code: "UNAUTHORIZED", message: "Invalid token" },
          }),
        );
        return;
      }
      res.writeHead(200, { "Content-Type": "text/event-stream" });
      res.flushHeaders();
      if (mode === "expired")
        res.end(
          'event: error\ndata: {"type":"error","status":409,"code":"EVENT_CURSOR_EXPIRED","message":"Reload"}\n\n',
        );
      if (mode === "invalid") res.end("data: not-json\n\n");
      if (mode === "large") res.end("data: " + "a".repeat(70000) + "\n\n");
    });
    try {
      for (const [m, code] of [
        ["auth", "UNAUTHORIZED"],
        ["expired", "EVENT_CURSOR_EXPIRED"],
        ["invalid", "EVENT_PROTOCOL_INVALID"],
        ["large", "EVENT_PROTOCOL_INVALID"],
      ]) {
        mode = m;
        const before = requests;
        await assert.rejects(
          sse({ baseUrl: f.baseUrl, token: "synthetic" }, options)
            [Symbol.asyncIterator]()
            .next(),
          (e) => e.code === code,
        );
        assert.equal(requests, before + 1);
      }
      mode = "idle";
      const stop = new AbortController();
      const iterator = createBistryskladClient({
        baseUrl: f.baseUrl,
        token: "synthetic",
      })
        .events.subscribe({ ...options, signal: stop.signal })
        [Symbol.asyncIterator]();
      const next = iterator.next();
      await delay(30);
      stop.abort();
      assert.equal((await next).done, true);
    } finally {
      await f.close();
    }
  },
);
test(
  "WebSocket resumes after disconnect, authenticates in headers and yields only business frames",
  { timeout: 10000 },
  async () => {
    const f = await fixture((_q, r) => r.end());
    const requests = [];
    f.server.on("upgrade", (req, socket, head) => {
      requests.push(req);
      f.ws.handleUpgrade(req, socket, head, (ws) => {
        ws.send(
          JSON.stringify({ type: "ready", cursor: "synthetic-company:0" }),
        );
        ws.send(
          JSON.stringify({ type: "heartbeat", cursor: "synthetic-company:0" }),
        );
        ws.send(JSON.stringify(event(requests.length)));
        ws.close(1001);
      });
    });
    const stop = new AbortController();
    const states = [];
    try {
      const iterator = websocket(
        { baseUrl: f.baseUrl, token: "synthetic-secret" },
        {
          ...options,
          signal: stop.signal,
          onStatus: (s) => states.push(s.state),
        },
      )[Symbol.asyncIterator]();
      assert.equal((await iterator.next()).value.cursor, "synthetic-company:1");
      assert.equal((await iterator.next()).value.cursor, "synthetic-company:2");
      stop.abort();
      await iterator.return();
      assert.match(requests[1].url, /after=synthetic-company%3A1/);
      assert.ok(!requests[0].url.includes("secret"));
      assert.equal(
        requests[0].headers.authorization,
        "Bearer synthetic-secret",
      );
      assert.ok(
        states.includes("connected") &&
          states.includes("heartbeat") &&
          states.includes("reconnecting"),
      );
    } finally {
      stop.abort();
      await f.close();
    }
  },
);
test(
  "WebSocket rejects HTTP authentication and stream cursor errors without retry",
  { timeout: 10000 },
  async () => {
    let mode = "http",
      attempts = 0;
    const f = await fixture((_q, r) => r.end());
    f.server.on("upgrade", (req, socket, head) => {
      attempts++;
      if (mode === "http") {
        const body = JSON.stringify({
          error: { code: "UNAUTHORIZED", message: "Invalid token" },
        });
        socket.end(
          `HTTP/1.1 401 Unauthorized\r\nContent-Type: application/json\r\nContent-Length: ${Buffer.byteLength(body)}\r\nConnection: close\r\n\r\n${body}`,
        );
        return;
      }
      f.ws.handleUpgrade(req, socket, head, (ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            status: 409,
            code: "EVENT_CURSOR_EXPIRED",
            message: "Reload",
          }),
        );
        ws.close();
      });
    });
    try {
      await assert.rejects(
        websocket({ baseUrl: f.baseUrl, token: "synthetic" }, options)
          [Symbol.asyncIterator]()
          .next(),
        (e) => e.status === 401,
      );
      assert.equal(attempts, 1);
      mode = "frame";
      await assert.rejects(
        websocket({ baseUrl: f.baseUrl, token: "synthetic" }, options)
          [Symbol.asyncIterator]()
          .next(),
        (e) => e.code === "EVENT_CURSOR_EXPIRED",
      );
      assert.equal(attempts, 2);
    } finally {
      await f.close();
    }
  },
);
test("browser bundle excludes Node/WebSocket modules; separate CJS Node export loads", async () => {
  const bundled = await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "browser",
    write: false,
    metafile: true,
  });
  assert.ok(
    !Object.keys(bundled.metafile.inputs).some((p) =>
      /node_modules\/ws\/|src\/node\.ts/.test(p),
    ),
  );
  const { createRequire } = await import("node:module");
  const require = createRequire(import.meta.url);
  assert.equal(
    typeof require("../dist/node.cjs").subscribeToEvents,
    "function",
  );
});
