# @bistrysklad/sdk

Typed SDK for the Bistry Sklad Bearer API, version `0.2.0`.
Node22.18+ is required for the CLI and Node client. The client entrypoint also
bundles for modern browsers with fetch, crypto.randomUUID and AbortSignal.any;
use a server integration to keep service tokens private.

## Install and make the first call

```sh
npm install @bistrysklad/sdk
```

```ts
import { createBistryskladClient } from "@bistrysklad/sdk";

const sklad = createBistryskladClient({
  baseUrl: "https://bistrysklad.ru", // /api/v1 is accepted too
  token: process.env.BISTRYSKLAD_TOKEN!,
});

const catalog = await sklad.catalog.list();
console.log(catalog.products.map((product) => product.name));

const created = await sklad.products.create({ name: "Packing box" });
console.log(created.result.id); // Idempotency-Key is created automatically
```

The owner creates/revokes tokens in Settings → API tokens. Tokens default to read access. The owner explicitly grants catalog writes and
order access. A new company starts empty. Methods use the stored API data and respect tenant isolation, workload protection and plan
feature permissions. Session-only settings, owner billing requests and MoySklad import
management are operated through the application and are not SDK methods.

## Generate types from your company URL

Provide `BISTRYSKLAD_TOKEN` through your shell environment or CI secret store.
The token is never a CLI argument or part of a generated file.

```sh
npx bistrysklad generate --url https://bistrysklad.ru --out src/bistrysklad
```

This creates three TypeScript files and a managed-files manifest:

| File                          | Contents                                                       |
| ----------------------------- | -------------------------------------------------------------- |
| `api.ts`                      | DTOs, request bodies and operation responses from live OpenAPI |
| `fields.ts`                   | Company field types, ID/code mapping and metadata revision     |
| `client.ts`                   | Ready client factory, with signatures from local `api.ts`      |
| `.bistrysklad-generated.json` | Checksums identifying files owned by the generator             |

The URL is recorded as the default address in the generated factory. Generated
files contain metadata and schema only. Commit them to your project. Application
builds and autocomplete use local files and do not fetch schemas from the API.
Run generation again after changing custom fields, and review the diff.

```ts
import { createCompanyClient } from "./bistrysklad/client.js";
import type { Product } from "./bistrysklad/fields.js";

const sklad = createCompanyClient({ token: process.env.BISTRYSKLAD_TOKEN! });

// Suppose this company has material: select(Cotton, Linen), weight: number.
await sklad.products.create({
  name: "Fabric",
  customValues: { material: "Cotton", weight: 1.25 },
});

const page = await sklad.workspace.products.list();
const product: Product = page.data.products![0];
const weight: number | null | undefined = product.customValues.weight;

// TypeScript rejects unknown codes, a string weight and an invalid select option.
// Wire JSON still uses field IDs; the client translates codes in both directions.
```

All custom fields are optional and nullable: `undefined`/omitted means no value
provided, and `null` clears the value according to the server's update semantics.
Select writes accept current literal choices; reads allow historical strings.
Archived fields remain readable, have readonly properties, and are excluded
from writes. Dates are strings in `YYYY-MM-DD`; actual calendar dates are checked
before sending a generated-client write. False and zero are preserved.

Product custom fields participate in public reads and permitted writes.
The generated client sends its company ID; a token from another company is
rejected by the API before any command effect. Unknown wire field IDs are
preserved on reads; regenerate to obtain their names and types.

Use separate output directories/factories for different companies. There is no
global TypeScript augmentation or mixing of their fields. Do not edit managed
files by hand: the generator refuses to replace changed or unmanaged files.
Failed network/schema validation leaves the existing files intact, and valid
generation replaces the directory through a staged rename.

## CI drift check

```json
{
  "scripts": {
    "sklad:generate": "bistrysklad generate --url https://bistrysklad.ru --out src/bistrysklad",
    "sklad:check": "npm run sklad:generate -- --check"
  }
}
```

