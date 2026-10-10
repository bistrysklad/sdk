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
