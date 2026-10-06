# Changelog

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
