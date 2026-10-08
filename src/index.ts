export { createBistryskladClient } from "./facade.js";
import type { createBistryskladClient } from "./facade.js";
import type { FieldTypes, DefaultFields } from "./types.js";
import type { ResponseMode } from "./transport.js";
/** Client type for dependency injection and service constructors. */
export type BistryskladClient<S extends FieldTypes = DefaultFields, M extends ResponseMode = "full"> = ReturnType<typeof createBistryskladClient<S, M>>;
export { BistryskladError } from "./transport.js";
export type {
  ClientOptions,
  ResponseMode,
  CallOptions,
  RetryPolicy,
  RateLimit,
} from "./transport.js";
export type {
  EntityKind,
  ProcurementKind,
  CustomValue,
  DefaultFields,
  FieldTypes,
  CompanySnapshot,
  FieldDefinition,
  TypedRead,
  SdkBody,
  SdkResponse,
  SelectResponse,
  SdkQuery,
} from "./types.js";
export type { paths, operations, components } from "./schema.js";

export { subscribeToEvents } from "./events.js";
export type {
  WarehouseEvent,
  SubscribeOptions,
  StreamStatus,
} from "./event-protocol.js";

export type {
  ResourceQuery,
  ResourceCondition,
  CatalogResourceQuery,
  CatalogFieldKey,
} from "./resource-query.js";
