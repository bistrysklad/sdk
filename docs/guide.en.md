# @bistrysklad/sdk

Typed SDK for the existing Bistry Sklad Bearer API. The first delivery is a local
`0.1.0-beta.4` tarball; it has not been published to the public npm registry.
Node22.18+ is required for the CLI and Node client. The client entrypoint also
bundles for modern browsers with fetch, crypto.randomUUID and AbortSignal.any;
use a server integration to keep service tokens private.

## Install and make the first call

```sh
npm install /path/to/bistrysklad-sdk-0.1.0-beta.4.tgz
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

The owner creates/revokes tokens in Settings → API tokens. A new company starts
empty. Methods use the stored API data and respect company quotas and plan
permissions. Session-only settings, owner billing requests and MoySklad import
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

const state = await sklad.state.get();
const product: Product = state.products[0];
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

Product, partner and each of the five procurement document kinds have separate
field types. A procurement update containing custom values must include its
kind, e.g. `{ kind: "receipt", customValues: { delivered: "2026-10-04" } }`.
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
company's normal quota. A rename, select option change, archive or added/deleted
field also causes drift. Upgrading the SDK is required for new unsupported routes.

## Idempotency, retries and errors

A write generates one UUID per logical method call. All attempts of that call
use identical URL, method, body bytes and key. Write retries are disabled by
default. Reads retry connection failures,429 and502/503/504 up to three attempts.
For a deliberate write retry, opt in per call:

```ts
await sklad.products.create(
  { name: "Packing box" },
  { retry: { maxAttempts: 3 }, timeoutMs: 15_000 },
);
```

Provide `idempotencyKey` if you persist a job and resume it after a process
restart. A new method call without that key is a new command. The SDK returns
the write key in errors so you can retain it and retry the same input. Quota
`Retry-After` waiting is bounded by the total call timeout; business400/409
errors do not retry.429 may be a monthly quota, so retrying cannot expand it.

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

Errors expose status/code/message, quota information and the request key.
Network, malformed JSON, cancellation and deadlines have distinct codes.
`CallOptions.signal` cancels the request; `timeoutMs` defaults to30000.
Client options accept custom fetch, a token provider and an `onResponse`
callback for status/quota monitoring. A proxy HTML response is not included
in an error message. ESM and CommonJS imports both include strict declarations.

## Photos and procurement files

```ts
import { readFile } from "node:fs/promises";

await sklad.productImages.create(productId, await readFile("photo.png"), {
  contentType: "image/png",
});
const original: Blob = await sklad.images.get(imageId);
await sklad.procurementImports.create(await readFile("invoice.png"), {
  contentType: "image/png",
});
const invoice: Blob = await sklad.procurementImports.download(importId);
```

Files use raw bytes, with automatic idempotency and the same timeout/error
handling. The current upload API accepts JPEG, PNG and WebP originals. Bootstrap/catalog return complete collections. Profile catalogs support pagination and product-ID batches.

## Available method groups

`state`, `catalog`, `audit`, `company`, `billing`, `products`, `productImages`,
`images`, `partners`, `organizations`, `contracts`, `customFields`, `warehouses`,
`priceTypes`, `filters`, `filterValues`, `externalLinks`, `purchases`, `orders`,
`salesWorkflows`, `procurement`, `procurementPayments`, `procurementImports`, `stock`, `settings`.
Autocomplete shows their exact request and response types. `components`,
`operations` and `paths` are also exported for custom integration code.

## Repository development

From the standalone SDK repository: `npm ci`, `npm run generate`, `npm test`, `npm pack`.
Generation of the base SDK uses the checked-in public `contract/openapi.json`; no backend checkout is required. Release
gates verify its checked-in generated copies, runtime tests, negative TypeScript
fixtures, URL generation, offline consumer compilation and installation of an
actual tarball in ESM/CJS. The package allowlist contains dist, README, documentation and examples. Public npm publishing and scope ownership are a separate release step.

## Scheduled orders and stock stages

`orders.create` accepts optional `fulfillmentAt` (ISO datetime with offset),
`fulfillmentTimeZone` (IANA zone), and `reserveMode`: `none`, `available`, `full`.
The legacy default remains `full`; explicitly choose `none` to accept an order
without available stock. `orders.reserve(id,{mode})` changes only actual reserve;
`orders.schedule(id,{fulfillmentAt,fulfillmentTimeZone})` changes/clears a deadline.

Settings `orderStockDeductStatus` selects `picking`, `ready`, or `shipped` for
new standard-flow orders. Each order snapshots it. Moving to that stage or a later one deducts
all snapshotted components once, transactionally and without negative stock.
A later `shipped` transition records actual fulfillment and does not deduct
again. Cancel/delete/reserve after deduction are refused; a stock return requires
a separate accounting document. Planned quantity and `reservedQuantity` differ.

## Custom sales workflows

Company models are available in `(await sklad.state.get()).salesWorkflows`.
Create/edit/archive them through `salesWorkflows.create/update`; updates require
an expected `version` and reject stale edits. Assign `salesWorkflowId` to a product.
New orders inherit that model, or accept an explicit `workflowId` (`null` selects
the standard flow). Mixed product models require that explicit choice.

```ts
const state = await sklad.state.get();
const order = state.orders.find(item => item.id === orderId)!;
const allowed = order.workflow.definition.transitions.filter(
  edge => edge.from === order.workflow.statusId,
);
// Choose a permitted transition for your process.
await sklad.orders.transition(order.id, { transitionId: allowed[0].id });
await sklad.salesWorkflows.update(model.id, {
  version: model.version,
  archived: true,
});
```

Definitions have typed `statuses`, an `initialStatus`, and directed `transitions`
with `from/to/label/actions`. Supported actions: `reserve_full`,
`reserve_available`, `release_reserve`, `deduct_stock`. All statuses must be
reachable. Initial category is `new`; `completed/cancelled` are terminal;
completion requires `deduct_stock`. Deduction executes once per order; after
physical consumption, repeated transition stock/reservation actions are skipped.
Manual reservation and cancellation are still refused after consumption.
Orders freeze the definition/name/version at acceptance. Editing or archiving
never rewrites an existing order. `order.workflow.statusId` is the custom node;
`order.status` retains the common reporting category. Use `orders.transition`
for custom models; `orders.status` retains standard stage identifiers.
## Catalog profiles (beta.3)

Create a profile with `client.catalogProfiles.create({name, warehouseId, priceTypeId})`.
Profiles share warehouse product cards and photos. Publication starts disabled;
profiles inherit common publication and order until explicitly overridden.
`catalogProfiles.catalog(profileId, {limit: 50, offset: 0, sort: "default"})`
returns published cards with selected warehouse stock and selected price. Missing
price is `null`; zero stock is valid, services have `null` quantities. Bundle
components are counted within the selected warehouse. Paginate using `nextOffset`
and restart if `version` changes. Repeated `productId` query IDs read a batch;
`catalogProfiles.product(profileId, productId)` reads one published card. Both
retain generated tenant custom field types.

Read `catalogPresentations.get("common")` or a profile ID before updating. Pass
its `version` to `catalogPresentations.update(scopeId, patch)`. Order fields set
to `null` inherit; publication `null` removes an override. Copy/reset order does
not change publication. A stale write returns `CATALOG_VERSION_CONFLICT` (409);
reload and reapply the draft. Profile updates require the numeric profile version.
Mutation idempotency keys are generated automatically by the existing transport.
Private image URLs require authentication; proxy images on your server and keep
warehouse tokens out of the storefront browser. This package is distributed as
a workspace tarball; public npm publication remains a separate action.
