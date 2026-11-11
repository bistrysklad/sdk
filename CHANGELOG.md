## 0.3.0-catalog.20261111.3

- Catalog-scoped product definitions and values, separate generated catalogProduct types.
- Native string lists and typed table rows, preserving false, zero, empty and null.
- Metadata-only products.customValues command with optimistic customValuesVersion.
- Source/package candidate; not published to the npm registry.

## Не выложено — 2026-11-09 · 0.3.0-stock.20261109.4

- Новые типизированные методы закупок, подтверждений поставщиков, частичной
  приёмки, политик и планирования с раздельными правами procurement/inventory.
- Проверка обеспечения корзины на дату, история распределения заказа,
  наблюдение пересчёта ниже резерва без складского движения.
- Генерация публичного контракта, ESM/CJS и упакованный пакет проверены.
  Локальный prerelease для интеграции Цветов; npm-публикации не было.

## Unreleased — 2026-11-07

- Add optional `inventoryTracked` to product writes and catalog/integration reads.
  It controls own quantity tracking for physical products and variants; virtual
  kits derive their quantity limits from tracked components. Existing servers
  without this field keep their previous semantics. No npm publication yet.

# 0.2.0

- Typed photo dimensions, contain/cover and lossless WebP/PNG output; legacy image CallOptions remain compatible.
- Explicit public integration API; owner-only settings/billing/import/stock and full state removed.
- Tokens default to reads, with separate catalog-write and order permissions.
- Compact command receipts by default and safe product page/filter/export types.
- Reads and idempotent writes retry up to three attempts, with merged overrides, bounded backoff and Retry-After.
- Expanded package docs, website links, per-method SDK snippets from OpenAPI metadata.
- GitHub Releases workflow for npm Trusted Publishing with provenance.

# Changelog

## 0.1.0

- First npm registry release with public access, ESM/CJS and CLI.
- 115 typed HTTP operations, resource pages/cards, compact commands and standalone Node WebSocket.
- Exported generic BistryskladClient type for application services.
- Deadline-bounded Retry-After, validated retry timing and tests for throttled writes.
- Tenant tariff quota enforcement indicator for backward-compatible billing reads.
- Practical integration/error guides, generated method reference and compiled examples.


## 0.1.0-beta.5

- Opt-in typed compact command responses with `responseMode: "minimal"`.
- `Prefer: return=minimal` is preserved across command retries and included in idempotency identity.
- Receipts contain `result` and the committed workspace `revision`; reads and custom field typing retain their contracts.
- Explicit error when an older backend returns an incompatible full response.

## 0.1.0-beta.4

- Standalone public repository and self-contained OpenAPI generation.
- Typed event catchup, SSE subscriptions and separate Node WebSocket transport.
- Cursor-based reconnect, cancellation, frame validation and bounded buffers.
- Realtime protocol guide and backend-to-browser SSE example.

## 0.1.0-beta.3

- Catalog profiles, publication/order and typed profile catalog pagination.
- Company custom field generator, ESM/CJS, automatic command idempotency.
- Scheduled orders, custom sales workflows, photos and procurement files.

Public OpenAPI descriptions, nested documentation topics and structured error
examples are synchronized with the server. Billing includes the one-month trial
and `TRIAL_EXPIRED`; expired free tokens pause until a paid plan is assigned.
