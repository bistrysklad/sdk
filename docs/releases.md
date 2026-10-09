# Выпуск SDK из GitHub в npm

Пакет связан с [публичным репозиторием](https://github.com/bistrysklad/sdk)
через `repository`, с [документацией](https://docs.bistrysklad.ru/guide.html)
через `homepage`. README включается в npm-архив и отображается на странице пакета.
Обновление README в GitHub меняет страницу npm при следующем выпуске версии.

## Однократная настройка Trusted Publisher

В настройках пакета `@bistrysklad/sdk` в npm добавьте GitHub Actions:

| Поле | Значение |
| --- | --- |
| Organization/user | `bistrysklad` |
| Repository | `sdk` |
| Workflow filename | `publish.yml` |
| Environment | Не задан |
| Permission | Publish |

Можно настроить из терминала с npm ≥11.15, входом владельца и включённой 2FA:

```sh
npm trust github @bistrysklad/sdk --repo bistrysklad/sdk --file publish.yml --allow-publish --yes
npm trust list @bistrysklad/sdk --json
```

Подтверждение npm проходите в своём терминале/браузере. Постоянный npm-токен
в GitHub Secrets не нужен: workflow получает краткоживущую OIDC-авторизацию.
GitHub hosted runner и право `id-token: write` заданы в workflow.
[Официальная инструкция npm](https://docs.npmjs.com/trusted-publishers/),
[команда npm trust](https://docs.npmjs.com/cli/v11/commands/npm-trust/).

## Выпуск версии

1. Обновите публичный `contract/openapi.json`, выполните `npm run generate`.
2. Обновите `package.json`, lockfile и CHANGELOG. Выполните `npm ci`, `npm test`,
   `npm run package:check`; проверьте содержимое реального tarball.
3. Закоммитьте и отправьте изменения. Проверьте успешный SDK CI.
4. Создайте GitHub Release с тегом `v<version>`, совпадающим с `package.json`.
5. Workflow повторяет проверки и публикует пакет с provenance. При ошибке не
   переиспользуйте номер уже опубликованной версии.
6. Проверьте `npm view @bistrysklad/sdk version repository.url homepage`, затем
   установите точную версию из registry в пустой проект и проверьте ESM/CJS.

Обычный push и PR не публикуют пакет. Публикация вызывается событием GitHub
Release. Проверка тега предотвращает выпуск случайного номера. Нельзя объявлять
версию выпущенной только потому, что архив собрался локально.

## Переход с 0.1.0 на 0.2.0

Генератор CLI 0.1.0 проверяет наличие методов старого полного API. С нынешней
публичной схемой он завершится сообщением `API contract is incomplete or
incompatible with this SDK`. Для генерации по URL нужен SDK 0.2.0 или новее;
работающие чтения и WebSocket в 0.1.0 не подтверждают совместимость его CLI.
Проверьте реальный номер в registry через `npm view @bistrysklad/sdk version`
перед обновлением. Локальный `npm pack` проверяет архив, но не публикует его.

Новая версия содержит только интеграционный API. Методы `state`, `settings`,
`billing`, `stock`, закупок и изменения справочников/витрин удалены.
Используйте приложение для административных действий и отдельные чтения
`workspace.products`, `workspace.orders`, `workspace.salesWorkflows` для данных.

Существующие токены становятся читающими. Явно включите «Изменение каталога»
и/или «Работа с заказами» у владельца, если интеграции нужны эти операции.
Секрет токена сохраняется; права можно изменить без перевыпуска.

Команды всегда возвращают `{ result, revision }`; вместо `saved.state` перечитайте
нужную карточку. Повторы записей теперь включены по умолчанию. Для очередей
сохраняйте ключ команды; `retry: { maxAttempts: 1 }` отключает повторы вызова.
Перегенерируйте локальные типы компании и проверьте TypeScript-компиляцию.
