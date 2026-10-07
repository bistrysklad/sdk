import type { components } from "./schema.js";
import type { CompanySnapshot, DefaultFields, FieldTypes } from "./types.js";
export type ResourceQuery = components["schemas"]["ResourceQuery"];
export type ResourceCondition = components["schemas"]["ResourceCondition"];
type BuiltinField =
  | "name"
  | "sku"
  | "code"
  | "externalCode"
  | "id"
  | "category"
  | "description"
  | "uom"
  | "country"
  | "tone"
  | "kind"
  | "archived"
  | "tags"
  | "barcodes"
  | "price"
  | "hasPrice"
  | "cost"
  | "minPrice"
  | "minStock"
  | "weightKg"
  | "volumeM3"
  | "vatRate"
  | "physical"
  | "available"
  | "reserved"
  | "lowStock"
  | "stockStatus"
  | "salesWorkflowId"
  | "preferredSupplierId"
  | "parentProductId"
  | "analogIds"
  | "components.productId"
  | "components.quantity"
  | "components.count"
  | "packages.name"
  | "packages.barcode"
  | "packages.quantity"
  | "packages.count"
  | "images.present"
  | "images.count"
  | "images.mimeType"
  | "filterValueIds";
export type CatalogFieldKey<S extends FieldTypes = DefaultFields> =
  | BuiltinField
  | `price:${string}`
  | `filter:${string}`
  | `custom:${Extract<keyof S["product"]["read"], string>}`;
export type CatalogResourceQuery<S extends FieldTypes = DefaultFields> = Omit<
  ResourceQuery,
  "conditions" | "sort"
> & {
  conditions?: (Omit<ResourceCondition, "field"> & {
    field: CatalogFieldKey<S>;
  })[];
  sort?: { field: CatalogFieldKey<S>; direction: "asc" | "desc" } | null;
};
export function resourceField(
  snapshot: CompanySnapshot | undefined,
  key: string,
): string {
  if (!snapshot || !key.startsWith("custom:")) return key;
  const name = key.slice(7),
    field = snapshot.fields.find(
      (f) => f.entityKind === "product" && (f.id === name || f.code === name),
    );
  if (!field)
    throw new Error(
      `Unknown product custom field: ${name}. Regenerate company types.`,
    );
  return `custom:${field.id}`;
}
export function resourceSelection(
  snapshot: CompanySnapshot | undefined,
  query: ResourceQuery = {},
): string {
  return JSON.stringify({
    ...query,
    ...(query.conditions
      ? {
          conditions: query.conditions.map((condition) => ({
            ...condition,
            field: resourceField(snapshot, condition.field),
          })),
        }
      : {}),
    ...(query.sort
      ? {
          sort: {
            ...query.sort,
            field: resourceField(snapshot, query.sort.field),
          },
        }
      : {}),
  });
}
