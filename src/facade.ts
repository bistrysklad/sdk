/** Generated from OpenAPI; run npm run generate. */
import { Transport } from "./transport.js";
import { subscribeToEvents } from "./events.js";
import type { SubscribeOptions } from "./event-protocol.js";
import type { ClientOptions, CallOptions } from "./transport.js";
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
export function createBistryskladClient<S extends FieldTypes = DefaultFields>(
  options: ClientOptions,
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
    const entity = id.startsWith("product.")
      ? "product"
      : id.startsWith("partner.")
        ? "partner"
        : id === "procurement.create" || id === "procurement.update"
          ? (body as { kind?: EntityKind })?.kind
          : undefined;
    if (
      snapshot &&
      id === "procurement.update" &&
      body &&
      typeof body === "object" &&
      "customValues" in body &&
      !entity
    )
      throw new Error(
        "kind is required when updating procurement customValues",
      );
    return decodeCustom(
      snapshot,
      await transport.invoke(
        op.method,
        op.path,
        path,
        encodeCustom(snapshot, entity, body),
        query,
        opts,
      ),
    );
  };
  return {
    catalogProfiles: {
      create: (
        body: SdkBody<S, "catalog_profile.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.create">> =>
        invoke(
          "catalog_profile.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.create">>,
      list: (
        query?: SdkQuery<"catalog_profile.list">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.list">> =>
        invoke(
          "catalog_profile.list",
          {},
          undefined,
          query,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.list">>,
      update: (
        profileId: string,
        body: SdkBody<S, "catalog_profile.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.update">> =>
        invoke(
          "catalog_profile.update",
          { profileId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.update">>,
      catalog: (
        profileId: string,
        query?: SdkQuery<"catalog_profile.catalog">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.catalog">> =>
        invoke(
          "catalog_profile.catalog",
          { profileId },
          undefined,
          query,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.catalog">>,
      product: (
        profileId: string,
        productId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.product">> =>
        invoke(
          "catalog_profile.product",
          { profileId, productId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.product">>,
    },
    catalogPresentations: {
      update: (
        scopeId: string,
        body: SdkBody<S, "catalog_presentation.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_presentation.update">> =>
        invoke(
          "catalog_presentation.update",
          { scopeId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_presentation.update">>,
      get: (
        scopeId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_presentation.get">> =>
        invoke(
          "catalog_presentation.get",
          { scopeId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_presentation.get">>,
    },
    priceTypes: {
      create: (
        body: SdkBody<S, "price_type.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "price_type.create">> =>
        invoke("price_type.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "price_type.create">
        >,
      update: (
        priceTypeId: string,
        body: SdkBody<S, "price_type.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "price_type.update">> =>
        invoke(
          "price_type.update",
          { priceTypeId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "price_type.update">>,
      delete: (
        priceTypeId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "price_type.delete">> =>
        invoke(
          "price_type.delete",
          { priceTypeId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "price_type.delete">>,
    },
    filters: {
      create: (
        body: SdkBody<S, "filter.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter.create">> =>
        invoke("filter.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "filter.create">
        >,
      update: (
        filterId: string,
        body: SdkBody<S, "filter.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter.update">> =>
        invoke(
          "filter.update",
          { filterId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter.update">>,
      delete: (
        filterId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter.delete">> =>
        invoke(
          "filter.delete",
          { filterId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter.delete">>,
    },
    filterValues: {
      create: (
        filterId: string,
        body: SdkBody<S, "filter_value.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter_value.create">> =>
        invoke(
          "filter_value.create",
          { filterId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter_value.create">>,
      update: (
        filterId: string,
        valueId: string,
        body: SdkBody<S, "filter_value.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter_value.update">> =>
        invoke(
          "filter_value.update",
          { filterId, valueId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter_value.update">>,
      delete: (
        filterId: string,
        valueId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter_value.delete">> =>
        invoke(
          "filter_value.delete",
          { filterId, valueId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter_value.delete">>,
    },
    products: {
      create: (
        body: SdkBody<S, "product.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product.create">> =>
        invoke("product.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "product.create">
        >,
      update: (
        productId: string,
        body: SdkBody<S, "product.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product.update">> =>
        invoke(
          "product.update",
          { productId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product.update">>,
      delete: (
        productId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product.delete">> =>
        invoke(
          "product.delete",
          { productId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product.delete">>,
    },
    productImages: {
      delete: (
        productId: string,
        imageId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "product_image.delete">> =>
        invoke(
          "product_image.delete",
          { productId, imageId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product_image.delete">>,
      create: (
        productId: string,
        body: SdkBody<S, "product_image.create">,
        options: CallOptions & {
          contentType: "image/jpeg" | "image/png" | "image/webp";
        },
      ): Promise<SdkResponse<S, "product_image.create">> =>
        invoke(
          "product_image.create",
          { productId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "product_image.create">>,
    },
    partners: {
      create: (
        body: SdkBody<S, "partner.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.create">> =>
        invoke("partner.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "partner.create">
        >,
      update: (
        partnerId: string,
        body: SdkBody<S, "partner.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.update">> =>
        invoke(
          "partner.update",
          { partnerId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "partner.update">>,
      delete: (
        partnerId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.delete">> =>
        invoke(
          "partner.delete",
          { partnerId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "partner.delete">>,
      resolve: (
        body: SdkBody<S, "partner.resolve">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.resolve">> =>
        invoke("partner.resolve", {}, body, undefined, options) as Promise<
          SdkResponse<S, "partner.resolve">
        >,
    },
    organizations: {
      create: (
        body: SdkBody<S, "organization.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "organization.create">> =>
        invoke("organization.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "organization.create">
        >,
      update: (
        organizationId: string,
        body: SdkBody<S, "organization.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "organization.update">> =>
        invoke(
          "organization.update",
          { organizationId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "organization.update">>,
      delete: (
        organizationId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "organization.delete">> =>
        invoke(
          "organization.delete",
          { organizationId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "organization.delete">>,
    },
    contracts: {
      create: (
        body: SdkBody<S, "contract.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "contract.create">> =>
        invoke("contract.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "contract.create">
        >,
      update: (
        contractId: string,
        body: SdkBody<S, "contract.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "contract.update">> =>
        invoke(
          "contract.update",
          { contractId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "contract.update">>,
      delete: (
        contractId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "contract.delete">> =>
        invoke(
          "contract.delete",
          { contractId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "contract.delete">>,
    },
    customFields: {
      create: (
        body: SdkBody<S, "custom_field.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "custom_field.create">> =>
        invoke("custom_field.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "custom_field.create">
        >,
      update: (
        fieldId: string,
        body: SdkBody<S, "custom_field.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "custom_field.update">> =>
        invoke(
          "custom_field.update",
          { fieldId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "custom_field.update">>,
      delete: (
        fieldId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "custom_field.delete">> =>
        invoke(
          "custom_field.delete",
          { fieldId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "custom_field.delete">>,
    },
    externalLinks: {
      create: (
        body: SdkBody<S, "external_link.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "external_link.create">> =>
        invoke("external_link.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "external_link.create">
        >,
      find: (
        query: SdkQuery<"get_external_links">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_external_links">> =>
        invoke("get_external_links", {}, undefined, query, options) as Promise<
          SdkResponse<S, "get_external_links">
        >,
    },
    warehouses: {
      create: (
        body: SdkBody<S, "warehouse.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "warehouse.create">> =>
        invoke("warehouse.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "warehouse.create">
        >,
      update: (
        warehouseId: string,
        body: SdkBody<S, "warehouse.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "warehouse.update">> =>
        invoke(
          "warehouse.update",
          { warehouseId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "warehouse.update">>,
      delete: (
        warehouseId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "warehouse.delete">> =>
        invoke(
          "warehouse.delete",
          { warehouseId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "warehouse.delete">>,
    },
    purchases: {
      create: (
        body: SdkBody<S, "purchase.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "purchase.create">> =>
        invoke("purchase.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "purchase.create">
        >,
      delete: (
        purchaseId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "purchase.delete">> =>
        invoke(
          "purchase.delete",
          { purchaseId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "purchase.delete">>,
    },
    procurement: {
      create: (
        body: SdkBody<S, "procurement.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.create">> =>
        invoke("procurement.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "procurement.create">
        >,
      update: (
        documentId: string,
        body: SdkBody<S, "procurement.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.update">> =>
        invoke(
          "procurement.update",
          { documentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.update">>,
      delete: (
        documentId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.delete">> =>
        invoke(
          "procurement.delete",
          { documentId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.delete">>,
      status: (
        documentId: string,
        body: SdkBody<S, "procurement.status">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.status">> =>
        invoke(
          "procurement.status",
          { documentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.status">>,
    },
    procurementImports: {
      retry: (
        importId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_import.retry">> =>
        invoke(
          "procurement_import.retry",
          { importId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.retry">>,
      reject: (
        importId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_import.reject">> =>
        invoke(
          "procurement_import.reject",
          { importId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.reject">>,
      document: (
        importId: string,
        body: SdkBody<S, "procurement_import.document">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_import.document">> =>
        invoke(
          "procurement_import.document",
          { importId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.document">>,
      list: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_procurement_imports">> =>
        invoke(
          "get_procurement_imports",
          {},
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "get_procurement_imports">>,
      create: (
        body: SdkBody<S, "procurement_import.create">,
        options: CallOptions & {
          contentType: "image/jpeg" | "image/png" | "image/webp";
        },
      ): Promise<SdkResponse<S, "procurement_import.create">> =>
        invoke(
          "procurement_import.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.create">>,
      download: (
        importId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_procurement_imports_importId_file">> =>
        invoke(
          "get_procurement_imports_importId_file",
          { importId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "get_procurement_imports_importId_file">>,
    },
    procurementPayments: {
      create: (
        body: SdkBody<S, "procurement_payment.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.create">> =>
        invoke(
          "procurement_payment.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.create">>,
      update: (
        paymentId: string,
        body: SdkBody<S, "procurement_payment.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.update">> =>
        invoke(
          "procurement_payment.update",
          { paymentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.update">>,
      delete: (
        paymentId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.delete">> =>
        invoke(
          "procurement_payment.delete",
          { paymentId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.delete">>,
      status: (
        paymentId: string,
        body: SdkBody<S, "procurement_payment.status">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.status">> =>
        invoke(
          "procurement_payment.status",
          { paymentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.status">>,
    },
    orders: {
      create: (
        body: SdkBody<S, "order.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.create">> =>
        invoke("order.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "order.create">
        >,
      status: (
        orderId: string,
        body: SdkBody<S, "order.status">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.status">> =>
        invoke(
          "order.status",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.status">>,
      reserve: (
        orderId: string,
        body: SdkBody<S, "order.reserve">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.reserve">> =>
        invoke(
          "order.reserve",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.reserve">>,
      schedule: (
        orderId: string,
        body: SdkBody<S, "order.schedule">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.schedule">> =>
        invoke(
          "order.schedule",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.schedule">>,
      delete: (
        orderId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.delete">> =>
        invoke("order.delete", { orderId }, {}, undefined, options) as Promise<
          SdkResponse<S, "order.delete">
        >,
      transition: (
        orderId: string,
        body: SdkBody<S, "order.transition">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "order.transition">> =>
        invoke(
          "order.transition",
          { orderId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "order.transition">>,
    },
    salesWorkflows: {
      create: (
        body: SdkBody<S, "sales_workflow.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "sales_workflow.create">> =>
        invoke(
          "sales_workflow.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "sales_workflow.create">>,
      update: (
        workflowId: string,
        body: SdkBody<S, "sales_workflow.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "sales_workflow.update">> =>
        invoke(
          "sales_workflow.update",
          { workflowId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "sales_workflow.update">>,
      delete: (
        workflowId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "sales_workflow.delete">> =>
        invoke(
          "sales_workflow.delete",
          { workflowId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "sales_workflow.delete">>,
    },
    stock: {
      receipt: (
        body: SdkBody<S, "stock.receipt">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.receipt">> =>
        invoke("stock.receipt", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.receipt">
        >,
      writeoff: (
        body: SdkBody<S, "stock.writeoff">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.writeoff">> =>
        invoke("stock.writeoff", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.writeoff">
        >,
      transfer: (
        body: SdkBody<S, "stock.transfer">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.transfer">> =>
        invoke("stock.transfer", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.transfer">
        >,
    },
    settings: {
      update: (
        body: SdkBody<S, "settings.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "settings.update">> =>
        invoke("settings.update", {}, body, undefined, options) as Promise<
          SdkResponse<S, "settings.update">
        >,
    },
    state: {
      get: (options?: CallOptions): Promise<SdkResponse<S, "get_bootstrap">> =>
        invoke("get_bootstrap", {}, undefined, undefined, options) as Promise<
          SdkResponse<S, "get_bootstrap">
        >,
    },
    catalog: {
      list: (
        query?: SdkQuery<"get_catalog">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_catalog">> =>
        invoke("get_catalog", {}, undefined, query, options) as Promise<
          SdkResponse<S, "get_catalog">
        >,
    },
    audit: {
      list: (
        query?: SdkQuery<"get_audit">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_audit">> =>
        invoke("get_audit", {}, undefined, query, options) as Promise<
          SdkResponse<S, "get_audit">
        >,
    },
    images: {
      get: (
        imageId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_images_imageId_">> =>
        invoke(
          "get_images_imageId_",
          { imageId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "get_images_imageId_">>,
    },
    events: {
      list: (
        query?: SdkQuery<"events.list">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "events.list">> =>
        invoke("events.list", {}, undefined, query, options) as Promise<
          SdkResponse<S, "events.list">
        >,
      subscribe: (options?: SubscribeOptions) =>
        subscribeToEvents(transport.options, options),
    },
    billing: {
      overview: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "billing.overview">> =>
        invoke(
          "billing.overview",
          {},
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "billing.overview">>,
    },
    company: {
      schema: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "company.schema">> =>
        invoke("company.schema", {}, undefined, undefined, options) as Promise<
          SdkResponse<S, "company.schema">
        >,
    },
  };
}
