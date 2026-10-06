import openapiTS, { astToString } from "openapi-typescript";
import { apiOrigin } from "./transport.js";
import { metadata } from "./metadata.js";
import type { CompanySnapshot } from "./types.js";
import {
  entityKinds,
  validateOpenApi,
  validateSnapshot,
} from "./generator-validation.js";
import { writeManaged } from "./managed-files.js";

const quoted = (value: unknown) => JSON.stringify(value);
function fieldTypes(snapshot: CompanySnapshot) {
  const lines = [
    "/** Generated company metadata. No credentials or business records. */",
    'import type { components } from "./api.js";',
    'import type { TypedRead } from "@bistrysklad/sdk";',
    `export const companySchema = ${JSON.stringify(snapshot, null, 2)} as const;`,
    "export interface CompanyFieldTypes {",
  ];
  for (const kind of entityKinds) {
    const fields = snapshot.fields.filter((f) => f.entityKind === kind);
    const scalar = (f: (typeof fields)[number], write: boolean) =>
      f.valueType === "number"
        ? "number"
        : f.valueType === "boolean"
          ? "boolean"
          : f.valueType === "select" && write
            ? f.options.map(quoted).join(" | ")
            : "string";
    const writable = fields.filter((f) => !f.archived);
    lines.push(
      `${quoted(kind)}: { read: { ${fields.map((f) => `${f.archived ? "readonly " : ""}${quoted(f.code)}?: ${scalar(f, false)} | null`).join("; ")} }; write: ${writable.length ? `{ ${writable.map((f) => `${quoted(f.code)}?: ${scalar(f, true)} | null`).join("; ")} }` : "Record<string, never>"} };`,
    );
  }
  lines.push("}");
  for (const name of [
    "Product",
    "CatalogProduct",
    "Partner",
    "ProcurementDocument",
    "WarehouseState",
    "CatalogResponse",
    "CatalogProfile",
    "CatalogPresentation",
    "ProfileCatalogResponse",
  ])
    lines.push(
      `export type ${name} = TypedRead<components["schemas"][${quoted(name)}], CompanyFieldTypes>;`,
    );
  return lines.join("\n") + "\n";
}
function clientTypes(spec: Record<string, unknown>, origin: string) {
  // Local DTO signatures follow the downloaded contract. Runtime routes must be supported by this SDK version.
  const base = `/** Generated factory and methods typed from local api.ts. */
import { createBistryskladClient } from "@bistrysklad/sdk";
import type { ClientOptions, CallOptions, TypedRead, ProcurementKind, SubscribeOptions, WarehouseEvent } from "@bistrysklad/sdk";
import type { operations } from "./api.js";
import { companySchema } from "./fields.js";
import type { CompanyFieldTypes } from "./fields.js";
type Content<T> = T extends { content: infer C } ? C extends { "application/json": infer J } ? J : Blob : never;
type Response<I extends keyof operations> = operations[I] extends {responses: infer R} ? TypedRead<Content<R[Extract<keyof R,200|201|202|204>]>,CompanyFieldTypes> : never;
type BaseBody<I extends keyof operations> = operations[I] extends {requestBody: infer B} ? B extends {content: {"application/json": infer T}} ? T : Blob | ArrayBuffer | Uint8Array : never;
type Custom<T,V> = Omit<T,"customValues"> & {customValues?: V};
type Procurement<T> = {[K in ProcurementKind]: Omit<T,"kind"|"customValues"> & {kind: K; customValues?: CompanyFieldTypes[K]["write"]}}[ProcurementKind];
type Body<I extends keyof operations> = I extends "product.create"|"product.update" ? Custom<BaseBody<I>,CompanyFieldTypes["product"]["write"]> : I extends "partner.create"|"partner.update" ? Custom<BaseBody<I>,CompanyFieldTypes["partner"]["write"]> : I extends "procurement.create" ? Procurement<BaseBody<I>> : I extends "procurement.update" ? (Omit<BaseBody<I>,"customValues"> & {customValues?: never}) | Procurement<BaseBody<I>> : BaseBody<I>;
type Query<I extends keyof operations> = operations[I]["parameters"]["query"];
`;
  // Get method names from stable operation metadata naming rules, shared with SDK generation.
  const groupMap: Record<string, string> = {
    catalog_profile: "catalogProfiles",
    catalog_presentation: "catalogPresentations",
    sales_workflow: "salesWorkflows",
    price_type: "priceTypes",
    filter: "filters",
    filter_value: "filterValues",
    product: "products",
    product_image: "productImages",
    partner: "partners",
    organization: "organizations",
    contract: "contracts",
    custom_field: "customFields",
    external_link: "externalLinks",
    warehouse: "warehouses",
    purchase: "purchases",
    procurement: "procurement",
    procurement_import: "procurementImports",
    procurement_payment: "procurementPayments",
    order: "orders",
    stock: "stock",
    settings: "settings",
    company: "company",
    billing: "billing",
    events: "events",
  };
  const readMap: Record<string, [string, string]> = {
    get_bootstrap: ["state", "get"],
    get_catalog: ["catalog", "list"],
    get_audit: ["audit", "list"],
    get_external_links: ["externalLinks", "find"],
    get_images_imageId_: ["images", "get"],
    get_procurement_imports: ["procurementImports", "list"],
    get_procurement_imports_importId_file: ["procurementImports", "download"],
  };
  const groups = new Map<string, string[]>();
  const seen = new Set<string>();
  type Operation = {
    operationId?: string;
    "x-sdk-stream"?: boolean;
    security?: Record<string, string[]>[];
    requestBody?: {
      content: Record<
        string,
        { schema: { type?: string; properties?: object } }
      >;
    };
    parameters?: { in: string; required?: boolean }[];
  };
  const paths = spec.paths as Record<string, Record<string, Operation>>;
  for (const [path, verbs] of Object.entries(paths))
    for (const [verb, op] of Object.entries(verbs)) {
      if (op["x-sdk-stream"] || !op.security?.some((s) => "bearerAuth" in s)) continue;
      const id = op.operationId!;
      if (seen.has(id)) throw new Error("Duplicate public operation ID");
      seen.add(id);
      const known = metadata[id as keyof typeof metadata];
      if (!known || known.method !== verb || known.path !== path)
        throw new Error(
          "API routes differ from this SDK; update @bistrysklad/sdk first",
        );
      const [prefix, action] = id.split(".");
      const [group, name] = readMap[id] ?? [
        groupMap[prefix],
        action.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase()),
      ];
      if (!group || !name)
        throw new Error(`Unsupported SDK operation name: ${id}`);
      const contents = op.requestBody?.content;
      const body =
        !!contents &&
        !(
          contents["application/json"]?.schema.type === "object" &&
          Object.keys(contents["application/json"].schema.properties ?? {})
            .length === 0
        );
      const binary = contents && !("application/json" in contents);
      const args = [
        ...[...path.matchAll(/\{(\w+)\}/g)].map((m) => `${m[1]}: string`),
        ...(body ? [`body: Body<${quoted(id)}>`] : []),
        ...(op.parameters?.some((p) => p.in === "query")
          ? [
              `query${op.parameters.some((p) => p.in === "query" && p.required) ? "" : "?"}: Query<${quoted(id)}>`,
            ]
          : []),
        binary
          ? `options: CallOptions & { contentType: ${Object.keys(contents!).map(quoted).join(" | ")} }`
          : "options?: CallOptions",
      ];
      if (!groups.has(group)) groups.set(group, []);
      groups
        .get(group)!
        .push(
          `${name}: (${args.join(", ")}) => Promise<Response<${quoted(id)}>>`,
        );
    }
  groups.get("events")!.push("subscribe: (options?: SubscribeOptions) => AsyncIterable<WarehouseEvent>");
  if (Object.keys(metadata).some((id) => !seen.has(id)))
    throw new Error("API contract is incomplete or incompatible with this SDK");
  const schemas = (
    spec.components as { schemas?: Record<string, unknown> } | undefined
  )?.schemas;
  if (
    [
      "Product",
      "CatalogProduct",
      "Partner",
      "ProcurementDocument",
      "WarehouseState",
      "CatalogResponse",
      "CompanySchema",
    ].some((name) => !schemas?.[name])
  )
    throw new Error("API response schemas are incomplete");
  return (
    base +
    `export interface CompanyClient {\n${[...groups].map(([group, methods]) => `${group}: {${methods.join(";\n")}}`).join(";\n")}\n}\nexport function createCompanyClient(options: Omit<ClientOptions,"baseUrl"> & {baseUrl?: string}): CompanyClient { return createBistryskladClient<CompanyFieldTypes>({...options,baseUrl:options.baseUrl ?? ${quoted(origin)}},companySchema) as unknown as CompanyClient; }\n`
  );
}
async function fetchJson(url: string, token?: string): Promise<unknown> {
  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    signal: AbortSignal.timeout(15_000),
    redirect: "error",
  });
  if (!response.ok)
    throw new Error(`Schema request failed (HTTP ${response.status})`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.byteLength > 10_000_000)
    throw new Error("Schema response is too large");
  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new Error("Schema endpoint returned invalid JSON");
  }
}
export async function runGenerator(args: string[]): Promise<void> {
  if (args.includes("--help") || args.includes("-h")) {
    console.log(
      "Usage: bistrysklad generate --url https://bistrysklad.ru --out src/bistrysklad [--check]\nAuthentication: BISTRYSKLAD_TOKEN environment variable.\nExit codes: 0 current/generated, 1 schema drift, 2 failure. --check does not write files.",
    );
    return;
  }
  if (args[0] !== "generate")
    throw new Error(
      "Usage: bistrysklad generate --url https://bistrysklad.ru --out src/bistrysklad [--check]. Set BISTRYSKLAD_TOKEN in the environment.",
    );
  let url: string | undefined,
    out = "src/bistrysklad",
    check = false;
  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--check") check = true;
    else if (
      (arg === "--url" || arg === "--out") &&
      args[i + 1] &&
      !args[i + 1].startsWith("--")
    ) {
      const value = args[++i];
      if (arg === "--url") url = value;
      else out = value;
    } else throw new Error("Unknown or incomplete generator option");
  }
  if (!url) throw new Error("--url is required");
  const origin = apiOrigin(url);
  const token = process.env.BISTRYSKLAD_TOKEN;
  if (!token)
    throw new Error(
      "BISTRYSKLAD_TOKEN is required; tokens must not be command arguments",
    );
  const [spec, rawSchema] = await Promise.all([
    fetchJson(origin + "/api/v1/openapi.json"),
    fetchJson(origin + "/api/v1/schema", token),
  ]);
  validateOpenApi(spec);
  const snapshot = validateSnapshot(rawSchema);
  const client = clientTypes(spec, origin);
  const files = {
    "api.ts": astToString(await openapiTS(spec as never)),
    "fields.ts": fieldTypes(snapshot),
    "client.ts": client,
  };
  const matches = await writeManaged(out, files, check, snapshot.companyId);
  if (check && !matches) {
    console.error(
      "Company API/schema changed; run generation and review the diff",
    );
    process.exitCode = 1;
  } else
    console.log(
      check
        ? "Generated company types are current"
        : "Company API types and client generated",
    );
}
