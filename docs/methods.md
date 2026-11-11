# Методы SDK

Создано из публичного OpenAPI. Аргументы и ответы доступны в автодополнении TypeScript.

| Метод SDK | HTTP | Ответ команды |
| --- | --- | --- |
| `sklad.procurement.receive()` | `POST /api/v1/procurement/documents/{documentId}/receive` | result + revision в minimal |
| `sklad.supplyPlan.purchase()` | `POST /api/v1/supply/plan/purchase` | result + revision в minimal |
| `sklad.supplyProfiles.create()` | `POST /api/v1/supply/profiles` | result + revision в minimal |
| `sklad.supply.profiles()` | `GET /api/v1/supply/profiles` | Ресурс / страница |
| `sklad.supplyProfiles.update()` | `PATCH /api/v1/supply/profiles/{profileId}` | result + revision в minimal |
| `sklad.stockPolicies.save()` | `PATCH /api/v1/supply/policies` | result + revision в minimal |
| `sklad.supply.policies()` | `GET /api/v1/supply/policies` | Ресурс / страница |
| `sklad.procurement.supply()` | `PATCH /api/v1/procurement/documents/{documentId}/supply` | result + revision в minimal |
| `sklad.supply.confirmation()` | `GET /api/v1/procurement/documents/{documentId}/supply` | Ресурс / страница |
| `sklad.supplyPlan.refresh()` | `POST /api/v1/supply/plan/refresh` | result + revision в minimal |
| `sklad.supplyProblems.acknowledge()` | `PATCH /api/v1/supply/problems/{problemId}` | result + revision в minimal |
| `sklad.catalogProfiles.list()` | `GET /api/v1/catalog-profiles` | Ресурс / страница |
| `sklad.catalogPresentations.update()` | `PATCH /api/v1/catalog-presentations/{scopeId}` | result + revision в minimal |
| `sklad.catalogPresentations.get()` | `GET /api/v1/catalog-presentations/{scopeId}` | Ресурс / страница |
| `sklad.products.customValues()` | `PATCH /api/v1/products/{productId}/custom-values` | result + revision в minimal |
| `sklad.products.create()` | `POST /api/v1/products` | result + revision в minimal |
| `sklad.products.update()` | `PATCH /api/v1/products/{productId}` | result + revision в minimal |
| `sklad.products.delete()` | `DELETE /api/v1/products/{productId}` | result + revision в minimal |
| `sklad.productImages.delete()` | `DELETE /api/v1/products/{productId}/images/{imageId}` | result + revision в minimal |
| `sklad.partners.resolve()` | `POST /api/v1/partners/resolve` | result + revision в minimal |
| `sklad.externalLinks.create()` | `POST /api/v1/external-links` | result + revision в minimal |
| `sklad.externalLinks.find()` | `GET /api/v1/external-links` | Ресурс / страница |
| `sklad.procurement.create()` | `POST /api/v1/procurement/documents` | result + revision в minimal |
| `sklad.procurement.update()` | `PATCH /api/v1/procurement/documents/{documentId}` | result + revision в minimal |
| `sklad.procurement.status()` | `PATCH /api/v1/procurement/documents/{documentId}/status` | result + revision в minimal |
| `sklad.orders.create()` | `POST /api/v1/orders` | result + revision в minimal |
| `sklad.orders.status()` | `PATCH /api/v1/orders/{orderId}/status` | result + revision в minimal |
| `sklad.orders.reserve()` | `PATCH /api/v1/orders/{orderId}/reservation` | result + revision в minimal |
| `sklad.orders.schedule()` | `PATCH /api/v1/orders/{orderId}/schedule` | result + revision в minimal |
| `sklad.orders.delete()` | `DELETE /api/v1/orders/{orderId}` | result + revision в minimal |
| `sklad.salesWorkflows.cvetiSetup()` | `POST /api/v1/sales-workflows/cveti` | result + revision в minimal |
| `sklad.orders.reopen()` | `POST /api/v1/orders/{orderId}/reopen` | result + revision в minimal |
| `sklad.orders.transition()` | `PATCH /api/v1/orders/{orderId}/transition` | result + revision в minimal |
| `sklad.stock.inventory()` | `POST /api/v1/stock/inventory` | result + revision в minimal |
| `sklad.stock.observe()` | `POST /api/v1/stock/inventory/observe` | result + revision в minimal |
| `sklad.stock.adjustment()` | `POST /api/v1/stock/adjustment` | result + revision в minimal |
| `sklad.stock.writeoffReasons()` | `GET /api/v1/stock/writeoff-reasons` | Ресурс / страница |
| `sklad.stock.writeoff()` | `POST /api/v1/stock/writeoff` | result + revision в minimal |
| `sklad.stock.inventories()` | `GET /api/v1/stock/inventories` | Ресурс / страница |
| `sklad.catalog.list()` | `GET /api/v1/catalog` | Ресурс / страница |
| `sklad.images.get()` | `GET /api/v1/images/{imageId}` | Ресурс / страница |
| `sklad.productImages.create()` | `POST /api/v1/products/{productId}/images` | result + revision в minimal |
| `sklad.workspace.products.export()` | `GET /api/v1/workspace/products/export` | Ресурс / страница |
| `sklad.workspace.products.list()` | `GET /api/v1/workspace/products` | Ресурс / страница |
| `sklad.workspace.products.get()` | `GET /api/v1/workspace/products/{id}` | Ресурс / страница |
| `sklad.workspace.partners.list()` | `GET /api/v1/workspace/partners` | Ресурс / страница |
| `sklad.workspace.partners.get()` | `GET /api/v1/workspace/partners/{id}` | Ресурс / страница |
| `sklad.workspace.orders.list()` | `GET /api/v1/workspace/orders` | Ресурс / страница |
| `sklad.workspace.orders.get()` | `GET /api/v1/workspace/orders/{id}` | Ресурс / страница |
| `sklad.workspace.lots.list()` | `GET /api/v1/workspace/lots` | Ресурс / страница |
| `sklad.workspace.procurementDocuments.list()` | `GET /api/v1/workspace/procurementDocuments` | Ресурс / страница |
| `sklad.workspace.procurementDocuments.get()` | `GET /api/v1/workspace/procurementDocuments/{id}` | Ресурс / страница |
| `sklad.workspace.movements.list()` | `GET /api/v1/workspace/movements` | Ресурс / страница |
| `sklad.workspace.warehouses.list()` | `GET /api/v1/workspace/warehouses` | Ресурс / страница |
| `sklad.workspace.warehouses.get()` | `GET /api/v1/workspace/warehouses/{id}` | Ресурс / страница |
| `sklad.workspace.salesWorkflows.list()` | `GET /api/v1/workspace/salesWorkflows` | Ресурс / страница |
| `sklad.workspace.salesWorkflows.get()` | `GET /api/v1/workspace/salesWorkflows/{id}` | Ресурс / страница |
| `sklad.catalogProfiles.catalog()` | `GET /api/v1/catalog-profiles/{profileId}/catalog` | Ресурс / страница |
| `sklad.catalogProfiles.product()` | `GET /api/v1/catalog-profiles/{profileId}/products/{productId}` | Ресурс / страница |
| `sklad.supply.receiptSource()` | `GET /api/v1/procurement/documents/{documentId}/receipt-source` | Ресурс / страница |
| `sklad.supply.plan()` | `GET /api/v1/supply/plan` | Ресурс / страница |
| `sklad.supply.availability()` | `GET /api/v1/supply/availability` | Ресурс / страница |
| `sklad.supply.history()` | `GET /api/v1/supply/orders/{orderId}/history` | Ресурс / страница |
| `sklad.events.list()` | `GET /api/v1/events` | Ресурс / страница |
| `sklad.company.schema()` | `GET /api/v1/schema` | Ресурс / страница |

Дополнительно: `sklad.events.subscribe(options)` — SSE AsyncIterable; `subscribeToEvents` из `@bistrysklad/sdk/node` — WebSocket AsyncIterable.

Каждый HTTP-метод принимает необязательные CallOptions: signal, timeoutMs, retry и idempotencyKey для команд.
