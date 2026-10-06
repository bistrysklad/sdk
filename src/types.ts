import type { ResponseMode } from "./transport.js";
import type { operations } from "./schema.js";
export type EntityKind =
  | "product"
  | "partner"
  | "purchase_order"
  | "supplier_invoice"
  | "receipt"
  | "supplier_return"
  | "internal_order";
export type ProcurementKind = Exclude<EntityKind, "product" | "partner">;
export type CustomValue = string | number | boolean | null;
export type DefaultFields = {
  [K in EntityKind]: {
    read: Record<string, CustomValue>;
    write: Record<string, CustomValue>;
  };
};
export type FieldTypes = { [K in EntityKind]: { read: object; write: object } };
export interface FieldDefinition {
  id: string;
  code: string;
  entityKind: EntityKind;
  name: string;
  valueType: "string" | "number" | "boolean" | "date" | "select";
  options: readonly string[];
  archived: boolean;
}
export interface CompanySnapshot {
  formatVersion: 1;
  companyId: string;
  revision: string;
  fields: readonly FieldDefinition[];
}
type Content<T> = T extends { content: infer C }
  ? C extends { "application/json": infer J }
    ? J
    : Blob
  : never;
type Success<T> = T extends { responses: infer R }
  ? Content<R[Extract<keyof R, 200 | 201 | 202 | 204>]>
  : never;
type EntityOf<T> = T extends { kind: infer K }
  ? K extends ProcurementKind
    ? K
    : K extends "product" | "bundle" | "service" | "variant"
      ? "product"
      : never
  : "partner";
export type TypedRead<T, S extends FieldTypes> = T extends Blob
  ? Blob
  : T extends readonly (infer V)[]
    ? TypedRead<V, S>[]
    : T extends object
      ? {
          [K in keyof T]: K extends "customValues"
            ? S[Extract<EntityOf<T>, EntityKind>]["read"]
            : TypedRead<T[K], S>;
        }
      : T;
export type SelectResponse<T, M extends ResponseMode = "full"> = T extends {
  result: unknown;
}
  ? M extends "minimal"
    ? Extract<T, { revision: string }>
    : Extract<T, { state: object }>
  : T;
export type SdkResponse<
  S extends FieldTypes,
  I extends keyof operations,
  M extends ResponseMode = "full",
> = TypedRead<SelectResponse<Success<operations[I]>, M>, S>;
type BaseBody<I extends keyof operations> = operations[I] extends {
  requestBody: infer B;
}
  ? B extends { content: { "application/json": infer T } }
    ? T
    : Blob | ArrayBuffer | Uint8Array
  : never;
type WithCustom<T, V> = Omit<T, "customValues"> & { customValues?: V };
type ProcurementBody<T, S extends FieldTypes> = {
  [K in ProcurementKind]: Omit<T, "kind" | "customValues"> & {
    kind: K;
    customValues?: S[K]["write"];
  };
}[ProcurementKind];
export type SdkBody<
  S extends FieldTypes,
  I extends keyof operations,
> = I extends "product.create" | "product.update"
  ? WithCustom<BaseBody<I>, S["product"]["write"]>
  : I extends "partner.create" | "partner.update"
    ? WithCustom<BaseBody<I>, S["partner"]["write"]>
    : I extends "procurement.create"
      ? ProcurementBody<BaseBody<I>, S>
      : I extends "procurement.update"
        ? | (Omit<BaseBody<I>, "customValues"> & { customValues?: never })
          | ProcurementBody<BaseBody<I>, S>
        : BaseBody<I>;
export type SdkQuery<I extends keyof operations> =
  operations[I]["parameters"]["query"];
