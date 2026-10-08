# Выпуск SDK в npm

Исходники, публичный OpenAPI, документация и синтетические примеры находятся
в отдельном публичном репозитории. Схемы реальных компаний и секреты туда не входят.

1. Обновите contract/openapi.json совместимым контрактом backend.
2. Выполните npm ci, npm run generate, npm run generate:check, npm test.
3. Поднимите версию package.json/package-lock.json, дополните CHANGELOG.md.
4. Выполните npm run package:check: проверяются реальный архив и allowlist файлов.
5. Закоммитьте проверенные исходники. Выполните npm publish --access public
   --registry=https://registry.npmjs.org. Нужны права организации @bistrysklad;
   интерактивная публикация может запросить подтверждение 2FA в npm.
6. Проверьте npm view @bistrysklad/sdk version и установку из registry в пустой
   проект. Создайте тег v<version> только для действительно опубликованного релиза.

publishConfig закрепляет публичный доступ и официальный registry. Постоянные
npm-токены не входят в Git. Для CI можно настроить npm Trusted Publishing
на проверенный workflow; такая конфигурация требует настройки в самом npm.
Provenance используйте при публикации из доверенного CI, не имитируйте локально.

Генерация типов конкретной компании не требует нового выпуска SDK. Установите
версию в lockfile проекта и перегенерируйте локальную схему после её изменения.
Основной entrypoint — ESM/CJS и оба графа деклараций, /node — WebSocket,
bistrysklad — CLI. Node >=22.18 для серверных инструментов.

Источники: [публичные scoped-пакеты](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/),
[Trusted Publishing](https://docs.npmjs.com/trusted-publishers/).
