# @bistrysklad/sdk

TypeScript-клиент [Быстрого склада](https://bistrysklad.ru): товары, витрины,
фотографии, остатки, заказы и события. Сигнатуры создаются из публичного OpenAPI;
генератор по URL добавляет типы дополнительных полей вашей компании.

**Документация:** [первые шаги и сценарии](https://docs.bistrysklad.ru/guide.html),
[справочник с HTTP и SDK примерами](https://docs.bistrysklad.ru/reference.html),
[все методы SDK](docs/methods.md). [Пакет npm](https://www.npmjs.com/package/@bistrysklad/sdk),
[GitHub](https://github.com/bistrysklad/sdk), [MIT](LICENSE).

Этот README описывает **0.2.0**. Node.js ≥22.18 для CLI и WebSocket.
Есть ESM, CommonJS, строгие типы и отдельный Node entrypoint. Токен используйте
на backend: он не должен попадать в браузер посетителя или публичный репозиторий.

## Установка и первый запрос

```sh
npm install @bistrysklad/sdk
```

В приложении откройте **Настройки → API-токены**, выпустите токен и задайте
`BISTRYSKLAD_TOKEN` в окружении backend. Секрет показывается один раз.

```ts
import { createBistryskladClient } from "@bistrysklad/sdk";

const token = process.env.BISTRYSKLAD_TOKEN;
if (!token) throw new Error("Задайте BISTRYSKLAD_TOKEN");
const sklad = createBistryskladClient({
  baseUrl: "https://bistrysklad.ru", // можно https://bistrysklad.ru/api/v1
  token,
});

const profiles = await sklad.catalogProfiles.list();
if (profiles.profiles.length) {
  const page = await sklad.catalogProfiles.catalog(profiles.profiles[0].id, {
    limit: 50,
    sort: "default",
  });
  console.log(page.products, page.nextOffset);
}
```

Пустое пространство возвращает пустые списки. Витрина применяет настроенные
публикацию, склад, цену и порядок. Если `nextOffset` задан, запросите следующую
страницу. При смене `version` между страницами перечитайте их.

## Права и ответы

| Токен | Методы |
| --- | --- |
| По умолчанию | Товары, витрины, фото, остатки, схема полей и события: чтение |
| «Изменение каталога» | Создание/изменение/удаление товаров и фото |
| «Работа с заказами» | Чтение/создание заказов, резерв, расписание, переходы, поиск покупателя |

Права включаются отдельно владельцем при выпуске или редактировании токена.
Изменение тарифов, импорт, настройки, права доступа и бухгалтерские операции
выполняются в кабинете. Чтения не возвращают себестоимость и поставщиков.

Все команды возвращают **`{ result, revision }`** после commit. Полное состояние
пространства не возвращается. Для актуальной карточки используйте отдельное
чтение. `revision` и курсор событий имеют разное назначение.

```ts
// Нужен флаг «Изменение каталога».
const saved = await sklad.products.create({ name: "Упаковочная коробка" });
const page = await sklad.workspace.products.get(saved.result.id);
console.log(saved.revision, page.data.products);
```

В 0.2.0 удалены методы кабинета из SDK. Существующие токены получают права
только на чтение; владелец может явно включить нужную запись. Параметр
`responseMode` сохранён для совместимости кода, команды всегда компактные.
[Переход с 0.1.0](docs/releases.md).

## Повторы, таймауты и ключи команд

Настройка работает сразу после создания клиента:

| Параметр | По умолчанию |
| --- | --- |
| Чтения и команды | До 3 попыток, включая первую |
| Повторяемые ошибки | Сетевая ошибка; HTTP 429, 502, 503, 504 |
| Пауза | Экспоненциальная: от 200 мс, максимум 2 с |
| `Retry-After` | Пауза из ответа имеет приоритет |
| Таймаут | 30 с на весь вызов, включая повторы и ожидание токена |
| Ключ команды | UUID создаётся автоматически один раз на вызов |

SDK повторяет запись с одинаковыми методом, URL, ключом и байтами тела.
Ошибки 400, 401, 402, 403 и 409 не повторяются. Новый вызов без сохранённого
ключа считается новой командой. Для очереди заданий сохраните ключ **до**
запроса, чтобы повтор после рестарта не создал дубль:

```ts
await sklad.orders.create(checkoutCommand, {
  idempotencyKey: persistedCheckoutKey,
});
```

`checkoutCommand` — проверенные данные заказа, `persistedCheckoutKey` — UUID
задания в вашей БД. Нужен флаг «Работа с заказами».

```ts
const configured = createBistryskladClient({
  baseUrl: "https://bistrysklad.ru",
  token,
  timeoutMs: 15_000,
  retry: { maxAttempts: 3, baseDelayMs: 300, maxDelayMs: 2000 },
});
const stop = new AbortController();
await configured.catalog.list(undefined, {
  signal: stop.signal,
  retry: { maxAttempts: 1 }, // отключить повторы только этого вызова
});
```

Параметры вызова дополняют настройки клиента. `AbortController.abort()`
останавливает запрос и ожидание; сохранённую сервером команду он не откатывает.
При неизвестном результате удерживайте прежний ключ.

## Ошибки

```ts
import { BistryskladError } from "@bistrysklad/sdk";

try {
  await sklad.workspace.products.list({ limit: 50 });
} catch (error) {
  if (!(error instanceof BistryskladError)) throw error;
  console.error(error.status, error.code, error.message);
  // Для команды здесь будет ключ, который нужно сохранить при неизвестном результате.
  console.log(error.idempotencyKey, error.rateLimit.retryAfterMs);
}
```

`error.code` предназначен для обработки в коде; текст сообщения может меняться.
`TOKEN_PERMISSION_DENIED` требует изменить права, `WORKSPACE_BUSY` — снизить
параллельность, `IDEMPOTENCY_CONFLICT` — проверить запрос, связанный с ключом.
При `TIMEOUT` или `NETWORK_ERROR` команда могла сохраниться.
[Все ошибки и действия](docs/errors.md).

## Дополнительные поля по URL

```sh
# BISTRYSKLAD_TOKEN задан в окружении, не передавайте секрет аргументом CLI.
npx bistrysklad generate --url https://bistrysklad.ru --out src/bistrysklad
npx bistrysklad generate --url https://bistrysklad.ru --out src/bistrysklad --check
```

Генератор создаёт `api.ts`, `fields.ts`, `client.ts` и манифест. Токен в них
не записывается. Типы работают локально без сети при сборке. Для каждой компании
нужен отдельный каталог; после изменения схемы повторите генерацию.

```ts
import { createCompanyClient } from "./bistrysklad/client.js";
const typed = createCompanyClient({ token });

// Если у компании есть material: select(Cotton, Linen), weight: number:
await typed.products.create({
  name: "Ткань",
  customValues: { material: "Cotton", weight: 1.25 },
});
const page = await typed.workspace.products.list({
  sort: { field: "custom:weight", direction: "desc" },
});
console.log(page.data.products?.[0].customValues.material);
```

Неизвестный код, строка вместо числа и неверное значение select отклоняются
TypeScript. Коды переводятся в ID на отправке и обратно на чтении; архивные поля
доступны только для чтения. Типы участвуют в фильтрах, сортировках и CSV.
`--check` не меняет файлы: код 0 — актуально, 1 — схема изменилась, 2 — ошибка.
[Подробности генератора](docs/guide.en.md#generate-types-from-your-company-url).

## Фотографии

```ts
import { readFile } from "node:fs/promises";

// Для загрузки нужно «Изменение каталога».
await sklad.productImages.create(productId, await readFile("photo.png"), {
  contentType: "image/png",
});
const original: Blob = await sklad.images.get(imageId);
const thumbnail: Blob = await sklad.images.get(imageId, {
  width: 400, height: 400, fit: "cover", format: "webp",
});
```

ID изображений приходит в карточке товара. Отдавайте нужный вариант через свой
backend или CDN, проверив публикацию товара. Bearer-токен не добавляется в URL фото.
Без параметров выдаётся оригинал. С одной стороной сохраняются пропорции;
`contain` вписывает всё фото, `cover` обрезает по центру и требует обе стороны.
Маленькие фото не увеличиваются. Для экрана 200 CSS px с плотностью 2x запросите
400 px. Варианты — **lossless WebP** по умолчанию или PNG: кодирование не добавляет
потерь, но уменьшение разрешения убирает детали. Прозрачность и ориентация
сохраняются. Слайдера `quality` нет. Размер файла зависит от содержимого и может
превышать оригинал. Размер стороны 1..4096 px, исходник до 40 MP; анимация не
преобразуется (422). Готовые варианты кешируются; `X-Image-Cache` сообщает
HIT/MISS/COALESCED, `ETag` поддерживает условное чтение с `If-None-Match`.
SDK возвращает Blob; для чтения этих HTTP-заголовков используйте свой fetch.
При занятой обработке сервер возвращает 503/Retry-After, SDK повторяет запрос.
Старый вызов `images.get(id, { signal, timeoutMs })` продолжает работать;
для нового вызова CallOptions также можно передать третьим аргументом.

## Обновления через WebSocket

```ts
import { subscribeToEvents } from "@bistrysklad/sdk/node";

const initialCursor = (await sklad.events.list()).cursor;
const initialCatalog = await sklad.catalog.list();
console.log(initialCatalog.products);
const stop = new AbortController();
for await (const event of subscribeToEvents(
  { baseUrl: "https://bistrysklad.ru", token },
  { after: initialCursor, signal: stop.signal },
)) {
  console.log(event.type, event.entityId, event.cursor);
  // Перечитайте нужную карточку; затем сохраните cursor в своей БД.
}
```

Backend подключается к складу по WebSocket и может выдавать браузерам свой SSE.
Событие сообщает об изменении, а не содержит карточку. SDK переподключается с
последнего обработанного курсора; допускайте повторную доставку. При истёкшем
курсоре загрузите новый снимок. [Протокол](docs/realtime.md),
[рабочий сервер и браузер](examples/README.md), [сценарий витрина → заказ](docs/integration.md).

## Выпуск из GitHub

[Workflow](https://github.com/bistrysklad/sdk/blob/main/.github/workflows/publish.yml)
проверяет пакет и публикует тег версии через npm Trusted Publishing. Постоянный
npm-токен в репозитории не нужен. [Настройка и последовательность выпуска](docs/releases.md).
