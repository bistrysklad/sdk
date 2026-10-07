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
        options.responseMode === "minimal" && op["x-sdk-command"],
      ),
    );
  };
  return {
    catalogProfiles: {
      create: (
        body: SdkBody<S, "catalog_profile.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.create", M>> =>
        invoke(
          "catalog_profile.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.create", M>>,
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
      update: (
        profileId: string,
        body: SdkBody<S, "catalog_profile.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "catalog_profile.update", M>> =>
        invoke(
          "catalog_profile.update",
          { profileId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "catalog_profile.update", M>>,
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
    priceTypes: {
      create: (
        body: SdkBody<S, "price_type.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "price_type.create", M>> =>
        invoke("price_type.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "price_type.create", M>
        >,
      update: (
        priceTypeId: string,
        body: SdkBody<S, "price_type.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "price_type.update", M>> =>
        invoke(
          "price_type.update",
          { priceTypeId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "price_type.update", M>>,
      delete: (
        priceTypeId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "price_type.delete", M>> =>
        invoke(
          "price_type.delete",
          { priceTypeId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "price_type.delete", M>>,
    },
    filters: {
      create: (
        body: SdkBody<S, "filter.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter.create", M>> =>
        invoke("filter.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "filter.create", M>
        >,
      update: (
        filterId: string,
        body: SdkBody<S, "filter.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter.update", M>> =>
        invoke(
          "filter.update",
          { filterId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter.update", M>>,
      delete: (
        filterId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter.delete", M>> =>
        invoke(
          "filter.delete",
          { filterId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter.delete", M>>,
    },
    filterValues: {
      create: (
        filterId: string,
        body: SdkBody<S, "filter_value.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter_value.create", M>> =>
        invoke(
          "filter_value.create",
          { filterId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter_value.create", M>>,
      update: (
        filterId: string,
        valueId: string,
        body: SdkBody<S, "filter_value.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter_value.update", M>> =>
        invoke(
          "filter_value.update",
          { filterId, valueId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter_value.update", M>>,
      delete: (
        filterId: string,
        valueId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "filter_value.delete", M>> =>
        invoke(
          "filter_value.delete",
          { filterId, valueId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "filter_value.delete", M>>,
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
      create: (
        body: SdkBody<S, "partner.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.create", M>> =>
        invoke("partner.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "partner.create", M>
        >,
      update: (
        partnerId: string,
        body: SdkBody<S, "partner.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.update", M>> =>
        invoke(
          "partner.update",
          { partnerId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "partner.update", M>>,
      delete: (
        partnerId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.delete", M>> =>
        invoke(
          "partner.delete",
          { partnerId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "partner.delete", M>>,
      resolve: (
        body: SdkBody<S, "partner.resolve">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "partner.resolve", M>> =>
        invoke("partner.resolve", {}, body, undefined, options) as Promise<
          SdkResponse<S, "partner.resolve", M>
        >,
    },
    organizations: {
      create: (
        body: SdkBody<S, "organization.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "organization.create", M>> =>
        invoke("organization.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "organization.create", M>
        >,
      update: (
        organizationId: string,
        body: SdkBody<S, "organization.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "organization.update", M>> =>
        invoke(
          "organization.update",
          { organizationId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "organization.update", M>>,
      delete: (
        organizationId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "organization.delete", M>> =>
        invoke(
          "organization.delete",
          { organizationId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "organization.delete", M>>,
    },
    contracts: {
      create: (
        body: SdkBody<S, "contract.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "contract.create", M>> =>
        invoke("contract.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "contract.create", M>
        >,
      update: (
        contractId: string,
        body: SdkBody<S, "contract.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "contract.update", M>> =>
        invoke(
          "contract.update",
          { contractId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "contract.update", M>>,
      delete: (
        contractId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "contract.delete", M>> =>
        invoke(
          "contract.delete",
          { contractId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "contract.delete", M>>,
    },
    customFields: {
      create: (
        body: SdkBody<S, "custom_field.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "custom_field.create", M>> =>
        invoke("custom_field.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "custom_field.create", M>
        >,
      update: (
        fieldId: string,
        body: SdkBody<S, "custom_field.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "custom_field.update", M>> =>
        invoke(
          "custom_field.update",
          { fieldId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "custom_field.update", M>>,
      delete: (
        fieldId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "custom_field.delete", M>> =>
        invoke(
          "custom_field.delete",
          { fieldId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "custom_field.delete", M>>,
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
    warehouses: {
      create: (
        body: SdkBody<S, "warehouse.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "warehouse.create", M>> =>
        invoke("warehouse.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "warehouse.create", M>
        >,
      update: (
        warehouseId: string,
        body: SdkBody<S, "warehouse.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "warehouse.update", M>> =>
        invoke(
          "warehouse.update",
          { warehouseId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "warehouse.update", M>>,
      delete: (
        warehouseId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "warehouse.delete", M>> =>
        invoke(
          "warehouse.delete",
          { warehouseId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "warehouse.delete", M>>,
    },
    purchases: {
      create: (
        body: SdkBody<S, "purchase.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "purchase.create", M>> =>
        invoke("purchase.create", {}, body, undefined, options) as Promise<
          SdkResponse<S, "purchase.create", M>
        >,
      delete: (
        purchaseId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "purchase.delete", M>> =>
        invoke(
          "purchase.delete",
          { purchaseId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "purchase.delete", M>>,
    },
    procurement: {
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
      delete: (
        documentId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement.delete", M>> =>
        invoke(
          "procurement.delete",
          { documentId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement.delete", M>>,
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
    procurementImports: {
      retry: (
        importId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_import.retry", M>> =>
        invoke(
          "procurement_import.retry",
          { importId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.retry", M>>,
      reject: (
        importId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_import.reject", M>> =>
        invoke(
          "procurement_import.reject",
          { importId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.reject", M>>,
      document: (
        importId: string,
        body: SdkBody<S, "procurement_import.document">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_import.document", M>> =>
        invoke(
          "procurement_import.document",
          { importId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.document", M>>,
      list: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_procurement_imports", M>> =>
        invoke(
          "get_procurement_imports",
          {},
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "get_procurement_imports", M>>,
      create: (
        body: SdkBody<S, "procurement_import.create">,
        options: CallOptions & {
          contentType: "image/jpeg" | "image/png" | "image/webp";
        },
      ): Promise<SdkResponse<S, "procurement_import.create", M>> =>
        invoke(
          "procurement_import.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_import.create", M>>,
      download: (
        importId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_procurement_imports_importId_file", M>> =>
        invoke(
          "get_procurement_imports_importId_file",
          { importId },
          undefined,
          undefined,
          options,
        ) as Promise<
          SdkResponse<S, "get_procurement_imports_importId_file", M>
        >,
    },
    procurementPayments: {
      create: (
        body: SdkBody<S, "procurement_payment.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.create", M>> =>
        invoke(
          "procurement_payment.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.create", M>>,
      update: (
        paymentId: string,
        body: SdkBody<S, "procurement_payment.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.update", M>> =>
        invoke(
          "procurement_payment.update",
          { paymentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.update", M>>,
      delete: (
        paymentId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.delete", M>> =>
        invoke(
          "procurement_payment.delete",
          { paymentId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.delete", M>>,
      status: (
        paymentId: string,
        body: SdkBody<S, "procurement_payment.status">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "procurement_payment.status", M>> =>
        invoke(
          "procurement_payment.status",
          { paymentId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "procurement_payment.status", M>>,
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
      create: (
        body: SdkBody<S, "sales_workflow.create">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "sales_workflow.create", M>> =>
        invoke(
          "sales_workflow.create",
          {},
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "sales_workflow.create", M>>,
      update: (
        workflowId: string,
        body: SdkBody<S, "sales_workflow.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "sales_workflow.update", M>> =>
        invoke(
          "sales_workflow.update",
          { workflowId },
          body,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "sales_workflow.update", M>>,
      delete: (
        workflowId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "sales_workflow.delete", M>> =>
        invoke(
          "sales_workflow.delete",
          { workflowId },
          {},
          undefined,
          options,
        ) as Promise<SdkResponse<S, "sales_workflow.delete", M>>,
    },
    stock: {
      receipt: (
        body: SdkBody<S, "stock.receipt">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.receipt", M>> =>
        invoke("stock.receipt", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.receipt", M>
        >,
      writeoff: (
        body: SdkBody<S, "stock.writeoff">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.writeoff", M>> =>
        invoke("stock.writeoff", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.writeoff", M>
        >,
      transfer: (
        body: SdkBody<S, "stock.transfer">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "stock.transfer", M>> =>
        invoke("stock.transfer", {}, body, undefined, options) as Promise<
          SdkResponse<S, "stock.transfer", M>
        >,
    },
    settings: {
      update: (
        body: SdkBody<S, "settings.update">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "settings.update", M>> =>
        invoke("settings.update", {}, body, undefined, options) as Promise<
          SdkResponse<S, "settings.update", M>
        >,
    },
    state: {
      get: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_bootstrap", M>> =>
        invoke("get_bootstrap", {}, undefined, undefined, options) as Promise<
          SdkResponse<S, "get_bootstrap", M>
        >,
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
    audit: {
      list: (
        query?: SdkQuery<"get_audit">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_audit", M>> =>
        invoke("get_audit", {}, undefined, query, options) as Promise<
          SdkResponse<S, "get_audit", M>
        >,
    },
    images: {
      get: (
        imageId: string,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "get_images_imageId_", M>> =>
        invoke(
          "get_images_imageId_",
          { imageId },
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "get_images_imageId_", M>>,
    },
    workspace: {
      stockPreview: (
        query?: SdkQuery<"workspace.stockPreview">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "workspace.stockPreview", M>> =>
        invoke(
          "workspace.stockPreview",
          {},
          undefined,
          query,
          options,
        ) as Promise<SdkResponse<S, "workspace.stockPreview", M>>,
      context: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "workspace.context", M>> =>
        invoke(
          "workspace.context",
          {},
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "workspace.context", M>>,
      summary: (
        query?: SdkQuery<"workspace.summary">,
        options?: CallOptions,
      ): Promise<SdkResponse<S, "workspace.summary", M>> =>
        invoke("workspace.summary", {}, undefined, query, options) as Promise<
          SdkResponse<S, "workspace.summary", M>
        >,
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
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.lots.get", M>> =>
          invoke(
            "workspace.lots.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.lots.get", M>>,
      },
      purchases: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.purchases.list", M>> =>
          invoke(
            "workspace.purchases.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.purchases.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.purchases.get", M>> =>
          invoke(
            "workspace.purchases.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.purchases.get", M>>,
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
      procurementPayments: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.procurementPayments.list", M>> =>
          invoke(
            "workspace.procurementPayments.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.procurementPayments.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.procurementPayments.get", M>> =>
          invoke(
            "workspace.procurementPayments.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.procurementPayments.get", M>>,
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
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.movements.get", M>> =>
          invoke(
            "workspace.movements.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.movements.get", M>>,
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
      organizations: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.organizations.list", M>> =>
          invoke(
            "workspace.organizations.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.organizations.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.organizations.get", M>> =>
          invoke(
            "workspace.organizations.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.organizations.get", M>>,
      },
      contracts: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.contracts.list", M>> =>
          invoke(
            "workspace.contracts.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.contracts.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.contracts.get", M>> =>
          invoke(
            "workspace.contracts.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.contracts.get", M>>,
      },
      priceTypes: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.priceTypes.list", M>> =>
          invoke(
            "workspace.priceTypes.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.priceTypes.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.priceTypes.get", M>> =>
          invoke(
            "workspace.priceTypes.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.priceTypes.get", M>>,
      },
      filters: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.filters.list", M>> =>
          invoke(
            "workspace.filters.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.filters.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.filters.get", M>> =>
          invoke(
            "workspace.filters.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.filters.get", M>>,
      },
      customFields: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.customFields.list", M>> =>
          invoke(
            "workspace.customFields.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.customFields.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.customFields.get", M>> =>
          invoke(
            "workspace.customFields.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.customFields.get", M>>,
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
      catalogProfiles: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.catalogProfiles.list", M>> =>
          invoke(
            "workspace.catalogProfiles.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.catalogProfiles.list", M>>,
        get: (
          id: string,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.catalogProfiles.get", M>> =>
          invoke(
            "workspace.catalogProfiles.get",
            { id },
            undefined,
            undefined,
            options,
          ) as Promise<SdkResponse<S, "workspace.catalogProfiles.get", M>>,
      },
      replenishment: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.replenishment.list", M>> =>
          invoke(
            "workspace.replenishment.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.replenishment.list", M>>,
      },
      commissionReport: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.commissionReport.list", M>> =>
          invoke(
            "workspace.commissionReport.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.commissionReport.list", M>>,
      },
      commissionBalances: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.commissionBalances.list", M>> =>
          invoke(
            "workspace.commissionBalances.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<SdkResponse<S, "workspace.commissionBalances.list", M>>,
      },
      counterpartyBalances: {
        list: (
          query?: ResourceQuery,
          options?: CallOptions,
        ): Promise<SdkResponse<S, "workspace.counterpartyBalances.list", M>> =>
          invoke(
            "workspace.counterpartyBalances.list",
            {},
            undefined,
            { selection: resourceSelection(snapshot, query) },
            options,
          ) as Promise<
            SdkResponse<S, "workspace.counterpartyBalances.list", M>
          >,
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
    billing: {
      overview: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "billing.overview", M>> =>
        invoke(
          "billing.overview",
          {},
          undefined,
          undefined,
          options,
        ) as Promise<SdkResponse<S, "billing.overview", M>>,
    },
    company: {
      schema: (
        options?: CallOptions,
      ): Promise<SdkResponse<S, "company.schema", M>> =>
        invoke("company.schema", {}, undefined, undefined, options) as Promise<
          SdkResponse<S, "company.schema", M>
        >,
    },
  };
}
