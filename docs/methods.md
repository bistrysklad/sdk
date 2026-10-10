# Методы SDK

Создано из публичного OpenAPI. Аргументы и ответы доступны в автодополнении TypeScript.

| Метод SDK | HTTP | Ответ команды |
| --- | --- | --- |
| `sklad.catalogProfiles.list()` | `GET /api/v1/catalog-profiles` | Ресурс / страница |
| `sklad.catalogPresentations.update()` | `PATCH /api/v1/catalog-presentations/{scopeId}` | result + revision в minimal |
| `sklad.catalogPresentations.get()` | `GET /api/v1/catalog-presentations/{scopeId}` | Ресурс / страница |
| `sklad.products.create()` | `POST /api/v1/products` | result + revision в minimal |
| `sklad.products.update()` | `PATCH /api/v1/products/{productId}` | result + revision в minimal |
| `sklad.products.delete()` | `DELETE /api/v1/products/{productId}` | result + revision в minimal |
| `sklad.productImages.delete()` | `DELETE /api/v1/products/{productId}/images/{imageId}` | result + revision в minimal |
| `sklad.partners.resolve()` | `POST /api/v1/partners/resolve` | result + revision в minimal |
| `sklad.externalLinks.create()` | `POST /api/v1/external-links` | result + revision в minimal |
| `sklad.externalLinks.find()` | `GET /api/v1/external-links` | Ресурс / страница |
| `sklad.orders.create()` | `POST /api/v1/orders` | result + revision в minimal |
| `sklad.orders.status()` | `PATCH /api/v1/orders/{orderId}/status` | result + revision в minimal |
| `sklad.orders.reserve()` | `PATCH /api/v1/orders/{orderId}/reservation` | result + revision в minimal |
| `sklad.orders.schedule()` | `PATCH /api/v1/orders/{orderId}/schedule` | result + revision в minimal |
| `sklad.orders.delete()` | `DELETE /api/v1/orders/{orderId}` | result + revision в minimal |
| `sklad.orders.transition()` | `PATCH /api/v1/orders/{orderId}/transition` | result + revision в minimal |
| `sklad.catalog.list()` | `GET /api/v1/catalog` | Ресурс / страница |
| `sklad.images.get()` | `GET /api/v1/images/{imageId}` | Ресурс / страница |
| `sklad.productImages.create()` | `POST /api/v1/products/{productId}/images` | result + revision в minimal |
| `sklad.workspace.products.export()` | `GET /api/v1/workspace/products/export` | Ресурс / страница |
| `sklad.workspace.products.list()` | `GET /api/v1/workspace/products` | Ресурс / страница |
| `sklad.workspace.products.get()` | `GET /api/v1/workspace/products/{id}` | Ресурс / страница |
| `sklad.workspace.orders.list()` | `GET /api/v1/workspace/orders` | Ресурс / страница |
| `sklad.workspace.orders.get()` | `GET /api/v1/workspace/orders/{id}` | Ресурс / страница |
| `sklad.workspace.salesWorkflows.list()` | `GET /api/v1/workspace/salesWorkflows` | Ресурс / страница |
| `sklad.workspace.salesWorkflows.get()` | `GET /api/v1/workspace/salesWorkflows/{id}` | Ресурс / страница |
| `sklad.catalogProfiles.catalog()` | `GET /api/v1/catalog-profiles/{profileId}/catalog` | Ресурс / страница |
| `sklad.catalogProfiles.product()` | `GET /api/v1/catalog-profiles/{profileId}/products/{productId}` | Ресурс / страница |
| `sklad.events.list()` | `GET /api/v1/events` | Ресурс / страница |
| `sklad.company.schema()` | `GET /api/v1/schema` | Ресурс / страница |

Дополнительно: `sklad.events.subscribe(options)` — SSE AsyncIterable; `subscribeToEvents` из `@bistrysklad/sdk/node` — WebSocket AsyncIterable.

Каждый HTTP-метод принимает необязательные CallOptions: signal, timeoutMs, retry и idempotencyKey для команд.
