import assert from "node:assert/strict";
import test from "node:test";
import { createBistryskladClient, BistryskladError } from "../dist/index.js";
const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
const opts = (fetch) => ({
  baseUrl: "https://synthetic.example/api/v1",
  token: "synthetic-sdk-token",
  fetch,
});
test("all clients negotiate compact commands and preserve mode across retries",async()=>{
  const calls=[];
  const client=createBistryskladClient({...opts(async request=>{
    calls.push({path:new URL(request.url).pathname,prefer:request.headers.get("Prefer"),key:request.headers.get("Idempotency-Key")});
    if(calls.length===1)return json({error:{code:'UNAVAILABLE',message:'Retry'}},503);
    return json(request.method==='GET'?{products:[]}:{result:{id:'synthetic'},revision:'company:1'},200,{'Preference-Applied':'return=minimal'});
  }),responseMode:'minimal'});
  assert.equal((await client.products.create({name:'Synthetic'},{retry:{maxAttempts:2,baseDelayMs:1,maxDelayMs:1}})).revision,'company:1');
  await client.catalog.list();
  assert.equal(calls[0].prefer,'return=minimal');assert.equal(calls[1].prefer,'return=minimal');assert.equal(calls[0].key,calls[1].key);assert.equal(calls[2].prefer,null);
  const ordinary=createBistryskladClient(opts(async request=>{assert.equal(request.headers.get('Prefer'),'return=minimal');return json({result:{id:'saved'},revision:'company:2'});}));
  assert.equal((await ordinary.products.create({name:'Saved'})).revision,'company:2');
});
test("minimal clients reject a legacy server response without silently claiming a typed revision",async()=>{
  const client=createBistryskladClient({...opts(async()=>json({result:{id:'committed'},state:{products:[]}})),responseMode:'minimal'});
  await assert.rejects(client.products.create({name:'Synthetic'}),error=>error instanceof BistryskladError&&error.code==='COMPACT_RESPONSE_UNSUPPORTED'&&typeof error.idempotencyKey==='string');
});
test("profile catalogs encode batch IDs and finite sorts; presentation reads need no command key", async () => {
  const calls = [];
  const client = createBistryskladClient(
    opts(async (request) => {
      calls.push({
        url: request.url,
        method: request.method,
        key: request.headers.get("Idempotency-Key"),
        body: await request.text(),
      });
      return json({ products: [], result: { id: "common" } });
    }),
  );
  await client.catalogProfiles.catalog("shop/one", {
    productId: ["a", "b"],
    sort: "price_desc",
    offset: 2,
    limit: 10,
  });
  const url = new URL(calls[0].url);
  assert.equal(url.pathname, "/api/v1/catalog-profiles/shop%2Fone/catalog");
  assert.deepEqual(url.searchParams.getAll("productId"), ["a", "b"]);
  assert.equal(url.searchParams.get("sort"), "price_desc");
  assert.equal(calls[0].key, null);
  await client.catalogPresentations.get("common");
  assert.equal(calls[1].method, "GET");
  assert.equal(calls[1].key, null);
  assert.equal(calls[1].body, "");
});
test("token provider failures and waiting obey the total deadline before fetch", async () => {
  let calls = 0;
  const fetch = async () => {
    calls++;
    return json({});
  };
  const failed = createBistryskladClient({
    ...opts(fetch),
    token: () => {
      throw new Error("private provider detail");
    },
  });
  await assert.rejects(
    failed.products.create({ name: "Synthetic" }),
    (e) =>
      e.code === "AUTH_ERROR" &&
      !!e.idempotencyKey &&
      !e.message.includes("private provider detail"),
  );
  const pending = createBistryskladClient({
    ...opts(fetch),
    token: () => new Promise(() => {}),
  });
  const keepAlive = setTimeout(() => {}, 100);
  try {
    await assert.rejects(
      pending.products.create({ name: "Synthetic" }, { timeoutMs: 15 }),
      (e) => e.code === "TIMEOUT" && !!e.idempotencyKey,
    );
  } finally {
    clearTimeout(keepAlive);
  }
  assert.equal(calls, 0);
});
test("commands get unique keys; explicit retries keep identical method, URL, key and bytes", async () => {
  const calls = [];
  const client = createBistryskladClient(
    opts(async (request) => {
      calls.push({
        method: request.method,
        url: request.url,
        key: request.headers.get("Idempotency-Key"),
        body: await request.text(),
        auth: request.headers.get("Authorization"),
      });
      return calls.length === 1
        ? json({ error: { code: "BUSY", message: "Busy" } }, 503)
        : json({ result: { id: "synthetic" }, revision: "company:1" });
    }),
  );
  await client.products.update(
    "id/with space",
    { name: "Cotton" },
    { retry: { maxAttempts: 2, baseDelayMs: 1 } },
  );
  assert.deepEqual(calls[0], calls[1]);
  assert.match(calls[0].key, /^[0-9a-f-]{36}$/);
  assert.equal(
    calls[0].url,
    "https://synthetic.example/api/v1/products/id%2Fwith%20space",
  );
  assert.equal(calls[0].method, "PATCH");
  assert.equal(calls[0].auth, "Bearer synthetic-sdk-token");
  await client.products.create({ name: "Other" });
  assert.notEqual(calls[1].key, calls[2].key);
  await client.products.delete("id", {
    idempotencyKey: "resume-after-restart",
  });
  assert.equal(calls.at(-1).key, "resume-after-restart");
  assert.equal(calls.at(-1).method, "DELETE");
});
test("per-call retries can be disabled; structured and proxy failures retain identity and retry hints", async () => {
  let calls = 0;
  const client = createBistryskladClient({
    ...opts(async () => {
      calls++;
      return json(
        { error: { code: "API_QUOTA_EXCEEDED", message: "Monthly limit" } },
        429,
        {
          "Retry-After": "45",
          "X-RateLimit-Limit": "15",
          "X-RateLimit-Remaining": "0",
        },
      );
    }),
    retry: { maxAttempts: 3 },
  });
  await assert.rejects(
    client.products.create({ name: "Synthetic" }, {retry:{maxAttempts:1}}),
    (error) => {
      assert.ok(error instanceof BistryskladError);
      assert.equal(error.status, 429);
      assert.equal(error.code, "API_QUOTA_EXCEEDED");
      assert.ok(error.idempotencyKey);
      assert.deepEqual(error.rateLimit, {
        limit: 15,
        remaining: 0,
        retryAfterMs: 45000,
      });
      return true;
    },
  );
  assert.equal(calls, 1);
  const proxy = createBistryskladClient(
    opts(async () => new Response("<html>upstream</html>", { status: 502 })),
  );
  await assert.rejects(
    proxy.products.create({ name: "Synthetic" }),
    (e) => e.code === "HTTP_ERROR" && !e.message.includes("<html>"),
  );
});
test("reads retry network and 503 errors, serialize repeated filters, and do not retry 409 writes", async () => {
  let attempts = 0,
    url;
  const client = createBistryskladClient({
    ...opts(async (req) => {
      url = req.url;
      attempts++;
      if (attempts === 1) throw new TypeError("offline");
      if (attempts === 2) return json({}, 503);
      return json({ products: [] });
    }),
    retry: { baseDelayMs: 1 },
  });
  await client.catalog.list({ valueId: ["a", "b"], priceTypeId: "retail" });
  assert.equal(attempts, 3);
  assert.equal(new URL(url).searchParams.getAll("valueId").join(), "a,b");
  let writes = 0;
  const conflict = createBistryskladClient(
    opts(async () => {
      writes++;
      return json({ error: { code: "CONFLICT", message: "Conflict" } }, 409);
    }),
  );
  await assert.rejects(
    conflict.orders.delete("id", { retry: { maxAttempts: 3, baseDelayMs: 1 } }),
    (e) => e.status === 409,
  );
  assert.equal(writes, 1);
});
test("binary photos and files preserve bytes, MIME and cancellation", async () => {
  let bytes, mime, fileName;
  const client = createBistryskladClient(
    opts(async (req) => {
      if (req.method === "POST") {
        bytes = await req.arrayBuffer();
        mime = req.headers.get("Content-Type");
        fileName = req.headers.get("X-File-Name");
        return json({ result: { id: "image" }, revision: "company:1" });
      }
      return new Response(new Uint8Array([0, 255, 42]), {
        headers: { "Content-Type": "image/png" },
      });
    }),
  );
  await client.productImages.create("product", new Uint8Array([1, 2, 3]), {
    contentType: "image/png",
    fileName: "Накладная.png",
  });
  assert.deepEqual([...new Uint8Array(bytes)], [1, 2, 3]);
  assert.equal(mime, "image/png");
  assert.equal(decodeURIComponent(fileName), "Накладная.png");
  const blob = await client.images.get("image");
  assert.ok(blob instanceof Blob);
  assert.equal(blob.type, "image/png");
  assert.deepEqual([...new Uint8Array(await blob.arrayBuffer())], [0, 255, 42]);
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    client.images.get("image", { signal: controller.signal }),
    (e) => e.code === "ABORTED",
  );
});
test("deadline interrupts retry-after waiting and exposes the write key", async () => {
  const client = createBistryskladClient(
    opts(async () => json({}, 503, { "Retry-After": "10" })),
  );
  const keepAlive = setTimeout(() => {}, 100);
  try {
    await assert.rejects(
      client.products.create(
        { name: "Synthetic" },
        { timeoutMs: 15, retry: { maxAttempts: 2 } },
      ),
      (e) => e.code === "TIMEOUT" && !!e.idempotencyKey,
    );
  } finally {
    clearTimeout(keepAlive);
  }
});
test("company custom codes map to IDs; reads preserve history and unknown IDs", async () => {
  const unknown = "00000000-0000-4000-8000-000000000009";
  const fields = [
    {
      id: "00000000-0000-4000-8000-000000000001",
      code: "material",
      entityKind: "product",
      name: "Material",
      valueType: "select",
      options: ["Cotton"],
      archived: false,
    },
    {
      id: "00000000-0000-4000-8000-000000000002",
      code: "legacy",
      entityKind: "product",
      name: "Legacy",
      valueType: "string",
      options: [],
      archived: true,
    },
    {
      id: "00000000-0000-4000-8000-000000000003",
      code: "date",
      entityKind: "product",
      name: "Date",
      valueType: "date",
      options: [],
      archived: false,
    },
  ];
  let sent, company;
  const schema = {
    formatVersion: 1,
    companyId: "00000000-0000-4000-8000-000000000010",
    revision: "a".repeat(64),
    fields,
  };
  const client = createBistryskladClient(
    opts(async (req) => {
      if(req.method !== "GET") {
        sent = JSON.parse(await req.text());
        company = req.headers.get("X-Bistrysklad-Company");
        return json({result:{id:"synthetic"},revision:"company:1"});
      }
      return json({data:{products:[{kind:"product",customValues:{
        [fields[0].id]:"Removed historical option",[fields[1].id]:"Old",[unknown]:42
      }}]}});
    }),
    schema,
  );
  const response = await client.products.create({
    name: "Synthetic",
    customValues: { material: "Cotton", [unknown]: 0 },
  });
  assert.deepEqual(sent.customValues, {
    [fields[0].id]: "Cotton",
    [unknown]: 0,
  });
  assert.equal(company, schema.companyId);
  assert.equal(response.revision,"company:1");
  assert.equal("state" in response,false);
  const page = await client.workspace.products.list();
  assert.deepEqual(page.data.products[0].customValues, {
    material: "Removed historical option",
    legacy: "Old",
    [unknown]: 42,
  });
  await assert.rejects(
    client.products.update("id", { customValues: { material: "Wrong" } }),
    /Unknown option/,
  );
  await assert.rejects(
    client.products.update("id", { customValues: { legacy: "Wrong" } }),
    /archived/,
  );
  await assert.rejects(
    client.products.update("id", { customValues: { typo: "Wrong" } }),
    /Unknown product custom/,
  );
  assert.equal(client.procurement, undefined);
  await assert.rejects(
    client.products.update("id", {customValues:{date:"2026-02-30"}}),
    /Invalid calendar date/,
  );
});
test("writes retry by default after a lost committed response with stable key and body; overrides merge", async () => {
  const attempts=[];
  const client=createBistryskladClient({...opts(async req=>{
    attempts.push({key:req.headers.get('Idempotency-Key'),body:await req.text(),method:req.method,url:req.url});
    if(attempts.length===1)throw new TypeError('response lost after commit');
    if(attempts.length===2)return json({},503);
    return json({result:{id:'committed-once'},revision:'company:1'});
  }),retry:{baseDelayMs:0,maxDelayMs:0}});
  const receipt=await client.products.create({name:'Once'},{retry:{maxDelayMs:1}});
  assert.equal(receipt.result.id,'committed-once');
  assert.equal(attempts.length,3);
  assert.deepEqual(attempts[0],attempts[1]);assert.deepEqual(attempts[1],attempts[2]);
  assert.equal('state' in receipt,false);
});
test("business/auth errors never retry; exhausted default retries and invalid settings are bounded",async()=>{
  for(const status of [400,401,402,403,409]) {
    let calls=0;
    const client=createBistryskladClient({...opts(async()=>{calls++;return json({error:{code:'DENIED',message:'Denied'}},status);}),retry:{baseDelayMs:0}});
    await assert.rejects(client.products.create({name:'No'}),e=>e.status===status&&e.code==='DENIED');
    assert.equal(calls,1);
  }
  let calls=0;
  const client=createBistryskladClient({...opts(async()=>{calls++;throw new TypeError('offline');}),retry:{baseDelayMs:0}});
  await assert.rejects(client.products.create({name:'No'}),e=>e.code==='NETWORK_ERROR'&&!!e.idempotencyKey);
  assert.equal(calls,3);
  await assert.rejects(client.catalog.list(undefined,{retry:{maxAttempts:11}}),/maxAttempts/);
  await assert.rejects(client.catalog.list(undefined,{retry:{baseDelayMs:Infinity}}),/Retry delays/);
  assert.equal(calls,3);
});
