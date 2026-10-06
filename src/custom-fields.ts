import type { CompanySnapshot, EntityKind } from "./types.js";
const isUUID = (value: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
export function encodeCustom(
  snapshot: CompanySnapshot | undefined,
  entity: EntityKind | undefined,
  body: unknown,
): unknown {
  if (
    !snapshot ||
    !entity ||
    !body ||
    typeof body !== "object" ||
    !("customValues" in body) ||
    body.customValues === undefined
  )
    return body;
  if (
    !body.customValues ||
    typeof body.customValues !== "object" ||
    Array.isArray(body.customValues)
  )
    throw new Error("customValues must be an object");
  const values: Record<string, unknown> = Object.create(null);
  for (const [code, value] of Object.entries(body.customValues)) {
    const field = snapshot.fields.find(
      (f) => f.entityKind === entity && (f.code === code || f.id === code),
    );
    if (!field) {
      if (isUUID(code)) {
        values[code] = value;
        continue;
      }
      throw new Error(
        `Unknown ${entity} custom field: ${code}. Regenerate company types.`,
      );
    }
    if (field.archived)
      throw new Error(`Custom field ${field.code} is archived`);
    if (value !== null) {
      const type = field.valueType;
      if (
        (type === "number" &&
          (typeof value !== "number" || !Number.isFinite(value))) ||
        (type === "boolean" && typeof value !== "boolean") ||
        (["string", "date", "select"].includes(type) &&
          typeof value !== "string")
      )
        throw new Error(`Invalid value for ${field.code}`);
      if (type === "select" && !field.options.includes(value as string))
        throw new Error(`Unknown option for ${field.code}`);
      if (
        type === "date" &&
        (!/^\d{4}-\d{2}-\d{2}$/.test(value as string) ||
          Number.isNaN(Date.parse(value as string)) ||
          new Date(value as string).toISOString().slice(0, 10) !== value)
      )
        throw new Error(
          `Invalid calendar date for ${field.code}; use YYYY-MM-DD`,
        );
    }
    values[field.id] = value;
  }
  return { ...body, customValues: values };
}
export function decodeCustom(
  snapshot: CompanySnapshot | undefined,
  value: unknown,
  entity?: EntityKind,
): unknown {
  if (!snapshot || !value || typeof value !== "object" || value instanceof Blob)
    return value;
  if (Array.isArray(value))
    return value.map((item) => decodeCustom(snapshot, item, entity));
  const object = value as Record<string, unknown>;
  const kind = object.kind;
  const ownEntity =
    typeof kind === "string" &&
    ["product", "bundle", "service", "variant"].includes(kind)
      ? "product"
      : typeof kind === "string" &&
          [
            "purchase_order",
            "supplier_invoice",
            "receipt",
            "supplier_return",
            "internal_order",
          ].includes(kind)
        ? (kind as EntityKind)
        : entity;
  return Object.fromEntries(
    Object.entries(object).map(([key, item]) => {
      if (
        key === "customValues" &&
        item &&
        typeof item === "object" &&
        ownEntity
      )
        return [
          key,
          Object.fromEntries(
            Object.entries(item).map(([id, v]) => [
              snapshot.fields.find(
                (f) => f.id === id && f.entityKind === ownEntity,
              )?.code ?? id,
              v,
            ]),
          ),
        ];
      return [
        key,
        decodeCustom(
          snapshot,
          item,
          key === "partners"
            ? "partner"
            : key === "products"
              ? "product"
              : undefined,
        ),
      ];
    }),
  );
}
