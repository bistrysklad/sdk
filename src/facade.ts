/** Generated from OpenAPI; run npm run generate. */
import { resourceSelection, resourceField } from "./resource-query.js";
import type {
  ResourceQuery,
  CatalogResourceQuery,
  CatalogFieldKey,
} from "./resource-query.js";
import { Transport } from "./transport.js";
import { subscribeToEvents } from "./events.js";
import type { SubscribeOptions } from "./event-protocol.js";
import type { ClientOptions, CallOptions, ResponseMode } from "./transport.js";
import type {
  CompanySnapshot,
  DefaultFields,
  FieldTypes,
  EntityKind,
  SdkBody,
  SdkQuery,
  SdkResponse,
} from "./types.js";
import { metadata } from "./metadata.js";
import { encodeCustom, decodeCustom } from "./custom-fields.js";
export function createBistryskladClient<
  S extends FieldTypes = DefaultFields,
  M extends ResponseMode = "full",
>(
  options: Omit<ClientOptions, "responseMode"> & { responseMode?: M },
  snapshot?: CompanySnapshot,
) {
  if (snapshot && options.companyId && snapshot.companyId !== options.companyId)
    throw new Error("Company ID differs from generated schema");
  const transport = new Transport({
    ...options,
    companyId: snapshot?.companyId ?? options.companyId,
  });
  const invoke = async (
    id: keyof typeof metadata,
    path: Record<string, string>,
    body: unknown,
    query: unknown,
    opts?: CallOptions,
  ) => {
    const op = metadata[id];
    const entity = id.startsWith("product.") ? "product" : undefined;
    return decodeCustom(
      snapshot,
      await transport.invoke(
        op.method,
        op.path,
        path,
        encodeCustom(snapshot, entity, body),
        query,
        opts,
        op["x-sdk-command"],
      ),
    );
  };
  return {
    procurement: {
      receive: (
        documentId: string,
        body: SdkBody<S, "procurement.receive">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.receive", M>> =>
        invoke(
          "procurement.receive",
          { documentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.receive", M>>,
      supply: (
        documentId: string,
        body: SdkBody<S, "procurement.supply">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.supply", M>> =>
        invoke(
          "procurement.supply",
          { documentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.supply", M>>,
      create: (
        body: SdkBody<S, "procurement.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.create", M>> =>
        invoke("procurement.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "procurement.create", M>
        >,
      update: (
        documentId: string,
        body: SdkBody<S, "procurement.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.update", M>> =>
        invoke(
          "procurement.update",
          { documentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.update", M>>,
      status: (
        documentId: string,
        body: SdkBody<S, "procurement.status">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.status", M>> =>
        invoke(
          "procurement.status",
          { documentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.status", M>>,
    },
    supplyPlan: {
      purchase: (
        body: SdkBody<S, "supply_plan.purchase">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply_plan.purchase", M>> =>
        invoke("supply_plan.purchase", {}, body, undefined, options) as Promise<
          SdkResponse<S, "supply_plan.purchase", M>
        >,
      refresh: (
        body: SdkBody<S, "supply_plan.refresh">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply_plan.refresh", M>> =>
        invoke("supply_plan.refresh", {}, body, undefined, options) as Promise<
          SdkResponse<S, "supply_plan.refresh", M>
        >,
    },
    supplyProfiles: {
      create: (
        body: SdkBody<S, "supply_profile.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply_profile.create", M>> =>
        invoke(
          "supply_profile.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "supply_profile.create", M>>,
      update: (
        profileId: string,
        body: SdkBody<S, "supply_profile.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply_profile.update", M>> =>
        invoke(
          "supply_profile.update",
          { profileId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "supply_profile.update", M>>,
    },
    supply: {
      profiles: (
        query: SdkQuery<"supply.profiles">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply.profiles", M>> =>
        invoke("supply.profiles", {}, undefined, query, options) as Promise<
          SdkResponse<S, "supply.profiles", M>
        >,
      policies: (
        query: SdkQuery<"supply.policies">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply.policies", M>> =>
        invoke("supply.policies", {}, undefined, query, options) as Promise<
          SdkResponse<S, "supply.policies", M>
        >,
      confirmation: (
        documentId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply.confirmation", M>> =>
        invoke(
          "supply.confirmation",
          { documentId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "supply.confirmation", M>>,
      receiptSource: (
        documentId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply.receiptSource", M>> =>
        invoke(
          "supply.receiptSource",
          { documentId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "supply.receiptSource", M>>,
      plan: (
        query: SdkQuery<"supply.plan">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply.plan", M>> =>
        invoke("supply.plan", {}, undefined, query, options) as Promise<
          SdkResponse<S, "supply.plan", M>
        >,
      availability: (
        query: SdkQuery<"supply.availability">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply.availability", M>> =>
        invoke("supply.availability", {}, undefined, query, options) as Promise<
          SdkResponse<S, "supply.availability", M>
        >,
      history: (
        orderId: string,
        query: SdkQuery<"supply.history">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply.history", M>> =>
        invoke(
          "supply.history",
          { orderId },
          undefined,
          query,
          options,
        ) as Promise<SdkResponse<S, "supply.history", M>>,
    },
    stockPolicies: {
      save: (
        body: SdkBody<S, "stock_policy.save">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock_policy.save", M>> =>
        invoke("stock_policy.save", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock_policy.save", M>
        >,
    },
    supplyProblems: {
      acknowledge: (
        problemId: string,
        body: SdkBody<S, "supply_problem.acknowledge">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "supply_problem.acknowledge", M>> =>
        invoke(
          "supply_problem.acknowledge",
          { problemId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "supply_problem.acknowledge", M>>,
    },
    catalogProfiles: {
      list: (
        query?: SdkQuery<"catalog_profile.list">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.list", M>> =>
        invoke(
          "catalog_profile.list",
          {},
          undefined,
          query,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.list", M>>,
      catalog: (
        profileId: string,
        query?: SdkQuery<"catalog_profile.catalog">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.catalog", M>> =>
        invoke(
          "catalog_profile.catalog",
          { profileId },
          undefined,
          query,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.catalog", M>>,
      product: (
        profileId: string,
        productId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.product", M>> =>
        invoke(
          "catalog_profile.product",
          { profileId, productId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.product", M>>,
    },
    catalogPresentations: {
      update: (
        scopeId: string,
        body: SdkBody<S, "catalog_presentation.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_presentation.update", M>> =>
        invoke(
          "catalog_presentation.update",
          { scopeId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_presentation.update", M>>,
      get: (
        scopeId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_presentation.get", M>> =>
        invoke(
          "catalog_presentation.get",
          { scopeId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_presentation.get", M>>,
    },
    products: {
      create: (
        body: SdkBody<S, "product.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product.create", M>> =>
        invoke("product.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "product.create", M>
        >,
      update: (
        productId: string,
        body: SdkBody<S, "product.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product.update", M>> =>
        invoke(
          "product.update",
          { productId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product.update", M>>,
      delete: (
        productId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product.delete", M>> =>
        invoke(
          "product.delete",
          { productId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product.delete", M>>,
    },
    productImages: {
      delete: (
        productId: string,
        imageId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product_image.delete", M>> =>
        invoke(
          "product_image.delete",
          { productId, imageId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product_image.delete", M>>,
      create: (
        productId: string,
        body: SdkBody<S, "product_image.create">,
        options: CallOptions & {
          contentType: "image/jpeg" | "image/png" | "image/webp";
        },
      ): Promise<SdkResponse<S, "product_image.create", M>> =>
        invoke(
          "product_image.create",
          { productId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product_image.create", M>>,
    },
    partners: {
      resolve: (
        body: SdkBody<S, "partner.resolve">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.resolve", M>> =>
        invoke("partner.resolve", {}, body, undefined, options) as Promise<
          SdkResponse<S, "partner.resolve", M>
        >,
    },
    externalLinks: {
      create: (
        body: SdkBody<S, "external_link.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "external_link.create", M>> =>
        invoke("external_link.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "external_link.create", M>
        >,
      find: (
        query: SdkQuery<"get_external_links">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_external_links", M>> =>
        invoke("get_external_links", {}, undefined, query, options) as Promise<
          SdkResponse<S, "get_external_links", M>
        >,
    },
    orders: {
      create: (
        body: SdkBody<S, "order.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.create", M>> =>
        invoke("order.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "order.create", M>
        >,
      status: (
        orderId: string,
        body: SdkBody<S, "order.status">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.status", M>> =>
        invoke(
          "order.status",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.status", M>>,
      reserve: (
        orderId: string,
        body: SdkBody<S, "order.reserve">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.reserve", M>> =>
        invoke(
          "order.reserve",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.reserve", M>>,
      schedule: (
        orderId: string,
        body: SdkBody<S, "order.schedule">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.schedule", M>> =>
        invoke(
          "order.schedule",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.schedule", M>>,
      delete: (
        orderId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.delete", M>> =>
        invoke("order.delete", { orderId }, {}, undefined, options) as Promise<
          SdkResponse<S, "order.delete", M>
        >,
      reopen: (
        orderId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.reopen", M>> =>
        invoke("order.reopen", { orderId }, {}, undefined, options) as Promise<
          SdkResponse<S, "order.reopen", M>
        >,
      transition: (
        orderId: string,
        body: SdkBody<S, "order.transition">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.transition", M>> =>
        invoke(
          "order.transition",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.transition", M>>,
    },
    salesWorkflows: {
      cvetiSetup: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "sales_workflow.cveti_setup", M>> =>
        invoke(
          "sales_workflow.cveti_setup",
          {},
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "sales_workflow.cveti_setup", M>>,
    },
    stock: {
      inventory: (
        body: SdkBody<S, "stock.inventory">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.inventory", M>> =>
        invoke("stock.inventory", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.inventory", M>
        >,
      observe: (
        body: SdkBody<S, "stock.observe">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.observe", M>> =>
        invoke("stock.observe", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.observe", M>
        >,
      adjustment: (
        body: SdkBody<S, "stock.adjustment">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.adjustment", M>> =>
        invoke("stock.adjustment", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.adjustment", M>
        >,
      writeoffReasons: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_stock_writeoff_reasons", M>> =>
        invoke(
          "get_stock_writeoff_reasons",
          {},
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "get_stock_writeoff_reasons", M>>,
      writeoff: (
        body: SdkBody<S, "stock.writeoff">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.writeoff", M>> =>
        invoke("stock.writeoff", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.writeoff", M>
        >,
      inventories: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_stock_inventories", M>> =>
        invoke(
          "get_stock_inventories",
          {},
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "get_stock_inventories", M>>,
    },
    catalog: {
      list: (
        query?: SdkQuery<"get_catalog">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_catalog", M>> =>
        invoke("get_catalog", {}, undefined, query, options) as Promise<
          SdkResponse<S, "get_catalog", M>
        >,
    },
    images: {
      get: (
        imageId: string,
        query?: SdkQuery<"get_images_imageId_"> & CallOptions,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_images_imageId_", M>> => {
        const { width, height, fit, format, ...legacyOptions } = query ?? {};
        return invoke(
          "get_images_imageId_",
          { imageId },
          undefined,
          { width, height, fit, format },
          { ...legacyOptions, ...options },
        ) as Promise<SdkResponse<S, "get_images_imageId_", M>>;
      },
    },
    events: {
      list: (
        query?: SdkQuery<"events.list">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "events.list", M>> =>
        invoke("events.list", {}, undefined, query, options) as Promise<
          SdkResponse<S, "events.list", M>
        >,
      subscribe: (options?: SubscribeOptions) =>
        subscribeToEvents(transport.options, options),
    },
    company: {
      schema: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "company.schema", M>> =>
        invoke("company.schema", {}, undefined, undefined, options) as Promise<
          SdkResponse<S, "company.schema", M>
        >,
    },
    workspace: {
      products: {
        export: (
          columns: { key: CatalogFieldKey<S>; label: string }[],
          query?: CatalogResourceQuery<S>,
          options?: CallOptions,
        ): Promise<Blob> =>
          invoke(
            "workspace.products.export",
            {},
            undefined,
            {
              selection: resourceSelection(snapshot, query),
              columns: JSON.stringify(
                columns.map((column) => ({
                  ...column,
                  key: resourceField(snapshot, column.key),
                })),
              ),
            },
            options,
          ) as Promise<Blob>,
        list: (
          query?: CatalogResourceQuery<S>,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.products.list", M>> =>
          invoke(
            "workspace.products.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.products.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.products.get", M>> =>
          invoke(
            "workspace.products.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.products.get", M>>,
      },
      partners: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.partners.list", M>> =>
          invoke(
            "workspace.partners.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.partners.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.partners.get", M>> =>
          invoke(
            "workspace.partners.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.partners.get", M>>,
      },
      orders: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.orders.list", M>> =>
          invoke(
            "workspace.orders.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.orders.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.orders.get", M>> =>
          invoke(
            "workspace.orders.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.orders.get", M>>,
      },
      lots: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.lots.list", M>> =>
          invoke(
            "workspace.lots.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.lots.list", M>>,
      },
      procurementDocuments: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.procurementDocuments.list", M>> =>
          invoke(
            "workspace.procurementDocuments.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<
            SdkResponse<S, "workspace.procurementDocuments.list", M>
          >,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.procurementDocuments.get", M>> =>
          invoke(
            "workspace.procurementDocuments.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.procurementDocuments.get", M>>,
      },
      movements: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.movements.list", M>> =>
          invoke(
            "workspace.movements.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.movements.list", M>>,
      },
      warehouses: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.warehouses.list", M>> =>
          invoke(
            "workspace.warehouses.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.warehouses.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.warehouses.get", M>> =>
          invoke(
            "workspace.warehouses.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.warehouses.get", M>>,
      },
      salesWorkflows: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.salesWorkflows.list", M>> =>
          invoke(
            "workspace.salesWorkflows.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.salesWorkflows.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.salesWorkflows.get", M>> =>
          invoke(
            "workspace.salesWorkflows.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.salesWorkflows.get", M>>,
      },
    },
  };
}
