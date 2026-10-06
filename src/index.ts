export { createBistryskladClient } from "./facade.js";
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
