import type { CompanySnapshot, EntityKind } from "./types.js";
export const entityKinds: EntityKind[] = [
  "product",
  "partner",
  "purchase_order",
  "supplier_invoice",
  "receipt",
  "supplier_return",
  "internal_order",
];
export function validateSnapshot(value: unknown): CompanySnapshot {
  if (!value || typeof value !== "object")
    throw new Error("Invalid company schema");
  const s = value as CompanySnapshot;
  if (
    s.formatVersion !== 1 ||
    typeof s.companyId !== "string" ||
    !/^[0-9a-f-]{36}$/i.test(s.companyId) ||
    typeof s.revision !== "string" ||
    !/^[0-9a-f]{64}$/.test(s.revision) ||
    !Array.isArray(s.fields) ||
    s.fields.length > 10_000
  )
    throw new Error("Unsupported or invalid company schema");
  const ids = new Set<string>(),
    codes = new Set<string>();
  for (const f of s.fields) {
    if (
      !f ||
      typeof f.id !== "string" ||
      !/^[0-9a-f-]{36}$/i.test(f.id) ||
      typeof f.code !== "string" ||
      !/^[a-z][a-z0-9_]{0,63}$/.test(f.code) ||
      ["constructor", "prototype"].includes(f.code) ||
      !entityKinds.includes(f.entityKind) ||
      typeof f.name !== "string" ||
      !["string", "number", "date", "boolean", "select"].includes(
        f.valueType,
      ) ||
      !Array.isArray(f.options) ||
      f.options.some((x: unknown) => typeof x !== "string" || x.length > 100) ||
      f.options.length > 100 ||
      typeof f.archived !== "boolean" ||
      (f.valueType === "select" && !f.options.length)
    )
      throw new Error("Invalid custom field metadata");
    const code = `${f.entityKind}:${f.code}`;
    if (ids.has(f.id) || codes.has(code))
      throw new Error("Duplicate custom field ID or code");
    ids.add(f.id);
    codes.add(code);
  }
  return {
    formatVersion: 1,
    companyId: s.companyId,
    revision: s.revision,
    fields: [...s.fields]
      .sort(
        (a, b) =>
          a.entityKind.localeCompare(b.entityKind, "en") ||
          a.code.localeCompare(b.code, "en") ||
          a.id.localeCompare(b.id, "en"),
      )
      .map((f) => ({
        id: f.id,
        code: f.code,
        entityKind: f.entityKind,
        name: f.name,
        valueType: f.valueType,
        options: [...f.options],
        archived: f.archived,
      })),
  };
}
export function validateOpenApi(
  value: unknown,
): asserts value is Record<string, unknown> & {
  paths: Record<
    string,
    Record<
      string,
      { operationId?: string; security?: Record<string, string[]>[] }
    >
  >;
} {
  if (
    !value ||
    typeof value !== "object" ||
    !("openapi" in value) ||
    typeof value.openapi !== "string" ||
    !value.openapi.startsWith("3.1.") ||
    !("paths" in value) ||
    !value.paths ||
    typeof value.paths !== "object"
  )
    throw new Error("Expected OpenAPI 3.1 JSON");
  const visit = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    if (
      "$ref" in node &&
      (typeof node.$ref !== "string" || !node.$ref.startsWith("#/"))
    )
      throw new Error("External schema references are unsupported");
    Object.values(node).forEach(visit);
  };
  visit(value);
}
