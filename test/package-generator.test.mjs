import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import {
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  writeFile,
  mkdir,
  symlink,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const contract = JSON.parse(await readFile(new URL("../contract/openapi.json",import.meta.url),"utf8"));
const openApiDocument = () => structuredClone(contract);
const exec = promisify(execFile);
const sdkRoot = fileURLToPath(new URL("..", import.meta.url));
const syntheticA = "00000000-0000-4000-8000-00000000000a",
  syntheticB = "00000000-0000-4000-8000-00000000000b";
const field = (
  code,
  type = "string",
  entity = "product",
  archived = false,
  index = 1,
) => ({
  id: `00000000-0000-4000-8000-${String(index).padStart(12, "0")}`,
  code,
  name: code,
  entityKind: entity,
  valueType: type,
  options: type === "select" ? ["Cotton", "Linen"] : [],
  archived,
});
const initial = {
  formatVersion: 1,
  companyId: syntheticA,
  revision: "a".repeat(64),
  fields: [
    field("material", "select"),
    field("weight", "number", "product", false, 2),
    field("legacy", "string", "product", true, 3),
    field("delivered", "date", "receipt", false, 4),
    field("approved", "boolean", "partner", false, 5),
  ],
};
const second = {
  formatVersion: 1,
  companyId: syntheticB,
  revision: "b".repeat(64),
  fields: [field("supplier_code", "string", "product", false, 6)],
};
async function tree(dir) {
  return Object.fromEntries(
    await Promise.all(
      (await readdir(dir)).sort().map(async (name) => [
        name,
        {
          text: await readFile(join(dir, name), "utf8"),
          mtime: (
            await stat(join(dir, name), { bigint: true })
          ).mtimeNs.toString(),
        },
      ]),
    ),
  );
}
test("installed tarball works in ESM/CJS; URL generation is isolated, deterministic, safe, typed and offline", async () => {
  const temp = await mkdtemp(join(tmpdir(), "bistrysklad-sdk-consumer-"));
  let snapshot = structuredClone(initial),
    spec = openApiDocument(),
    failure = 0,
    html = false,
    requests = [], lastProduct = {};
  const server = createServer(async (req, res) => {
    requests.push({
      url: req.url,
      auth: req.headers.authorization,
      company: req.headers["x-bistrysklad-company"],
    });
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/api/v1/openapi.json")
      return res.end(JSON.stringify(spec));
    if (req.url === "/api/v1/schema") {
      if (failure) {
        res.statusCode = failure;
        return res.end(
          html
            ? "<html>proxy</html>"
            : JSON.stringify({
                error: { code: "SYNTHETIC", message: "Unavailable" },
              }),
        );
      }
      if (
        !["Bearer synthetic-token-a", "Bearer synthetic-token-b"].includes(
          req.headers.authorization,
        )
      ) {
        res.statusCode = 401;
        return res.end(
          JSON.stringify({
            error: { code: "UNAUTHORIZED", message: "Unauthorized" },
          }),
        );
      }
      return res.end(
        JSON.stringify(
          req.headers.authorization.endsWith("-b") ? second : snapshot,
        ),
      );
    }
    if (req.url === "/api/v1/products" && req.method === "POST") {
      let body = "";
      for await (const part of req) body += part;
      const input = JSON.parse(body);
      lastProduct = {id:"synthetic-product",kind:"product",customValues:input.customValues};
      return res.end(JSON.stringify({result:{id:"synthetic-product"},revision:"company:1"}));
    }
    if(req.url.startsWith("/api/v1/workspace/products") && req.method === "GET")
      return res.end(JSON.stringify({resource:"products",data:{products:[lastProduct]},ids:[lastProduct.id],revision:"company:1",pagination:{limit:50,offset:0,total:1,nextOffset:null}}));
    res.statusCode = 404;
    res.end("{}");
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const url = `http://127.0.0.1:${server.address().port}`;
  const run = async (args, env = {}) => {
    try {
      const r = await exec(process.execPath, args, {
        cwd: temp,
        env: { ...process.env, ...env },
        maxBuffer: 2_000_000,
      });
      return { code: 0, ...r };
    } catch (e) {
      return { code: e.code, stdout: e.stdout, stderr: e.stderr };
    }
  };
  try {
    const pack = await exec(
      "npm",
      ["pack", "--ignore-scripts", "--json", "--pack-destination", temp],
      { cwd: sdkRoot, maxBuffer: 2_000_000 },
    );
    const manifest = JSON.parse(pack.stdout)[0];
    assert.ok(
      manifest.files.every(
        (f) =>
          f.path.startsWith("dist/") ||
          ["package.json", "README.md", "LICENSE"].includes(f.path) || f.path.startsWith("docs/") || f.path.startsWith("examples/"),
      ),
    );
    assert.ok(manifest.files.some((f) => f.path === "dist/index.d.cts"));
    assert.ok(
      !manifest.files.some((f) =>
        /test|node_modules|private|\.env/.test(f.path),
      ),
    );
    await writeFile(
      join(temp, "package.json"),
      JSON.stringify({
        name: "synthetic-consumer",
        private: true,
        type: "module",
        devDependencies: { typescript: "5.9.3" },
      }),
    );
    await exec(
      "npm",
      [
        "install",
        "--prefer-offline",
        "--ignore-scripts",
        "--no-audit",
        "--no-fund",
        join(temp, manifest.filename),
      ],
      { cwd: temp, maxBuffer: 2_000_000 },
    );
    const installed = join(temp, "node_modules/@bistrysklad/sdk/dist/cli.js");
    const generate = (folder, extra = [], token = "synthetic-token-a") =>
      run(
        [
          installed,
          "generate",
          "--url",
          url + "/api/v1",
          "--out",
          folder,
          ...extra,
        ],
        { BISTRYSKLAD_TOKEN: token },
      );
    assert.equal(
      (
        await run([
          "--input-type=module",
          "-e",
          "import {createBistryskladClient} from '@bistrysklad/sdk'; if(typeof createBistryskladClient!=='function')process.exit(1)",
        ])
      ).code,
      0,
    );
    assert.equal(
      (
        await run([
          "--input-type=commonjs",
          "-e",
          "const {createBistryskladClient}=require('@bistrysklad/sdk'); if(typeof createBistryskladClient!=='function')process.exit(1)",
        ])
      ).code,
      0,
    );
    assert.equal((await generate("company-a")).code, 0);
    const before = await tree(join(temp, "company-a"));
    assert.equal((await generate("company-a")).code, 0);
    assert.deepEqual(await tree(join(temp, "company-a")), before);
    assert.equal((await generate("company-a", ["--check"])).code, 0);
    assert.deepEqual(await tree(join(temp, "company-a")), before);
    assert.equal(
      (await generate("company-b", [], "synthetic-token-b")).code,
      0,
    );
    assert.equal(
      (await generate("company-a", [], "synthetic-token-b")).code,
      2,
    );
    assert.deepEqual(await tree(join(temp, "company-a")), before);
    assert.ok(
      !requests.filter((r) => r.url.includes("openapi")).some((r) => r.auth),
    );
    assert.ok(
      Object.values(before).every((f) => !f.text.includes("synthetic-token")),
    );
    await writeFile(
      join(temp, "app.ts"),
      `import {createCompanyClient as createA} from './company-a/client.js';
import {createCompanyClient as createB} from './company-b/client.js';
import type {Product} from './company-a/fields.js';
export const client=createA({baseUrl:${JSON.stringify(url)},token:'synthetic-token-a'});
const b=createB({baseUrl:${JSON.stringify(url)},token:'synthetic-token-b'});
function examples(){
client.products.create({name:'Valid',customValues:{material:'Cotton',weight:0}});
client.products.create({name:'Nullable',customValues:{material:null,weight:null}});
// @ts-expect-error partners CRUD belongs to the cabinet
client.partners.create({name:'Valid'});
b.products.create({name:'Valid',customValues:{supplier_code:'B'}});
// @ts-expect-error schema A is not schema B
b.products.create({name:'Wrong company field',customValues:{material:'Cotton'}});
// @ts-expect-error unknown code
client.products.create({name:'Wrong',customValues:{typo:'x'}});
// @ts-expect-error select literal must be current choice
client.products.create({name:'Wrong',customValues:{material:'Silk'}});
// @ts-expect-error archived fields are not writable
client.products.update('id',{customValues:{legacy:'x'}});
// @ts-expect-error number must remain numeric
client.products.update('id',{customValues:{weight:'x'}});
// @ts-expect-error empty schema cannot accept unknown keys
client.procurement.update('id',{kind:'internal_order',customValues:{unavailable:'x'}});
// @ts-expect-error kind is required for document custom values
client.procurement.update('id',{customValues:{delivered:'2026-10-04'}});
}
async function reads(){const page=await client.workspace.products.list();const p:Product=page.data.products![0];const weight:number|null|undefined=p.customValues.weight;const historical:string|null|undefined=p.customValues.material;
// @ts-expect-error archived reads are readonly
p.customValues.legacy='changed';
// @ts-expect-error field types participate in responses
const wrong:string=p.customValues.weight;void[weight,historical,wrong];}
async function profileReads(){const page=await client.catalogProfiles.catalog('profile',{productId:['a'],sort:'default',limit:50});const material:string|null|undefined=page.products[0].customValues.material;const card=await client.catalogProfiles.product('profile','a');const weight:number|null|undefined=card.customValues.weight;
// @ts-expect-error custom scalar retained through profile detail
const wrong:string=card.customValues.weight;
client.catalogPresentations.get('common');
// @ts-expect-error profile update needs a version
client.catalogProfiles.update('profile',{archived:true});void[material,weight,wrong];}
void[examples,reads,profileReads];
`,
    );
    await writeFile(
      join(temp, "require.cts"),
      `import sdk = require('@bistrysklad/sdk'); const api=sdk.createBistryskladClient({baseUrl:'https://example.test',token:'synthetic'}); api.products.create({name:'CJS'}); // typed require
// @ts-expect-error CJS declarations have typed fields
api.products.create({name:42});\n`,
    );
    await writeFile(
      join(temp, "tsconfig.json"),
      JSON.stringify({
        compilerOptions: {
          strict: true,
          target: "ES2022",
          module: "NodeNext",
          moduleResolution: "NodeNext",
          outDir: "build",
          skipLibCheck: true,
          lib: ["ES2022", "DOM"],
        },
        include: ["app.ts", "require.cts", "company-a/*.ts", "company-b/*.ts"],
      }),
    );
    const compiled = await run([
      join(temp, "node_modules/typescript/bin/tsc"),
      "-p",
      "tsconfig.json",
    ]);
    assert.equal(compiled.code, 0, compiled.stdout + compiled.stderr);
    const runtime = await run([
      "--input-type=module",
      "-e",
      `import {client} from './build/app.js'; const r=await client.products.create({name:'Synthetic',customValues:{material:'Cotton',weight:0}}); const page=await client.workspace.products.list(); if('state' in r || page.data.products[0].customValues.material!=='Cotton')process.exit(1);`,
    ]);
    assert.equal(runtime.code, 0, runtime.stdout + runtime.stderr);
    assert.equal(requests.at(-1).company, syntheticA);
    // Every drift type causes a check failure without writing any file.
    for (const change of [
      (s) => s.fields.push(field("added", "string", "product", false, 8)),
      (s) => s.fields[0].options.push("Silk"),
      (s) => (s.fields[0].archived = true),
      (s) => (s.fields[0].name = "Rename"),
      (s) => (s.fields = s.fields.slice(1)),
    ]) {
      snapshot = structuredClone(initial);
      change(snapshot);
      snapshot.revision = "c".repeat(64);
      assert.equal((await generate("company-a", ["--check"])).code, 1);
      assert.deepEqual(await tree(join(temp, "company-a")), before);
    }
    snapshot = structuredClone(initial);
    snapshot.fields.push({ ...snapshot.fields[0] });
    assert.equal((await generate("company-a")).code, 2);
    assert.deepEqual(await tree(join(temp, "company-a")), before);
    snapshot = structuredClone(initial);
    snapshot.formatVersion = 999;
    assert.equal((await generate("company-a")).code, 2);
    assert.deepEqual(await tree(join(temp, "company-a")), before);
    snapshot = structuredClone(initial);
    for (const status of [401, 500]) {
      failure = status;
      assert.equal((await generate("company-a")).code, 2);
      assert.deepEqual(await tree(join(temp, "company-a")), before);
    }
    failure = 502;
    html = true;
    assert.equal((await generate("company-a")).code, 2);
    failure = 0;
    html = false;
    assert.equal((await generate("company-a", [], "")).code, 2);
    spec.components.schemas.Bad = {
      $ref: "https://untrusted.example/schema.json",
    };
    assert.equal((await generate("company-a")).code, 2);
    spec = openApiDocument();
    await mkdir(join(temp, "unmanaged"));
    await writeFile(join(temp, "unmanaged/api.ts"), "human code");
    assert.equal((await generate("unmanaged")).code, 2);
    assert.equal(
      await readFile(join(temp, "unmanaged/api.ts"), "utf8"),
      "human code",
    );
    await symlink(join(temp, "company-a"), join(temp, "linked"));
    assert.equal((await generate("linked")).code, 2);
    snapshot = structuredClone(initial);
    snapshot.revision = "d".repeat(64);
    snapshot.fields.push(field("added", "string", "product", false, 8));
    assert.equal((await generate("company-a")).code, 0);
    assert.equal((await generate("company-a", ["--check"])).code, 0);
    const after = await tree(join(temp, "company-a"));
    await writeFile(
      join(temp, "company-a/api.ts"),
      after["api.ts"].text + "\n// manual\n",
    );
    snapshot.revision = "e".repeat(64);
    assert.equal((await generate("company-a")).code, 2);
    // Type compilation does not require either schema endpoint to remain available.
    await new Promise((r) => server.close(r));
    const offline = await run([
      join(temp, "node_modules/typescript/bin/tsc"),
      "-p",
      "tsconfig.json",
      "--noEmit",
    ]);
    assert.equal(offline.code, 0, offline.stdout + offline.stderr);
  } finally {
    server.closeAllConnections();
    await new Promise((r) => server.close(r));
    await rm(temp, { recursive: true, force: true });
  }
});