`--check` performs no filesystem writes. Exit0 means current, exit1 means the
API/company schema changed, and exit2 means authentication, network, schema or
output validation failed. A check consumes a schema API request under the
company's activity accounting. A rename, select option change, archive or added/deleted
field also causes drift. Upgrading the SDK is required for new unsupported routes.

## Idempotency, retries and errors

A write generates one UUID per logical method call. All attempts of that call
use identical URL, method, body bytes and key. Reads and writes retry connection failures, 429 and 502/503/504 up to three
attempts by default, including the first. Backoff starts at 200ms, capped at
2s; Retry-After takes priority within the shared 30s deadline. Client settings
are merged with per-call overrides. Use maxAttempts:1 to disable retries:

```ts
await sklad.products.create(
  { name: "Packing box" },
  { retry: { maxAttempts: 1 }, timeoutMs: 15_000 },
);
```

Provide `idempotencyKey` if you persist a job and resume it after a process
restart. A new method call without that key is a new command. The SDK returns
the write key in errors so you can retain it and retry the same input.
`Retry-After` waiting is bounded by the total call timeout; business400/409
errors do not retry. A 429 requests a pause; follow Retry-After and reduce concurrency.

```ts
import { BistryskladError } from "@bistrysklad/sdk";
try {
  await sklad.products.create({ name: "Packing box" });
} catch (error) {
  if (error instanceof BistryskladError) {
    console.log(error.status, error.code, error.idempotencyKey);
    console.log(error.rateLimit.remaining, error.rateLimit.retryAfterMs);
  }
}
```

Errors expose status/code/message, Retry-After information and the request key.
Network, malformed JSON, cancellation and deadlines have distinct codes.
`CallOptions.signal` cancels the request; `timeoutMs` defaults to30000.
Client options accept custom fetch, a token provider and an `onResponse`
callback for status/retry monitoring. A proxy HTML response is not included
in an error message. ESM and CommonJS imports both include strict declarations.

## Photos

Upload with `productImages.create(productId, bytes, {contentType:"image/png"})`;
read with `images.get(imageId)`, returning the original Blob. To resize, call
`images.get(imageId, { width: 400, height: 400, fit: "cover", format: "webp" })`.
The default format is lossless WebP; PNG is also available. Resizing changes
resolution but encoding adds no loss. Transparency is retained, EXIF orientation
is applied, and small images are never enlarged. `contain` keeps the whole
image; `cover` crops the centre and needs both dimensions. A dimension is 1..4096
px; variants accept static sources up to 40 megapixels. Cached variants remain
authenticated. Lossless output can be larger than a JPEG source. Uploads require the explicit
catalog-write permission. Bytes and idempotency keys survive retries.

## Token permissions and compact receipts

New and existing ordinary tokens default to catalog/photo/profile/event reads.
The owner grants catalog writes and order access independently in the cabinet.
Settings, billing, import, full warehouse state and financial documents are
cabinet operations and have no SDK methods. Product pages do not expose cost
or supplier data. `TOKEN_PERMISSION_DENIED` is a 403 requiring a permission change.

Commands always resolve to `{result,revision}` after commit. Read current data
with `workspace.products.list/get`, `workspace.orders.list/get` and
`workspace.salesWorkflows.list/get`. The revision is not an event cursor.
`responseMode` is retained as a source-compatibility option; receipts stay compact.

Profiles are configured in the application; SDK reads published profile catalogs
and presentations. Custom sales models are configured in the application; use
`orders.transition(id,{transitionId})` with a permitted transition of the saved
order model. See the [integration guide](integration.md) for scheduling,
reservation, photos and WebSocket updates.

## Repository development

Run `npm ci`, `npm run generate:check`, `npm test`, `npm run package:check`.
The public contract snapshot is sufficient; no backend checkout is required.
Tests install an actual tarball, compile generated types offline, check ESM/CJS,
negative field types and transport recovery. [Publishing](releases.md) uses
GitHub Releases and npm Trusted Publishing without permanent registry secrets.

[Full interactive HTTP/SDK reference](https://docs.bistrysklad.ru/reference.html).
