# Методы SDK

Создано из публичного OpenAPI. Аргументы и ответы доступны в автодополнении TypeScript.

| Метод SDK | HTTP | Ответ команды |
| --- | --- | --- |
| `sklad.catalogProfiles.create()` | `POST /api/v1/catalog-profiles` | result + revision в minimal |
| `sklad.catalogProfiles.list()` | `GET /api/v1/catalog-profiles` | Ресурс / страница |
| `sklad.catalogProfiles.update()` | `PATCH /api/v1/catalog-profiles/{profileId}` | result + revision в minimal |
| `sklad.catalogPresentations.update()` | `PATCH /api/v1/catalog-presentations/{scopeId}` | result + revision в minimal |
| `sklad.catalogPresentations.get()` | `GET /api/v1/catalog-presentations/{scopeId}` | Ресурс / страница |
| `sklad.priceTypes.create()` | `POST /api/v1/price-types` | result + revision в minimal |
| `sklad.priceTypes.update()` | `PATCH /api/v1/price-types/{priceTypeId}` | result + revision в minimal |
| `sklad.priceTypes.delete()` | `DELETE /api/v1/price-types/{priceTypeId}` | result + revision в minimal |
| `sklad.filters.create()` | `POST /api/v1/filters` | result + revision в minimal |
| `sklad.filters.update()` | `PATCH /api/v1/filters/{filterId}` | result + revision в minimal |
| `sklad.filters.delete()` | `DELETE /api/v1/filters/{filterId}` | result + revision в minimal |
| `sklad.filterValues.create()` | `POST /api/v1/filters/{filterId}/values` | result + revision в minimal |
| `sklad.filterValues.update()` | `PATCH /api/v1/filters/{filterId}/values/{valueId}` | result + revision в minimal |
| `sklad.filterValues.delete()` | `DELETE /api/v1/filters/{filterId}/values/{valueId}` | result + revision в minimal |
| `sklad.products.create()` | `POST /api/v1/products` | result + revision в minimal |
| `sklad.products.update()` | `PATCH /api/v1/products/{productId}` | result + revision в minimal |
| `sklad.products.delete()` | `DELETE /api/v1/products/{productId}` | result + revision в minimal |
| `sklad.productImages.delete()` | `DELETE /api/v1/products/{productId}/images/{imageId}` | result + revision в minimal |
| `sklad.partners.create()` | `POST /api/v1/partners` | result + revision в minimal |
| `sklad.partners.update()` | `PATCH /api/v1/partners/{partnerId}` | result + revision в minimal |
| `sklad.partners.delete()` | `DELETE /api/v1/partners/{partnerId}` | result + revision в minimal |
| `sklad.partners.resolve()` | `POST /api/v1/partners/resolve` | result + revision в minimal |
| `sklad.organizations.create()` | `POST /api/v1/organizations` | result + revision в minimal |
| `sklad.organizations.update()` | `PATCH /api/v1/organizations/{organizationId}` | result + revision в minimal |
| `sklad.organizations.delete()` | `DELETE /api/v1/organizations/{organizationId}` | result + revision в minimal |
| `sklad.contracts.create()` | `POST /api/v1/contracts` | result + revision в minimal |
| `sklad.contracts.update()` | `PATCH /api/v1/contracts/{contractId}` | result + revision в minimal |
| `sklad.contracts.delete()` | `DELETE /api/v1/contracts/{contractId}` | result + revision в minimal |
| `sklad.customFields.create()` | `POST /api/v1/custom-fields` | result + revision в minimal |
| `sklad.customFields.update()` | `PATCH /api/v1/custom-fields/{fieldId}` | result + revision в minimal |
| `sklad.customFields.delete()` | `DELETE /api/v1/custom-fields/{fieldId}` | result + revision в minimal |
| `sklad.externalLinks.create()` | `POST /api/v1/external-links` | result + revision в minimal |
| `sklad.externalLinks.find()` | `GET /api/v1/external-links` | Ресурс / страница |
| `sklad.warehouses.create()` | `POST /api/v1/warehouses` | result + revision в minimal |
| `sklad.warehouses.update()` | `PATCH /api/v1/warehouses/{warehouseId}` | result + revision в minimal |
| `sklad.warehouses.delete()` | `DELETE /api/v1/warehouses/{warehouseId}` | result + revision в minimal |
| `sklad.purchases.create()` | `POST /api/v1/purchases` | result + revision в minimal |
| `sklad.purchases.delete()` | `DELETE /api/v1/purchases/{purchaseId}` | result + revision в minimal |
| `sklad.procurement.create()` | `POST /api/v1/procurement/documents` | result + revision в minimal |
| `sklad.procurement.update()` | `PATCH /api/v1/procurement/documents/{documentId}` | result + revision в minimal |
| `sklad.procurement.delete()` | `DELETE /api/v1/procurement/documents/{documentId}` | result + revision в minimal |
| `sklad.procurement.status()` | `PATCH /api/v1/procurement/documents/{documentId}/status` | result + revision в minimal |
| `sklad.procurementImports.retry()` | `POST /api/v1/procurement/imports/{importId}/recognize` | result + revision в minimal |
| `sklad.procurementImports.reject()` | `DELETE /api/v1/procurement/imports/{importId}` | result + revision в minimal |
| `sklad.procurementImports.document()` | `POST /api/v1/procurement/imports/{importId}/document` | result + revision в minimal |
| `sklad.procurementPayments.create()` | `POST /api/v1/procurement/payments` | result + revision в minimal |
| `sklad.procurementPayments.update()` | `PATCH /api/v1/procurement/payments/{paymentId}` | result + revision в minimal |
| `sklad.procurementPayments.delete()` | `DELETE /api/v1/procurement/payments/{paymentId}` | result + revision в minimal |
| `sklad.procurementPayments.status()` | `PATCH /api/v1/procurement/payments/{paymentId}/status` | result + revision в minimal |
| `sklad.orders.create()` | `POST /api/v1/orders` | result + revision в minimal |
| `sklad.orders.status()` | `PATCH /api/v1/orders/{orderId}/status` | result + revision в minimal |
| `sklad.orders.reserve()` | `PATCH /api/v1/orders/{orderId}/reservation` | result + revision в minimal |
| `sklad.orders.schedule()` | `PATCH /api/v1/orders/{orderId}/schedule` | result + revision в minimal |
| `sklad.orders.delete()` | `DELETE /api/v1/orders/{orderId}` | result + revision в minimal |
| `sklad.salesWorkflows.create()` | `POST /api/v1/sales-workflows` | result + revision в minimal |
| `sklad.salesWorkflows.update()` | `PATCH /api/v1/sales-workflows/{workflowId}` | result + revision в minimal |
| `sklad.salesWorkflows.delete()` | `DELETE /api/v1/sales-workflows/{workflowId}` | result + revision в minimal |
| `sklad.orders.transition()` | `PATCH /api/v1/orders/{orderId}/transition` | result + revision в minimal |
| `sklad.stock.receipt()` | `POST /api/v1/stock/receipt` | result + revision в minimal |
| `sklad.stock.writeoff()` | `POST /api/v1/stock/writeoff` | result + revision в minimal |
| `sklad.stock.transfer()` | `POST /api/v1/stock/transfer` | result + revision в minimal |
| `sklad.settings.update()` | `PATCH /api/v1/settings` | result + revision в minimal |
| `sklad.state.get()` | `GET /api/v1/bootstrap` | Ресурс / страница |
| `sklad.catalog.list()` | `GET /api/v1/catalog` | Ресурс / страница |
| `sklad.audit.list()` | `GET /api/v1/audit` | Ресурс / страница |
| `sklad.images.get()` | `GET /api/v1/images/{imageId}` | Ресурс / страница |
| `sklad.procurementImports.list()` | `GET /api/v1/procurement/imports` | Ресурс / страница |
| `sklad.procurementImports.create()` | `POST /api/v1/procurement/imports` | result + revision в minimal |
| `sklad.procurementImports.download()` | `GET /api/v1/procurement/imports/{importId}/file` | Ресурс / страница |
| `sklad.productImages.create()` | `POST /api/v1/products/{productId}/images` | result + revision в minimal |
| `sklad.workspace.products.export()` | `GET /api/v1/workspace/products/export` | Ресурс / страница |
| `sklad.workspace.products.list()` | `GET /api/v1/workspace/products` | Ресурс / страница |
| `sklad.workspace.products.get()` | `GET /api/v1/workspace/products/{id}` | Ресурс / страница |
| `sklad.workspace.partners.list()` | `GET /api/v1/workspace/partners` | Ресурс / страница |
| `sklad.workspace.partners.get()` | `GET /api/v1/workspace/partners/{id}` | Ресурс / страница |
| `sklad.workspace.orders.list()` | `GET /api/v1/workspace/orders` | Ресурс / страница |
| `sklad.workspace.orders.get()` | `GET /api/v1/workspace/orders/{id}` | Ресурс / страница |
| `sklad.workspace.lots.list()` | `GET /api/v1/workspace/lots` | Ресурс / страница |
| `sklad.workspace.lots.get()` | `GET /api/v1/workspace/lots/{id}` | Ресурс / страница |
| `sklad.workspace.purchases.list()` | `GET /api/v1/workspace/purchases` | Ресурс / страница |
| `sklad.workspace.purchases.get()` | `GET /api/v1/workspace/purchases/{id}` | Ресурс / страница |
| `sklad.workspace.procurementDocuments.list()` | `GET /api/v1/workspace/procurementDocuments` | Ресурс / страница |
| `sklad.workspace.procurementDocuments.get()` | `GET /api/v1/workspace/procurementDocuments/{id}` | Ресурс / страница |
| `sklad.workspace.procurementPayments.list()` | `GET /api/v1/workspace/procurementPayments` | Ресурс / страница |
| `sklad.workspace.procurementPayments.get()` | `GET /api/v1/workspace/procurementPayments/{id}` | Ресурс / страница |
| `sklad.workspace.movements.list()` | `GET /api/v1/workspace/movements` | Ресурс / страница |
| `sklad.workspace.movements.get()` | `GET /api/v1/workspace/movements/{id}` | Ресурс / страница |
| `sklad.workspace.warehouses.list()` | `GET /api/v1/workspace/warehouses` | Ресурс / страница |
| `sklad.workspace.warehouses.get()` | `GET /api/v1/workspace/warehouses/{id}` | Ресурс / страница |
| `sklad.workspace.organizations.list()` | `GET /api/v1/workspace/organizations` | Ресурс / страница |
| `sklad.workspace.organizations.get()` | `GET /api/v1/workspace/organizations/{id}` | Ресурс / страница |
| `sklad.workspace.contracts.list()` | `GET /api/v1/workspace/contracts` | Ресурс / страница |
| `sklad.workspace.contracts.get()` | `GET /api/v1/workspace/contracts/{id}` | Ресурс / страница |
| `sklad.workspace.priceTypes.list()` | `GET /api/v1/workspace/priceTypes` | Ресурс / страница |
| `sklad.workspace.priceTypes.get()` | `GET /api/v1/workspace/priceTypes/{id}` | Ресурс / страница |
| `sklad.workspace.filters.list()` | `GET /api/v1/workspace/filters` | Ресурс / страница |
| `sklad.workspace.filters.get()` | `GET /api/v1/workspace/filters/{id}` | Ресурс / страница |
| `sklad.workspace.customFields.list()` | `GET /api/v1/workspace/customFields` | Ресурс / страница |
| `sklad.workspace.customFields.get()` | `GET /api/v1/workspace/customFields/{id}` | Ресурс / страница |
| `sklad.workspace.salesWorkflows.list()` | `GET /api/v1/workspace/salesWorkflows` | Ресурс / страница |
| `sklad.workspace.salesWorkflows.get()` | `GET /api/v1/workspace/salesWorkflows/{id}` | Ресурс / страница |
| `sklad.workspace.catalogProfiles.list()` | `GET /api/v1/workspace/catalogProfiles` | Ресурс / страница |
| `sklad.workspace.catalogProfiles.get()` | `GET /api/v1/workspace/catalogProfiles/{id}` | Ресурс / страница |
| `sklad.workspace.replenishment.list()` | `GET /api/v1/workspace/replenishment` | Ресурс / страница |
| `sklad.workspace.commissionReport.list()` | `GET /api/v1/workspace/commissionReport` | Ресурс / страница |
| `sklad.workspace.commissionBalances.list()` | `GET /api/v1/workspace/commissionBalances` | Ресурс / страница |
| `sklad.workspace.counterpartyBalances.list()` | `GET /api/v1/workspace/counterpartyBalances` | Ресурс / страница |
| `sklad.workspace.stockPreview()` | `GET /api/v1/workspace/stock-preview` | Ресурс / страница |
| `sklad.workspace.context()` | `GET /api/v1/workspace/context` | Ресурс / страница |
| `sklad.workspace.summary()` | `GET /api/v1/workspace/summary` | Ресурс / страница |
| `sklad.catalogProfiles.catalog()` | `GET /api/v1/catalog-profiles/{profileId}/catalog` | Ресурс / страница |
| `sklad.catalogProfiles.product()` | `GET /api/v1/catalog-profiles/{profileId}/products/{productId}` | Ресурс / страница |
| `sklad.events.list()` | `GET /api/v1/events` | Ресурс / страница |
| `sklad.billing.overview()` | `GET /api/v1/billing` | Ресурс / страница |
| `sklad.company.schema()` | `GET /api/v1/schema` | Ресурс / страница |

Дополнительно: `sklad.events.subscribe(options)` — SSE AsyncIterable; `subscribeToEvents` из `@bistrysklad/sdk/node` — WebSocket AsyncIterable.

Каждый HTTP-метод принимает необязательные CallOptions: signal, timeoutMs, retry и idempotencyKey для команд.
