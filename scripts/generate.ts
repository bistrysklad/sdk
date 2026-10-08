import { readFile, writeFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";
import { format } from "prettier";
interface Operation {
  operationId?: string;
  security?: Record<string, string[]>[];
  "x-sdk-stream"?: boolean;
  "x-sdk-command"?: boolean;
  "x-sdk-method"?: string;
  requestBody?: {
    content: Record<string, { schema: { type?: string; properties?: object } }>;
  };
  parameters?: { in?: string; required?: boolean }[];
}
const spec = JSON.parse(
  await readFile(new URL("../contract/openapi.json", import.meta.url), "utf8"),
) as { paths: Record<string, Record<string, Operation>> };
const check = process.argv.includes("--check");
const camel = (value: string) =>
  value.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
const groups: Record<string, string> = {
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
  sales_workflow: "salesWorkflows",
  catalog_profile: "catalogProfiles",
  catalog_presentation: "catalogPresentations",
  stock: "stock",
  settings: "settings",
  company: "company",
  billing: "billing",
  events: "events",
};
const reads: Record<string, [string, string]> = {
  get_bootstrap: ["state", "get"],
  get_catalog: ["catalog", "list"],
  get_audit: ["audit", "list"],
  get_external_links: ["externalLinks", "find"],
  get_images_imageId_: ["images", "get"],
  get_procurement_imports: ["procurementImports", "list"],
  get_procurement_imports_importId_file: ["procurementImports", "download"],
};
const metadata: Record<
  string,
  { method: string; path: string; binary: boolean; "x-sdk-command": boolean }
> = {};
const methods = new Map<string, string[]>();
const reference = [
  "# Методы SDK",
  "",
  "Создано из публичного OpenAPI. Аргументы и ответы доступны в автодополнении TypeScript.",
  "",
  "| Метод SDK | HTTP | Ответ команды |",
  "| --- | --- | --- |",
];
for (const [path, verbs] of Object.entries(spec.paths))
  for (const [method, op] of Object.entries(verbs)) {
    if (op["x-sdk-stream"] || !op.security?.some((s) => "bearerAuth" in s))
      continue;
    const id = op.operationId!;
    const [prefix, action, resourceAction] = id.split(".");
    const [group, name] =
      prefix === "workspace"
        ? resourceAction
          ? [`workspace/${action}`, resourceAction]
          : ["workspace", action]
        : (reads[id] ?? [groups[prefix], camel(action)]);
    if (!group || !name) throw new Error(`Unmapped public operation ${id}`);
    if (op["x-sdk-method"] !== `${group.replaceAll("/", ".")}.${name}`)
      throw new Error(`SDK method metadata differs for ${id}`);
    reference.push(
      `| \`sklad.${group.replaceAll("/", ".")}.${name}()\` | \`${method.toUpperCase()} ${path}\` | ${op["x-sdk-command"] ? "result + revision в minimal" : "Ресурс / страница"} |`,
    );
    const params = [...path.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
    const contents = op.requestBody?.content;
    const hasBody =
      !!contents &&
      Object.keys(contents).length > 0 &&
      !(
        contents["application/json"]?.schema.type === "object" &&
        Object.keys(contents["application/json"].schema.properties ?? {})
          .length === 0
      );
    const binary = !!contents && !("application/json" in contents);
    const hasQuery = op.parameters?.some((p) => p.in === "query");
    metadata[id] = {
      method,
      path,
      binary,
      "x-sdk-command": !!op["x-sdk-command"],
    };
    if (prefix === "workspace" && resourceAction === "export") {
      const fn = `export: (columns:{key:CatalogFieldKey<S>;label:string}[],query?:CatalogResourceQuery<S>,options?:CallOptions):Promise<Blob> => invoke(${JSON.stringify(id)}, {}, undefined, {selection:resourceSelection(snapshot,query),columns:JSON.stringify(columns.map(column=>({...column,key:resourceField(snapshot,column.key)})))},options) as Promise<Blob>`;
      if (!methods.has(group)) methods.set(group, []);
      methods.get(group)!.push(fn);
      continue;
    }
    const scopedList = prefix === "workspace" && resourceAction === "list";
    const args = [
      ...params.map((p) => `${p}: string`),
      ...(hasBody ? [`body: SdkBody<S,${JSON.stringify(id)}>`] : []),
      ...(hasQuery
        ? [
            scopedList
              ? `query?: ${action === "products" ? "CatalogResourceQuery<S>" : "ResourceQuery"}`
              : `query${op.parameters?.some((p) => p.in === "query" && p.required) ? "" : "?"}: SdkQuery<${JSON.stringify(id)}>`,
          ]
        : []),
      binary
        ? `options: CallOptions & { contentType: ${Object.keys(contents!).map(JSON.stringify).join(" | ")} }`
        : "options?: CallOptions",
    ];
    const fn = `${name}: (${args.join(", ")}): Promise<SdkResponse<S,${JSON.stringify(id)},M>> => invoke(${JSON.stringify(id)}, {${params.join(", ")}}, ${hasBody ? "body" : method !== "get" ? "{}" : "undefined"}, ${hasQuery ? (scopedList ? "{selection:resourceSelection(snapshot,query)}" : "query") : "undefined"}, options) as Promise<SdkResponse<S,${JSON.stringify(id)},M>>`;
    if (!methods.has(group)) methods.set(group, []);
    methods.get(group)!.push(fn);
  }
for (const group of [...methods.keys()]) {
  if (group.includes("/") && !methods.has(group.split("/")[0]))
    methods.set(group.split("/")[0], []);
}
methods
  .get("events")!
  .push(
    "subscribe: (options?: SubscribeOptions) => subscribeToEvents(transport.options, options)",
  );
const files = new Map([
  ["schema.ts", astToString(await openapiTS(spec as never))],
  [
    "metadata.ts",
    `/** Generated from the public Bearer routes. */\nexport const metadata = ${JSON.stringify(metadata, null, 2)} as const;\n`,
  ],
  [
    "facade.ts",
    `/** Generated from OpenAPI; run npm run generate. */
import { resourceSelection,resourceField } from "./resource-query.js";
import type { ResourceQuery,CatalogResourceQuery,CatalogFieldKey } from "./resource-query.js";
import { Transport } from "./transport.js";
import { subscribeToEvents } from "./events.js";
import type { SubscribeOptions } from "./event-protocol.js";
import type { ClientOptions, CallOptions, ResponseMode } from "./transport.js";
import type { CompanySnapshot, DefaultFields, FieldTypes, EntityKind, SdkBody, SdkQuery, SdkResponse } from "./types.js";
import { metadata } from "./metadata.js";
import { encodeCustom, decodeCustom } from "./custom-fields.js";
export function createBistryskladClient<S extends FieldTypes = DefaultFields, M extends ResponseMode = "full">(options: Omit<ClientOptions,"responseMode"> & {responseMode?:M}, snapshot?: CompanySnapshot) {
  if (snapshot && options.companyId && snapshot.companyId !== options.companyId) throw new Error("Company ID differs from generated schema");
  const transport = new Transport({...options, companyId: snapshot?.companyId ?? options.companyId});
  const invoke = async (id: keyof typeof metadata, path: Record<string,string>, body: unknown, query: unknown, opts?: CallOptions) => {
    const op = metadata[id];
    const entity = id.startsWith("product.") ? "product" : undefined;
    return decodeCustom(snapshot, await transport.invoke(op.method, op.path, path, encodeCustom(snapshot,entity,body),query,opts,op["x-sdk-command"]));
  };
  return { ${[...methods]
    .filter(([group]) => !group.includes("/"))
    .map(
      ([group, fns]) =>
        `${group}: { ${[...fns, ...[...methods].filter(([child]) => child.startsWith(group + "/")).map(([child, childFns]) => `${child.split("/")[1]}: { ${childFns.join(",\n")} }`)].join(",\n")} }`,
    )
    .join(",\n")} };
}
`,
  ],
]);
for (const [name, raw] of files) {
  const content =
    name === "schema.ts" ? raw : await format(raw, { parser: "typescript" });
  const path = new URL(`../src/${name}`, import.meta.url);
  if (check) {
    if ((await readFile(path, "utf8")) !== content)
      throw new Error(`SDK ${name} is stale`);
  } else await writeFile(path, content);
}
console.log(
  check
    ? "SDK contract is current"
    : `${Object.keys(metadata).length} public SDK operations generated`,
);
reference.push(
  "",
  "Дополнительно: `sklad.events.subscribe(options)` — SSE AsyncIterable; `subscribeToEvents` из `@bistrysklad/sdk/node` — WebSocket AsyncIterable.",
  "",
  "Каждый HTTP-метод принимает необязательные CallOptions: signal, timeoutMs, retry и idempotencyKey для команд.",
  "",
);
const referencePath = new URL("../docs/methods.md", import.meta.url),
  referenceContent = reference.join("\n");
if (check) {
  if ((await readFile(referencePath, "utf8")) !== referenceContent)
    throw new Error("SDK method reference is stale");
} else await writeFile(referencePath, referenceContent);
