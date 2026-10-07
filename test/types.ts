import { createBistryskladClient } from "../dist/index.js";
import type { DefaultFields } from "../dist/index.js";
type Fields = Omit<DefaultFields, "product" | "receipt"> & {
  product: {
    read: {
      material?: string | null;
      weight?: number | null;
      readonly archived?: string | null;
    };
    write: { material?: "Cotton" | "Linen" | null; weight?: number | null };
  };
  receipt: {
    read: { delivered?: string | null };
    write: { delivered?: string | null };
  };
};
const client = createBistryskladClient<Fields>({
  baseUrl: "https://example.test",
  token: "synthetic",
});
client.products.create({
  name: "Valid",
  customValues: { material: "Cotton", weight: 0 },
});
// @ts-expect-error unknown custom field
client.products.create({ name: "Invalid", customValues: { typo: "Cotton" } });
// @ts-expect-error select writes have literal choices
client.products.create({ name: "Invalid", customValues: { material: "Silk" } });
// @ts-expect-error number is not text
client.products.update("id", { customValues: { weight: "heavy" } });
// @ts-expect-error archived cannot be written
client.products.update("id", { customValues: { archived: "x" } });
// @ts-expect-error custom document writes require kind
client.procurement.update("id", { customValues: { delivered: "2026-10-04" } });
client.procurement.update("id", {
  kind: "receipt",
  customValues: { delivered: null },
});
client.procurement.update("id", { note: "Valid ordinary update" });
// @ts-expect-error unsupported order status
client.orders.status("id", { status: "made_up" });
// @ts-expect-error wrong body scalar
client.products.create({ name: 42 });
async function reads() {
  const data = await client.state.get();
  const material: string | null | undefined =
    data.products[0].customValues.material;
  const weight: number | null | undefined =
    data.products[0].customValues.weight;
  const archived: string | null | undefined =
    data.products[0].customValues.archived;
  void [material, weight, archived];
  // @ts-expect-error read values keep their scalar types
  const wrong: string = data.products[0].customValues.weight;
  void wrong;
}
void reads;
const compact = createBistryskladClient<Fields, "minimal">({
  baseUrl: "https://example.test",
  token: "synthetic",
  responseMode: "minimal",
});
async function compactReads() {
  const result = await compact.products.create({
    name: "Typed compact",
    customValues: { material: "Cotton" },
  });
  const revision: string = result.revision;
  const id: string = result.result.id;
  // @ts-expect-error compact commands do not return a full state
  result.state;
  const state = await compact.state.get();
  const weight: number | null | undefined =
    state.products[0].customValues.weight;
  const legacy = await client.products.create({ name: "Legacy" });
  legacy.state.products;
  // @ts-expect-error full responses do not promise a compact revision
  const impossible: string = legacy.revision;
  void impossible;
  void [revision, id, weight];
}
void compactReads;

client.catalogProfiles.create({
  name: "Store",
  warehouseId: "main",
  priceTypeId: "retail",
});
client.catalogProfiles.update("profile", { version: 1, archived: true });
client.catalogPresentations.update("common", {
  version: "from-get",
  productOrder: null,
  publications: [{ productId: "a", published: null }],
});
// @ts-expect-error profile edits require their optimistic version
client.catalogProfiles.update("profile", { archived: true });
// @ts-expect-error catalog sorting is a finite set
client.catalogProfiles.catalog("profile", { sort: "random" });
async function profileReads() {
  const page = await client.catalogProfiles.catalog("profile", {
    productId: ["a", "b"],
    limit: 50,
    sort: "default",
  });
  const value: string | null | undefined =
    page.products[0].customValues.material;
  const product = await client.catalogProfiles.product("profile", "a");
  const weight: number | null | undefined = product.customValues.weight;
  // @ts-expect-error custom scalar is retained for profile detail
  const invalid: string = product.customValues.weight;
  void [value, weight, invalid];
}
void profileReads;

client.salesWorkflows.create({
  name: "Delivery",
  definition: {
    initialStatus: "accepted",
    statuses: [
      { id: "accepted", label: "Accepted", category: "new", tone: "blue" },
      { id: "done", label: "Done", category: "completed", tone: "green" },
    ],
    transitions: [
      {
        id: "finish",
        label: "Finish",
        from: "accepted",
        to: "done",
        actions: ["deduct_stock"],
      },
    ],
  },
});
client.orders.transition("id", { transitionId: "finish" });
// @ts-expect-error workflow version is required for concurrent edit protection
client.salesWorkflows.update("id", { name: "Renamed" });
// @ts-expect-error transition ID is required
client.orders.transition("id", {});
client.salesWorkflows.create({
  name: "Invalid",
  definition: {
    initialStatus: "a",
    statuses: [],
    transitions: [
      {
        id: "x",
        label: "x",
        from: "a",
        to: "b", // @ts-expect-error unsupported workflow action
        actions: ["execute_js"],
      },
    ],
  },
});

async function realtimeTypes() {
  const page = await client.events.list({
    after: "synthetic-company:1",
    limit: 100,
  });
  const cursor: string = page.cursor;
  for await (const event of client.events.subscribe({
    after: cursor,
    signal: new AbortController().signal,
  })) {
    const id: string | null = event.entityId;
    const type:
      | "product.created"
      | "product.updated"
      | "product.deleted"
      | "catalog.invalidated" = event.type;
    void [id, type];
  }
}
void realtimeTypes;
// @ts-expect-error subscriptions have no idempotency key
client.events.subscribe({ idempotencyKey: "unused" });

client.workspace.products.list({
  conditions: [
    { id: "w", field: "custom:weight", operator: "gte", value: "1", to: "" },
  ],
  sort: { field: "price", direction: "asc" },
});
// @ts-expect-error unknown company custom code in a filter
client.workspace.products.list({
  conditions: [
    { id: "w", field: "custom:typo", operator: "eq", value: "x", to: "" },
  ],
});
// @ts-expect-error unknown company custom code in a sort
client.workspace.products.list({
  sort: { field: "custom:typo", direction: "asc" },
});
// @ts-expect-error invalid direction
client.workspace.products.list({ sort: { field: "price", direction: "up" } });
client.workspace.products.export([{ key: "custom:weight", label: "Weight" }]);
// @ts-expect-error invalid export column
client.workspace.products.export([{ key: "custom:typo", label: "Typo" }]);
async function resourceReads() {
  const page = await client.workspace.products.list({ limit: 50 });
  const weight: number | null | undefined =
    page.data.products?.[0].customValues.weight;
  // @ts-expect-error scoped reads preserve custom scalar
  const wrong: string = page.data.products![0].customValues.weight;
  const file: Blob = await client.workspace.products.export([
    { key: "name", label: "Name" },
  ]);
  void [weight, wrong, file];
}
void resourceReads;
