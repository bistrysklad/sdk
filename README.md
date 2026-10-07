# @bistrysklad/sdk

Типизированный TypeScript SDK для [Быстрого склада](https://bistrysklad.ru).
Товары, фото, цены, остатки, заказы, статусные модели, витрины и дополнительные
поля — через один клиент. `Idempotency-Key` для команд создаётся автоматически.
Есть realtime-подписки через SSE и WebSocket и генератор типов вашей компании.

**Версия: 0.1.0-beta.6.** Это отдельный репозиторий пакета. Публикация в npm
пока не выполнена: используйте [проверенный архив релиза](https://github.com/bistrysklad/sdk/releases/tag/v0.1.0-beta.6). Node.js ≥22.18 нужен для CLI
и WebSocket; основной клиент собирается для современных браузеров.
Лицензия пока `UNLICENSED`: публичный исходный код сам по себе не предоставляет
лицензию на распространение и изменение.

## Установка и первый запрос

```sh
npm install https://github.com/bistrysklad/sdk/releases/download/v0.1.0-beta.6/bistrysklad-sdk-0.1.0-beta.6.tgz
```

Владелец склада выпускает токен в «Настройки → API-токены». Передайте его
серверу через переменную окружения `BISTRYSKLAD_TOKEN`.

```ts
import { createBistryskladClient } from "@bistrysklad/sdk";

const sklad = createBistryskladClient({
  baseUrl: "https://bistrysklad.ru", // допустим и адрес с /api/v1
  token: process.env.BISTRYSKLAD_TOKEN!,
  responseMode: "minimal",
});
const catalog = await sklad.workspace.products.list({limit:50});
const created = await sklad.products.create({ name: "Упаковочная коробка" });
console.log(created.result.id);
```

Токен даёт доступ к компании; храните его на сервере. Для магазина браузер
обращается к вашему backend, который авторизует посетителя и отдаёт допустимые
данные. Пример такой схемы есть ниже. Сессии владельца, настройки тарифа и
управление импортом МойСклада выполняются через приложение склада.

## Типы дополнительных полей по URL

```sh
# BISTRYSKLAD_TOKEN уже задан в окружении/CI secrets
npx bistrysklad generate --url https://bistrysklad.ru --out src/bistrysklad
```

Генератор создаёт `api.ts`, `fields.ts`, `client.ts` и манифест управляемых
файлов. Токен в них не записывается. Типы работают локально, без запросов при
сборке. После изменения полей повторите генерацию и проверьте diff.

```ts
import { createCompanyClient } from "./bistrysklad/client.js";
const sklad = createCompanyClient({ token: process.env.BISTRYSKLAD_TOKEN! });

// Если в компании есть material: select(Cotton, Linen), weight: number:
await sklad.products.create({
  name: "Ткань",
  customValues: { material: "Cotton", weight: 1.25 },
});
// Неизвестное поле, строка вместо числа или неверный select — ошибка TypeScript.
```

Коды полей переводятся в серверные ID и обратно. Поля необязательные и допускают
`null`; архивные поля доступны для чтения и исключены из записи. Для разных
компаний используйте разные каталоги генерации. `--check` ничего не записывает:
код выхода `0` — актуально, `1` — схема изменилась, `2` — запрос/валидация не удались.
Подробнее: [генератор и типизация](docs/guide.en.md#generate-types-from-your-company-url).

## Изменения в реальном времени

Обычная подписка использует SSE. Серверная интеграция может использовать WebSocket:

```ts
import { subscribeToEvents } from "@bistrysklad/sdk/node";
const stop = new AbortController();

for await (const event of subscribeToEvents(
  { baseUrl: "https://bistrysklad.ru", token: process.env.BISTRYSKLAD_TOKEN! },
  { signal: stop.signal, after: savedCursor },
)) {
  // Событие сообщает, что данные изменились. Прочитайте актуальную карточку/каталог.
  await refreshAffectedCatalog(event);
  await saveCursor(event.cursor); // после успешной обработки
}
```

Для SSE: `sklad.events.subscribe({ signal, after })`. Оба транспорта возвращают
`AsyncIterable<WarehouseEvent>`, восстанавливают соединение и возобновляют чтение
с последнего обработанного курсора. `AbortController.abort()` останавливает
подписку и переподключения. Новый токен берётся у token provider при каждом соединении.

| Событие | Что изменилось |
| --- | --- |
| `product.created` | Товар создан |
| `product.updated` | Карточка товара изменена |
| `product.deleted` | Товар удалён |
| `catalog.invalidated` | Цена, фото, остаток, резерв, комплект, фильтры, публикация, профиль или схема полей |

`entityId` содержит ID товара, когда он известен; `null` требует обновить
текущую страницу каталога. В событии нет копии товара или фото.
События появляются после успешного commit; rollback и повтор идемпотентной
команды не создают повторных изменений. Одна команда может создать несколько
событий. Обработка должна допускать повторную доставку.

Поток хранит последние **20 000 событий компании**. Без `after` подписка
начинает с текущей позиции. При `EVENT_CURSOR_EXPIRED` загрузите новый снимок.
Чтобы избежать потери изменений при начальной загрузке, сначала получите
`(await sklad.events.list()).cursor`, затем снимок каталога и подпишитесь с этим
курсором. [Протокол, восстановление и ограничения](docs/realtime.md).

Готовый [пример backend → браузер через SSE](examples/README.md) держит один
WebSocket со складом, обновляет опубликованный каталог выбранной витрины и
уведомляет браузеры о новой версии. Складской токен остаётся на backend.

## Быстрые ответы команд

Для серверной интеграции можно получать короткое подтверждение сохранения:

```ts
const sklad = createBistryskladClient({
  baseUrl: "https://bistrysklad.ru",
  token: process.env.BISTRYSKLAD_TOKEN!,
  responseMode: "minimal",
});
const saved = await sklad.products.create({ name: "Коробка" });
console.log(saved.result.id, saved.revision);
// saved.state отсутствует и не доступен в типах.
const catalog = await sklad.workspace.products.list({limit:50}); // тип и формат чтения сохранены
```

В этом режиме команды передают `Prefer: return=minimal`. Сервер подтверждает
транзакцию до ответа, возвращает `{ result, revision }` и сохраняет компактное
подтверждение для повторов. Полный снимок рабочего пространства не строится
внутри транзакции. `revision` — версия данных компании; она не является курсором
realtime-потока. Генерируемый `createCompanyClient` принимает ту же настройку.

По умолчанию остаётся режим `full` с `{ result, state }`. Не меняйте режим при
повторе команды с тем же ключом: сервер вернёт `IDEMPOTENCY_CONFLICT`. Если
старый сервер не поддерживает компактные ответы, SDK выдаёт
`COMPACT_RESPONSE_UNSUPPORTED` с ключом команды. Операция могла сохраниться:
проверьте актуальные данные. Старый сервер мог сохранить полный ответ: после
обновления его можно повторно получить клиентом в режиме `full`, с тем же
ключом и телом. Повтор в режиме `minimal` для такого ключа может дать
`IDEMPOTENCY_CONFLICT`. Новый ключ может создать вторую операцию.

## Команды, ошибки и возможности

Один вызов команды получает один UUID; явные повторы используют одинаковые
байты и ключ. По умолчанию записи не повторяются; чтения делают до трёх попыток.
Для задания, переживающего рестарт процесса, сохраняйте свой `idempotencyKey`.
`BistryskladError` содержит `status`, `code`, `idempotencyKey` и `rateLimit`.
Настраиваются `signal`, `timeoutMs`, custom `fetch`, token provider и `onResponse`.

```ts
import { BistryskladError } from "@bistrysklad/sdk";
try {
  await sklad.products.create({ name: "Коробка" }, { idempotencyKey: persistedJobKey });
} catch (error) {
  if (error instanceof BistryskladError) console.log(error.status, error.code);
}
```

Доступны 75 обычных методов: товары/комплекты, фото, цены, фильтры, контрагенты,
договоры, склады, документы, закупки, продажи, статусы и движения, API-схема,
тарифные данные, витрины и поток изменений. Автодополнение показывает точные
запросы и ответы. Полные DTO экспортируются как `components`, `operations`, `paths`.
[Файлы, заказы, процессы продаж и витрины](docs/guide.en.md).

## Разработка пакета

```sh
npm ci
npm run generate:check
npm test
npm pack
```

Для сборки своего архива клонируйте репозиторий и выполните команды выше.

`contract/openapi.json` — публичный снимок контракта, генерация не требует
репозитория backend. При обновлении контракта выполните `npm run generate`.
CI проверяет генерацию, runtime, SSE/WebSocket, установку архива, ESM/CJS,
браузерную сборку и положительные/отрицательные TypeScript-примеры.
Основной экспорт не импортирует Node-модули; WebSocket находится в `/node`.
[Порядок выпуска](docs/releases.md).

## Страницы, карточки и итоги

`workspace` читает отдельные ресурсы: `products`, `partners`, `orders`, `lots`,
`purchases`, `procurementDocuments`, `procurementPayments`, `movements`,
`warehouses`, `organizations`, `contracts`, `priceTypes`, `filters`,
`customFields`, `salesWorkflows`, `catalogProfiles`.
У каждого есть `list(query)` и `get(id)`. Отчёты `replenishment`,
`commissionReport`, `commissionBalances`, `counterpartyBalances` имеют `list`.

```ts
const page = await sklad.workspace.products.list({
  limit: 50, offset: 0, q: "Коробка",
  sort: {field: "price", direction: "asc"},
});
console.log(page.ids, page.pagination.total, page.pagination.nextOffset);
const product = await sklad.workspace.products.get("product-id");
const summary = await sklad.workspace.summary({
  start: "2026-10-01T00:00:00Z", end: "2026-10-08T00:00:00Z", timeZone: "UTC",
});
```

`data` содержит текущие строки и их прямые связи. Для списка используйте `ids`:
связанный товар того же типа может присутствовать в `data.products` без входа в
страницу. `pagination.total` и `summary` считаются по всему отбору/периоду.
`Product.stock` содержит точные физические, зарезервированные и свободные остатки
по складам. Страницы ограничены 100 строками, по умолчанию 50; поиск, условия и
сортировка выполняются в PostgreSQL до отбора страницы.

Дополнительные поля участвуют и в чтении, и в выборе:

```ts
// Клиент, созданный генератором для компании с weight: number.
const page = await sklad.workspace.products.list({
  conditions: [{id:"weight",field:"custom:weight",operator:"gte",value:"1",to:""}],
  sort: {field:"custom:weight",direction:"desc"}, limit:50,
});
const file = await sklad.workspace.products.export([
  {key:"name",label:"Название"}, {key:"custom:weight",label:"Вес"},
], {q:"Коробка"});
```

Генератор переводит коды в ID компании; неизвестные коды обнаруживаются типами.
CSV выгружает весь отбор пакетами на сервере. Обычные чтения не перебирают все
страницы автоматически. `workspace.context()` отдаёт компанию и настройки,
`workspace.stockPreview()` — полный FIFO итог и до 50 строк плана. Legacy
`state.get()` и `catalog.list()` сохранены для существующих интеграций; новый UI
использует страницы/карточки и компактные команды.
