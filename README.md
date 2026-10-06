# @bistrysklad/sdk

Типизированный TypeScript SDK для [Быстрого склада](https://bistrysklad.ru).
Товары, фото, цены, остатки, заказы, статусные модели, витрины и дополнительные
поля — через один клиент. `Idempotency-Key` для команд создаётся автоматически.
Есть realtime-подписки через SSE и WebSocket и генератор типов вашей компании.

**Версия: 0.1.0-beta.4.** Это отдельный репозиторий пакета. Публикация в npm
пока не выполнена: используйте [проверенный архив релиза](https://github.com/bistrysklad/sdk/releases/tag/v0.1.0-beta.4). Node.js ≥22.18 нужен для CLI
и WebSocket; основной клиент собирается для современных браузеров.
Лицензия пока `UNLICENSED`: публичный исходный код сам по себе не предоставляет
лицензию на распространение и изменение.

## Установка и первый запрос

```sh
npm install https://github.com/bistrysklad/sdk/releases/download/v0.1.0-beta.4/bistrysklad-sdk-0.1.0-beta.4.tgz
```

Владелец склада выпускает токен в «Настройки → API-токены». Передайте его
серверу через переменную окружения `BISTRYSKLAD_TOKEN`.

```ts
import { createBistryskladClient } from "@bistrysklad/sdk";

const sklad = createBistryskladClient({
  baseUrl: "https://bistrysklad.ru", // допустим и адрес с /api/v1
  token: process.env.BISTRYSKLAD_TOKEN!,
});
const catalog = await sklad.catalog.list();
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
соответствующий каталог целиком. В событии нет копии товара или фото.
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
