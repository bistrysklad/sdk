import { createServer } from "node:http";
import type { ServerResponse } from "node:http";
import { readFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import { createBistryskladClient, BistryskladError } from "@bistrysklad/sdk";
import { subscribeToEvents } from "@bistrysklad/sdk/node";

const token = process.env.BISTRYSKLAD_TOKEN;
const profileId = process.env.BISTRYSKLAD_PROFILE_ID;
if (!token || !profileId)
  throw new Error(
    "Set BISTRYSKLAD_TOKEN and BISTRYSKLAD_PROFILE_ID on the server",
  );
const config = {
  baseUrl: process.env.BISTRYSKLAD_URL ?? "https://bistrysklad.ru",
  token,
};
const sklad = createBistryskladClient({ ...config, responseMode: "minimal" });
const stop = new AbortController();
const browsers = new Set<ServerResponse>();
let snapshot: {
  version: string;
  products: {
    id: string;
    name: string;
    price: number | null;
    available: number | null;
  }[];
};

async function reload() {
  for (let attempt = 0; attempt < 3; attempt++) {
    let offset: number | null = 0,
      version: string | undefined;
    const products: typeof snapshot.products = [];
    while (offset !== null) {
      const page = await sklad.catalogProfiles.catalog(profileId!, {
        limit: 100,
        offset,
      });
      if (version && version !== page.version) break;
      version = page.version;
      // Explicit public fields; do not expose custom fields or service metadata by default.
      products.push(
        ...page.products.map(({ id, name, price, available }) => ({
          id,
          name,
          price,
          available,
        })),
      );
      if (products.length > 5000)
        throw new Error(
          "Example supports up to 5000 published products; use persistent pagination for larger catalogs",
        );
      offset = page.nextOffset;
    }
    if (offset === null) {
      snapshot = { version: version!, products };
      for (const response of browsers) {
        if (
          !response.write(
            `event: catalog.changed\ndata: ${JSON.stringify({ version })}\n\n`,
          )
        )
          response.destroy();
      }
      return;
    }
  }
  throw new Error("Catalog keeps changing; retry snapshot later");
}
let cursor = (await sklad.events.list()).cursor;
await reload();
const server = createServer(async (request, response) => {
  try {
    if (request.method !== "GET") {
      response.writeHead(405).end();
      return;
    }
    const path = new URL(request.url ?? "/", "http://localhost").pathname;
    if (path === "/catalog") {
      response.writeHead(200, {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      });
      response.end(JSON.stringify(snapshot));
      return;
    }
    if (path === "/events") {
      if (browsers.size >= 100) {
        response.writeHead(503).end();
        return;
      }
      response.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      });
      response.write(
        `event: catalog.changed\ndata: ${JSON.stringify({ version: snapshot.version })}\n\n`,
      );
      browsers.add(response);
      const heartbeat = setInterval(
        () => response.write(": heartbeat\n\n"),
        15000,
      );
      response.once("close", () => {
        clearInterval(heartbeat);
        browsers.delete(response);
      });
      return;
    }
    if (path === "/" || path === "/index.html") {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(await readFile(new URL("./index.html", import.meta.url)));
      return;
    }
    response.writeHead(404).end();
  } catch {
    if (!response.headersSent) response.writeHead(503);
    response.end();
  }
});
server.listen(Number(process.env.PORT ?? 3000), "127.0.0.1");
console.log("Published catalog example: http://127.0.0.1:3000");
for (const signal of ["SIGINT", "SIGTERM"] as const)
  process.once(signal, () => {
    stop.abort();
    for (const response of browsers) response.end();
    server.close();
  });

while (!stop.signal.aborted) {
  try {
    for await (const event of subscribeToEvents(config, {
      after: cursor,
      signal: stop.signal,
    })) {
      await reload();
      cursor = event.cursor;
    }
  } catch (error) {
    if (stop.signal.aborted) break;
    if (
      error instanceof BistryskladError &&
      [401, 403].includes(error.status)
    ) {
      console.error("Warehouse access revoked");
      process.exitCode = 1;
      stop.abort();
      server.close();
      for (const response of browsers) response.end();
      break;
    }
    if (
      error instanceof BistryskladError &&
      error.code === "EVENT_CURSOR_EXPIRED"
    )
      cursor = (await sklad.events.list()).cursor;
    // Retain the last successfully handled cursor for temporary failures.
    console.error("Catalog refresh interrupted; retrying");
    await delay(1000, undefined, { signal: stop.signal }).catch(() => {});
    if (!stop.signal.aborted) await reload().catch(() => {});
  }
}
