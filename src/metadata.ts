/** Generated from the public Bearer routes. */
export const metadata = {
  "catalog_profile.create": {
    method: "post",
    path: "/api/v1/catalog-profiles",
    binary: false,
  },
  "catalog_profile.list": {
    method: "get",
    path: "/api/v1/catalog-profiles",
    binary: false,
  },
  "catalog_profile.update": {
    method: "patch",
    path: "/api/v1/catalog-profiles/{profileId}",
    binary: false,
  },
  "catalog_presentation.update": {
    method: "patch",
    path: "/api/v1/catalog-presentations/{scopeId}",
    binary: false,
  },
  "catalog_presentation.get": {
    method: "get",
    path: "/api/v1/catalog-presentations/{scopeId}",
    binary: false,
  },
  "price_type.create": {
    method: "post",
    path: "/api/v1/price-types",
    binary: false,
  },
  "price_type.update": {
    method: "patch",
    path: "/api/v1/price-types/{priceTypeId}",
    binary: false,
  },
  "price_type.delete": {
    method: "delete",
    path: "/api/v1/price-types/{priceTypeId}",
    binary: false,
  },
  "filter.create": {
    method: "post",
    path: "/api/v1/filters",
    binary: false,
  },
  "filter.update": {
    method: "patch",
    path: "/api/v1/filters/{filterId}",
    binary: false,
  },
  "filter.delete": {
    method: "delete",
    path: "/api/v1/filters/{filterId}",
    binary: false,
  },
  "filter_value.create": {
    method: "post",
    path: "/api/v1/filters/{filterId}/values",
    binary: false,
  },
  "filter_value.update": {
    method: "patch",
    path: "/api/v1/filters/{filterId}/values/{valueId}",
    binary: false,
  },
  "filter_value.delete": {
    method: "delete",
    path: "/api/v1/filters/{filterId}/values/{valueId}",
    binary: false,
  },
  "product.create": {
    method: "post",
    path: "/api/v1/products",
    binary: false,
  },
  "product.update": {
    method: "patch",
    path: "/api/v1/products/{productId}",
    binary: false,
  },
  "product.delete": {
    method: "delete",
    path: "/api/v1/products/{productId}",
    binary: false,
  },
  "product_image.delete": {
    method: "delete",
    path: "/api/v1/products/{productId}/images/{imageId}",
    binary: false,
  },
  "partner.create": {
    method: "post",
    path: "/api/v1/partners",
    binary: false,
  },
  "partner.update": {
    method: "patch",
    path: "/api/v1/partners/{partnerId}",
    binary: false,
  },
  "partner.delete": {
    method: "delete",
    path: "/api/v1/partners/{partnerId}",
    binary: false,
  },
  "partner.resolve": {
    method: "post",
    path: "/api/v1/partners/resolve",
    binary: false,
  },
  "organization.create": {
    method: "post",
    path: "/api/v1/organizations",
    binary: false,
  },
  "organization.update": {
    method: "patch",
    path: "/api/v1/organizations/{organizationId}",
    binary: false,
  },
  "organization.delete": {
    method: "delete",
    path: "/api/v1/organizations/{organizationId}",
    binary: false,
  },
  "contract.create": {
    method: "post",
    path: "/api/v1/contracts",
    binary: false,
  },
  "contract.update": {
    method: "patch",
    path: "/api/v1/contracts/{contractId}",
    binary: false,
  },
  "contract.delete": {
    method: "delete",
    path: "/api/v1/contracts/{contractId}",
    binary: false,
  },
  "custom_field.create": {
    method: "post",
    path: "/api/v1/custom-fields",
    binary: false,
  },
  "custom_field.update": {
    method: "patch",
    path: "/api/v1/custom-fields/{fieldId}",
    binary: false,
  },
  "custom_field.delete": {
    method: "delete",
    path: "/api/v1/custom-fields/{fieldId}",
    binary: false,
  },
  "external_link.create": {
    method: "post",
    path: "/api/v1/external-links",
    binary: false,
  },
  get_external_links: {
    method: "get",
    path: "/api/v1/external-links",
    binary: false,
  },
  "warehouse.create": {
    method: "post",
    path: "/api/v1/warehouses",
    binary: false,
  },
  "warehouse.update": {
    method: "patch",
    path: "/api/v1/warehouses/{warehouseId}",
    binary: false,
  },
  "warehouse.delete": {
    method: "delete",
    path: "/api/v1/warehouses/{warehouseId}",
    binary: false,
  },
  "purchase.create": {
    method: "post",
    path: "/api/v1/purchases",
    binary: false,
  },
  "purchase.delete": {
    method: "delete",
    path: "/api/v1/purchases/{purchaseId}",
    binary: false,
  },
  "procurement.create": {
    method: "post",
    path: "/api/v1/procurement/documents",
    binary: false,
  },
  "procurement.update": {
    method: "patch",
    path: "/api/v1/procurement/documents/{documentId}",
    binary: false,
  },
  "procurement.delete": {
    method: "delete",
    path: "/api/v1/procurement/documents/{documentId}",
    binary: false,
  },
  "procurement.status": {
    method: "patch",
    path: "/api/v1/procurement/documents/{documentId}/status",
    binary: false,
  },
  "procurement_import.retry": {
    method: "post",
    path: "/api/v1/procurement/imports/{importId}/recognize",
    binary: false,
  },
  "procurement_import.reject": {
    method: "delete",
    path: "/api/v1/procurement/imports/{importId}",
    binary: false,
  },
  "procurement_import.document": {
    method: "post",
    path: "/api/v1/procurement/imports/{importId}/document",
    binary: false,
  },
  "procurement_payment.create": {
    method: "post",
    path: "/api/v1/procurement/payments",
    binary: false,
  },
  "procurement_payment.update": {
    method: "patch",
    path: "/api/v1/procurement/payments/{paymentId}",
    binary: false,
  },
  "procurement_payment.delete": {
    method: "delete",
    path: "/api/v1/procurement/payments/{paymentId}",
    binary: false,
  },
  "procurement_payment.status": {
    method: "patch",
    path: "/api/v1/procurement/payments/{paymentId}/status",
    binary: false,
  },
  "order.create": {
    method: "post",
    path: "/api/v1/orders",
    binary: false,
  },
  "order.status": {
    method: "patch",
    path: "/api/v1/orders/{orderId}/status",
    binary: false,
  },
  "order.reserve": {
    method: "patch",
    path: "/api/v1/orders/{orderId}/reservation",
    binary: false,
  },
  "order.schedule": {
    method: "patch",
    path: "/api/v1/orders/{orderId}/schedule",
    binary: false,
  },
  "order.delete": {
    method: "delete",
    path: "/api/v1/orders/{orderId}",
    binary: false,
  },
  "sales_workflow.create": {
    method: "post",
    path: "/api/v1/sales-workflows",
    binary: false,
  },
  "sales_workflow.update": {
    method: "patch",
    path: "/api/v1/sales-workflows/{workflowId}",
    binary: false,
  },
  "sales_workflow.delete": {
    method: "delete",
    path: "/api/v1/sales-workflows/{workflowId}",
    binary: false,
  },
  "order.transition": {
    method: "patch",
    path: "/api/v1/orders/{orderId}/transition",
    binary: false,
  },
  "stock.receipt": {
    method: "post",
    path: "/api/v1/stock/receipt",
    binary: false,
  },
  "stock.writeoff": {
    method: "post",
    path: "/api/v1/stock/writeoff",
    binary: false,
  },
  "stock.transfer": {
    method: "post",
    path: "/api/v1/stock/transfer",
    binary: false,
  },
  "settings.update": {
    method: "patch",
    path: "/api/v1/settings",
    binary: false,
  },
  get_bootstrap: {
    method: "get",
    path: "/api/v1/bootstrap",
    binary: false,
  },
  get_catalog: {
    method: "get",
    path: "/api/v1/catalog",
    binary: false,
  },
  get_audit: {
    method: "get",
    path: "/api/v1/audit",
    binary: false,
  },
  get_images_imageId_: {
    method: "get",
    path: "/api/v1/images/{imageId}",
    binary: false,
  },
  get_procurement_imports: {
    method: "get",
    path: "/api/v1/procurement/imports",
    binary: false,
  },
  "procurement_import.create": {
    method: "post",
    path: "/api/v1/procurement/imports",
    binary: true,
  },
  get_procurement_imports_importId_file: {
    method: "get",
    path: "/api/v1/procurement/imports/{importId}/file",
    binary: false,
  },
  "product_image.create": {
    method: "post",
    path: "/api/v1/products/{productId}/images",
    binary: true,
  },
  "catalog_profile.catalog": {
    method: "get",
    path: "/api/v1/catalog-profiles/{profileId}/catalog",
    binary: false,
  },
  "catalog_profile.product": {
    method: "get",
    path: "/api/v1/catalog-profiles/{profileId}/products/{productId}",
    binary: false,
  },
  "events.list": {
    method: "get",
    path: "/api/v1/events",
    binary: false,
  },
  "billing.overview": {
    method: "get",
    path: "/api/v1/billing",
    binary: false,
  },
  "company.schema": {
    method: "get",
    path: "/api/v1/schema",
    binary: false,
  },
} as const;
