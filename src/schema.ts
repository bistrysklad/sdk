export interface paths {
    "/api/v1/catalog-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Профили каталога */
        get: operations["catalog_profile.list"];
        put?: never;
        /** Создать профиль каталога */
        post: operations["catalog_profile.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/catalog-profiles/{profileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменить или архивировать профиль каталога */
        patch: operations["catalog_profile.update"];
        trace?: never;
    };
    "/api/v1/catalog-presentations/{scopeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Публикация и порядок с наследованием */
        get: operations["catalog_presentation.get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменить публикацию и порядок; scopeId=common для общей основы */
        patch: operations["catalog_presentation.update"];
        trace?: never;
    };
    "/api/v1/price-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать тип цены */
        post: operations["price_type.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/price-types/{priceTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить тип цены и его цены товаров */
        delete: operations["price_type.delete"];
        options?: never;
        head?: never;
        /** Изменить тип цены */
        patch: operations["price_type.update"];
        trace?: never;
    };
    "/api/v1/filters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать фильтр */
        post: operations["filter.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/filters/{filterId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить фильтр, значения и привязки к товарам */
        delete: operations["filter.delete"];
        options?: never;
        head?: never;
        /** Изменить фильтр */
        patch: operations["filter.update"];
        trace?: never;
    };
    "/api/v1/filters/{filterId}/values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Добавить значение */
        post: operations["filter_value.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/filters/{filterId}/values/{valueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить значение и его привязки к товарам */
        delete: operations["filter_value.delete"];
        options?: never;
        head?: never;
        /** Изменить значение */
        patch: operations["filter_value.update"];
        trace?: never;
    };
    "/api/v1/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать товар или комплект */
        post: operations["product.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить товар без операций и связей */
        delete: operations["product.delete"];
        options?: never;
        head?: never;
        /** Изменить товар или комплект */
        patch: operations["product.update"];
        trace?: never;
    };
    "/api/v1/products/{productId}/images/{imageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить фотографию */
        delete: operations["product_image.delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/partners": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать контрагента */
        post: operations["partner.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/partners/{partnerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить контрагента без связей */
        delete: operations["partner.delete"];
        options?: never;
        head?: never;
        /** Изменить контрагента */
        patch: operations["partner.update"];
        trace?: never;
    };
    "/api/v1/partners/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Найти или создать контрагента */
        post: operations["partner.resolve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать собственное юридическое лицо */
        post: operations["organization.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{organizationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить организацию без связей */
        delete: operations["organization.delete"];
        options?: never;
        head?: never;
        /** Изменить собственное юридическое лицо */
        patch: operations["organization.update"];
        trace?: never;
    };
    "/api/v1/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать договор */
        post: operations["contract.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/contracts/{contractId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить договор без связей */
        delete: operations["contract.delete"];
        options?: never;
        head?: never;
        /** Изменить договор */
        patch: operations["contract.update"];
        trace?: never;
    };
    "/api/v1/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать определение поля */
        post: operations["custom_field.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/custom-fields/{fieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить поле без сохранённых значений */
        delete: operations["custom_field.delete"];
        options?: never;
        head?: never;
        /** Изменить определение поля */
        patch: operations["custom_field.update"];
        trace?: never;
    };
    "/api/v1/external-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Найти связь по внешнему ID */
        get: operations["get_external_links"];
        put?: never;
        /** Связать внешний ID */
        post: operations["external_link.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/warehouses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать склад */
        post: operations["warehouse.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/warehouses/{warehouseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить пустой склад */
        delete: operations["warehouse.delete"];
        options?: never;
        head?: never;
        /** Изменить или архивировать склад */
        patch: operations["warehouse.update"];
        trace?: never;
    };
    "/api/v1/purchases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать заказ поставщику */
        post: operations["purchase.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/purchases/{purchaseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить закупку без приёмки */
        delete: operations["purchase.delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать многострочный документ */
        post: operations["procurement.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/documents/{documentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить непроведённый документ без зависимых документов */
        delete: operations["procurement.delete"];
        options?: never;
        head?: never;
        /** Изменить черновик */
        patch: operations["procurement.update"];
        trace?: never;
    };
    "/api/v1/procurement/documents/{documentId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Провести, закрыть или отменить документ */
        patch: operations["procurement.status"];
        trace?: never;
    };
    "/api/v1/procurement/imports/{importId}/recognize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Повторить локальное распознавание файла */
        post: operations["procurement_import.retry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/imports/{importId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Отклонить загруженный файл без созданного документа */
        delete: operations["procurement_import.reject"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/imports/{importId}/document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать черновик из распознанного файла */
        post: operations["procurement_import.document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать платёж */
        post: operations["procurement_payment.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/payments/{paymentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить непроведённый платёж */
        delete: operations["procurement_payment.delete"];
        options?: never;
        head?: never;
        /** Изменить черновик платежа */
        patch: operations["procurement_payment.update"];
        trace?: never;
    };
    "/api/v1/procurement/payments/{paymentId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Провести или отменить платёж */
        patch: operations["procurement_payment.status"];
        trace?: never;
    };
    "/api/v1/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать заказ покупателя */
        post: operations["order.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/orders/{orderId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Сменить статус заказа */
        patch: operations["order.status"];
        trace?: never;
    };
    "/api/v1/orders/{orderId}/reservation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменить фактический резерв заказа */
        patch: operations["order.reserve"];
        trace?: never;
    };
    "/api/v1/orders/{orderId}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменить срок выполнения заказа */
        patch: operations["order.schedule"];
        trace?: never;
    };
    "/api/v1/orders/{orderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить неотгруженный заказ и снять резерв */
        delete: operations["order.delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sales-workflows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Создать статусную модель */
        post: operations["sales_workflow.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sales-workflows/{workflowId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить неиспользуемую модель */
        delete: operations["sales_workflow.delete"];
        options?: never;
        head?: never;
        /** Изменить модель только для будущих заказов */
        patch: operations["sales_workflow.update"];
        trace?: never;
    };
    "/api/v1/orders/{orderId}/transition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Выполнить разрешённый переход сохранённой модели */
        patch: operations["order.transition"];
        trace?: never;
    };
    "/api/v1/stock/receipt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Принять товар */
        post: operations["stock.receipt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stock/writeoff": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Списать товар */
        post: operations["stock.writeoff"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stock/transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Переместить товар */
        post: operations["stock.transfer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменить настройки компании */
        patch: operations["settings.update"];
        trace?: never;
    };
    "/api/v1/catalog/view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Личные столбцы каталога пользователя */
        get: operations["catalog_view.read"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Сохранить видимые столбцы и их порядок для текущего пользователя */
        patch: operations["catalog_view.save"];
        trace?: never;
    };
    "/api/v1/bootstrap": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Состояние склада */
        get: operations["get_bootstrap"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/catalog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Каталог с фильтрами и типом цены */
        get: operations["get_catalog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/audit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Журнал аудита */
        get: operations["get_audit"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/{imageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить оригинал фотографии */
        get: operations["get_images_imageId_"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Список загруженных закупочных файлов */
        get: operations["get_procurement_imports"];
        put?: never;
        /** Загрузить файл закупки для локального распознавания */
        post: operations["procurement_import.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/procurement/imports/{importId}/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Оригинал закупочного файла */
        get: operations["get_procurement_imports_importId_file"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/products/{productId}/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Загрузить фотографию */
        post: operations["product_image.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/catalog-profiles/{profileId}/catalog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Опубликованный каталог с ценами и остатками выбранного склада */
        get: operations["catalog_profile.catalog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/catalog-profiles/{profileId}/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Опубликованная карточка профиля */
        get: operations["catalog_profile.product"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Дочитать изменения товаров по курсору */
        get: operations["events.list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/events/stream": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** SSE: изменения товаров, ready и heartbeat */
        get: operations["events.stream"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/events/ws": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** WebSocket для серверных интеграций (только чтение) */
        get: operations["events.socket"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Подключение и история импорта МойСклада (сессия владельца) */
        get: operations["moysklad.overview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/connection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Проверить и сохранить шифрованный токен МойСклада */
        post: operations["moysklad.connect"];
        /** Отключить МойСклад после завершения задач */
        delete: operations["moysklad.disconnect"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Подготовить возобновляемый предварительный отчёт; склад не изменяется */
        post: operations["moysklad.preview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Приостановить импорт */
        post: operations["moysklad.pause"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/resume": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Продолжить с checkpoint */
        post: operations["moysklad.resume"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Отменить дальнейший перенос; созданные данные сохраняются */
        post: operations["moysklad.cancel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/apply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Начать запись после готового preview; закупки только черновиками. При пустой очереди завершает проверку без повторного переноса карточек/фото; ошибки и исключения сохраняются в отчёте */
        post: operations["moysklad.apply"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Подготовить новый preview из сохранённого completed отчёта; история и локальные изменения сохранены, apply требует подтверждения */
        post: operations["moysklad.retry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/rows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Страница отчёта; source=true включает исходный снимок и corrected_source после правки */
        get: operations["moysklad.report"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/rows/{kind}/{sourceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Данные редактора, конфликтующие карточки и компоненты строки */
        get: operations["moysklad.rowEditor"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/integrations/moysklad/jobs/{jobId}/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Исправить, исключить, вернуть строку или перепроверить отчёт до переноса */
        post: operations["moysklad.resolve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/billing/storage/cleanup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Освободить место от неиспользуемых файлов */
        post: operations["billing.storage_cleanup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/billing/change-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Заявка владельца на смену тарифа */
        post: operations["billing.change_request"];
        /** Отменить заявку на тариф */
        delete: operations["billing.cancel_request"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Публичные тарифы и квоты пространства */
        get: operations["billing.plans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/billing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Текущий тариф и фактическое потребление пространства */
        get: operations["billing.overview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Схема дополнительных полей компании для генератора SDK */
        get: operations["company.schema"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ServiceResponseModels: {
            events: components["schemas"]["EventsPage"];
            state: components["schemas"]["WarehouseState"];
            catalog: components["schemas"]["CatalogResponse"];
            profiles: components["schemas"]["CatalogProfilesResponse"];
            presentation: components["schemas"]["CatalogPresentation"];
            profileCatalog: components["schemas"]["ProfileCatalogResponse"];
            profileProduct: components["schemas"]["CatalogProduct"];
            view: components["schemas"]["CatalogViewPreference"];
            schema: components["schemas"]["CompanySchema"];
            link: components["schemas"]["ExternalLink"];
            audit: components["schemas"]["AuditResponse"];
            billing: components["schemas"]["BillingOverview"];
            plans: components["schemas"]["PlansResponse"];
            cleanup: components["schemas"]["StorageCleanupResult"];
            planChange: components["schemas"]["PlanChangeResult"];
            planCancel: components["schemas"]["PlanCancelResult"];
            imports: components["schemas"]["ImportsResponse"];
            overview: components["schemas"]["MoyskladOverview"];
            report: components["schemas"]["MoyskladReport"];
            editor: components["schemas"]["MoyskladRowEditor"];
            id: components["schemas"]["IdResult"];
            reference: components["schemas"]["ReferenceResult"];
            import: components["schemas"]["ImportResult"];
            rejected: components["schemas"]["RejectedImportResult"];
            orderStatus: components["schemas"]["OrderStatusResult"];
            orderCreate: components["schemas"]["OrderCreateResult"];
            partnerResolve: components["schemas"]["PartnerResolveResult"];
            importDocument: components["schemas"]["ImportDocumentResult"];
        };
        EventsPage: {
            events: components["schemas"]["WarehouseEvent"][];
            cursor: string;
            headCursor: string;
            hasMore: boolean;
            retentionEvents: number;
        };
        WarehouseEvent: {
            cursor: string;
            /** @enum {string} */
            type: "product.created" | "product.updated" | "product.deleted" | "catalog.invalidated";
            entityId: string | null;
            source: string;
            occurredAt: string;
        };
        WarehouseState: {
            company: {
                id: string;
                name: string;
            } | null;
            warehouses: components["schemas"]["Warehouse"][];
            priceTypes: components["schemas"]["PriceType"][];
            catalogProfiles: components["schemas"]["CatalogProfile"][];
            filters: components["schemas"]["CatalogFilter"][];
            products: components["schemas"]["Product"][];
            partners: components["schemas"]["Partner"][];
            organizations: components["schemas"]["Organization"][];
            contracts: components["schemas"]["Contract"][];
            customFields: components["schemas"]["CustomField"][];
            lots: components["schemas"]["Lot"][];
            purchases: components["schemas"]["Purchase"][];
            procurementDocuments: components["schemas"]["ProcurementDocument"][];
            procurementPayments: components["schemas"]["ProcurementPayment"][];
            replenishment: components["schemas"]["Replenishment"][];
            commissionReport: components["schemas"]["CommissionReport"][];
            commissionBalances: components["schemas"]["CommissionBalance"][];
            counterpartyBalances: components["schemas"]["CounterpartyBalance"][];
            orders: components["schemas"]["Order"][];
            salesWorkflows: components["schemas"]["SalesWorkflow"][];
            movements: components["schemas"]["Movement"][];
            settings: components["schemas"]["Settings"] | null;
        };
        Warehouse: {
            id: components["schemas"]["EntityId"];
            name: string;
            short: string;
            city: string;
            address: string;
            archived: boolean;
        };
        /** @description Wire models shared by web and future native clients. Dates are ISO strings; money is RUB. */
        EntityId: string;
        PriceType: {
            id: components["schemas"]["EntityId"];
            name: string;
            city: components["schemas"]["Nullable<string>"];
            archived: boolean;
        };
        "Nullable<string>": string | null;
        CatalogProfile: {
            id: components["schemas"]["EntityId"];
            name: string;
            warehouseId: components["schemas"]["EntityId"];
            priceTypeId: components["schemas"]["EntityId"];
            archived: boolean;
            version: number;
        };
        CatalogFilter: {
            id: components["schemas"]["EntityId"];
            name: string;
            archived: boolean;
            values: components["schemas"]["FilterValue"][];
        };
        FilterValue: {
            id: components["schemas"]["EntityId"];
            name: string;
            archived: boolean;
        };
        Product: {
            id: components["schemas"]["EntityId"];
            hasPrice?: boolean;
            kind: components["schemas"]["ProductKind"];
            name: string;
            sku: components["schemas"]["Nullable<string>"];
            category: components["schemas"]["Nullable<string>"];
            description: string;
            price: components["schemas"]["Nullable<number>"];
            cost: components["schemas"]["Nullable<number>"];
            minStock: components["schemas"]["Nullable<number>"];
            code: components["schemas"]["Nullable<string>"];
            externalCode: components["schemas"]["Nullable<string>"];
            uom: components["schemas"]["Nullable<string>"];
            country: components["schemas"]["Nullable<string>"];
            weightKg: components["schemas"]["Nullable<number>"];
            volumeM3: components["schemas"]["Nullable<number>"];
            vatRate: components["schemas"]["Nullable<number>"];
            minPrice: components["schemas"]["Nullable<number>"];
            preferredSupplierId: components["schemas"]["Nullable<EntityId>"];
            parentProductId: components["schemas"]["Nullable<EntityId>"];
            barcodes: string[];
            packages: components["schemas"]["ProductPackage"][];
            analogIds: components["schemas"]["EntityId"][];
            customValues: components["schemas"]["CustomValues"];
            tone: string;
            tags: string[];
            archived: boolean;
            salesWorkflowId: components["schemas"]["Nullable<EntityId>"];
            filterValueIds: components["schemas"]["EntityId"][];
            prices: components["schemas"]["ProductPrice"][];
            images: components["schemas"]["ProductImage"][];
            components: components["schemas"]["Component"][];
            physical: components["schemas"]["Nullable<number>"];
            available: components["schemas"]["Nullable<number>"];
        };
        /** @enum {string} */
        ProductKind: "product" | "variant" | "service" | "bundle";
        "Nullable<number>": number | null;
        "Nullable<EntityId>": components["schemas"]["EntityId"] | null;
        ProductPackage: {
            name: string;
            quantity: number;
            barcode: components["schemas"]["Nullable<string>"];
        };
        CustomValues: components["schemas"]["Record<string,CustomValue>"];
        "Record<string,CustomValue>": {
            [key: string]: components["schemas"]["CustomValue"];
        };
        CustomValue: string | number | boolean | null;
        ProductPrice: {
            priceTypeId: components["schemas"]["EntityId"];
            price: number;
        };
        ProductImage: {
            id: components["schemas"]["EntityId"];
            url: string;
            mimeType: string;
        };
        Component: {
            productId: components["schemas"]["EntityId"];
            quantity: number;
        };
        Partner: {
            legalKind: components["schemas"]["Nullable<(\"company\"|\"entrepreneur\"|\"person\")>"];
            fullName: components["schemas"]["Nullable<string>"];
            inn: components["schemas"]["Nullable<string>"];
            kpp: components["schemas"]["Nullable<string>"];
            ogrn: components["schemas"]["Nullable<string>"];
            legalAddress: components["schemas"]["Nullable<string>"];
            actualAddress: components["schemas"]["Nullable<string>"];
            bankAccounts: components["schemas"]["BankAccount"][];
            id: components["schemas"]["EntityId"];
            name: string;
            type: string;
            roles: string[];
            contact: string;
            phone: string;
            email: string;
            color: string;
            contacts: components["schemas"]["Contact"][];
            groups: string[];
            note: string;
            priceTypeId: components["schemas"]["Nullable<EntityId>"];
            discountPercent: components["schemas"]["Nullable<number>"];
            archived: boolean;
            customValues: components["schemas"]["CustomValues"];
        };
        /** @enum {string|null} */
        "Nullable<(\"company\"|\"entrepreneur\"|\"person\")>": "company" | "entrepreneur" | "person" | null;
        BankAccount: {
            accountNumber: string;
            bankName: string;
            bic: string;
            correspondentAccount: string;
        };
        Contact: {
            name: string;
            phone: string;
            email: string;
        };
        Organization: {
            legalKind: components["schemas"]["Nullable<(\"company\"|\"entrepreneur\"|\"person\")>"];
            fullName: components["schemas"]["Nullable<string>"];
            inn: components["schemas"]["Nullable<string>"];
            kpp: components["schemas"]["Nullable<string>"];
            ogrn: components["schemas"]["Nullable<string>"];
            legalAddress: components["schemas"]["Nullable<string>"];
            actualAddress: components["schemas"]["Nullable<string>"];
            bankAccounts: components["schemas"]["BankAccount"][];
            id: components["schemas"]["EntityId"];
            name: string;
            archived: boolean;
        };
        Contract: {
            id: components["schemas"]["EntityId"];
            partnerId: components["schemas"]["EntityId"];
            organizationId: components["schemas"]["Nullable<EntityId>"];
            number: string;
            signedAt: components["schemas"]["Nullable<string>"];
            /** @enum {string} */
            kind: "purchase" | "sale" | "commission";
            commissionPercent: components["schemas"]["Nullable<number>"];
            note: string;
            archived: boolean;
        };
        CustomField: {
            id: components["schemas"]["EntityId"];
            /** @description Stable integration key, independent of the display name. */
            code: string;
            entityKind: "product" | "partner" | components["schemas"]["ProcurementKind"];
            name: string;
            /** @enum {string} */
            valueType: "string" | "number" | "boolean" | "date" | "select";
            options: string[];
            archived: boolean;
        };
        /** @enum {string} */
        ProcurementKind: "purchase_order" | "supplier_invoice" | "receipt" | "supplier_return" | "internal_order";
        Lot: {
            id: components["schemas"]["EntityId"];
            productId: components["schemas"]["EntityId"];
            warehouseId: components["schemas"]["EntityId"];
            quantity: number;
            unitCost: number;
            supplier: string;
            reference: string;
            createdAt: string;
            sourceLotId: components["schemas"]["Nullable<EntityId>"];
            procurementLineNo: components["schemas"]["Nullable<number>"];
            /** @enum {string} */
            ownership: "own" | "commission";
            commissionContractId: components["schemas"]["Nullable<EntityId>"];
        };
        Purchase: {
            id: components["schemas"]["EntityId"];
            productId: components["schemas"]["EntityId"];
            supplier: string;
            warehouseId: components["schemas"]["EntityId"];
            quantity: number;
            unitCost: number;
            expectedAt: components["schemas"]["Nullable<string>"];
            status: string;
            received: number;
            damaged: number;
            missing: number;
            createdAt: string;
        };
        ProcurementDocument: {
            id: components["schemas"]["EntityId"];
            kind: components["schemas"]["ProcurementKind"];
            reference: string;
            status: string;
            supplierId: components["schemas"]["Nullable<EntityId>"];
            organizationId: components["schemas"]["Nullable<EntityId>"];
            contractId: components["schemas"]["Nullable<EntityId>"];
            warehouseId: components["schemas"]["Nullable<EntityId>"];
            sourceDocumentId: components["schemas"]["Nullable<EntityId>"];
            sourceImportId: components["schemas"]["Nullable<EntityId>"];
            issuedAt: components["schemas"]["Nullable<string>"];
            dueAt: components["schemas"]["Nullable<string>"];
            currency: string;
            note: string;
            customValues: components["schemas"]["CustomValues"];
            createdAt: string;
            postedAt: components["schemas"]["Nullable<string>"];
            lines: components["schemas"]["ProcurementLine"][];
            total: number;
            vatIncluded: components["schemas"]["Nullable<number>"];
            settlementDocumentId: components["schemas"]["EntityId"];
            paid: number;
            outstanding: components["schemas"]["Nullable<number>"];
        };
        ProcurementLine: {
            lineNo: number;
            productId: components["schemas"]["EntityId"];
            quantity: number;
            unitCost: number;
            vatRate: components["schemas"]["Nullable<number>"];
            damaged: number;
            missing: number;
            sourceLineNo: components["schemas"]["Nullable<number>"];
        };
        ProcurementPayment: {
            id: components["schemas"]["EntityId"];
            reference: string;
            /** @enum {string} */
            direction: "incoming" | "outgoing";
            status: string;
            partnerId: components["schemas"]["Nullable<EntityId>"];
            organizationId: components["schemas"]["Nullable<EntityId>"];
            contractId: components["schemas"]["Nullable<EntityId>"];
            documentId: components["schemas"]["Nullable<EntityId>"];
            amount: number;
            paidAt: components["schemas"]["Nullable<string>"];
            method: string;
            note: string;
            createdAt: string;
            postedAt: components["schemas"]["Nullable<string>"];
        };
        Replenishment: {
            productId: components["schemas"]["EntityId"];
            warehouseId: components["schemas"]["EntityId"];
            minStock: number;
            available: number;
            incoming: number;
            internalDemand: number;
            orderDemand: number;
            requiredAt: components["schemas"]["Nullable<string>"];
            suggested: number;
        };
        CommissionReport: {
            contractId: components["schemas"]["EntityId"];
            productId: components["schemas"]["EntityId"];
            shippedQuantity: number;
            unpricedQuantity: number;
            revenue: number;
            commission: number;
            payable: number;
        };
        CommissionBalance: {
            contractId: components["schemas"]["EntityId"];
            revenue: number;
            commission: number;
            paid: number;
            outstanding: number;
            unpricedQuantity: number;
        };
        CounterpartyBalance: {
            partnerId: components["schemas"]["EntityId"];
            balance: number;
        };
        Order: {
            id: components["schemas"]["EntityId"];
            customer: string;
            warehouseId: components["schemas"]["EntityId"];
            priceTypeId: components["schemas"]["Nullable<EntityId>"];
            externalSource: components["schemas"]["Nullable<string>"];
            externalId: components["schemas"]["Nullable<string>"];
            externalNumber: components["schemas"]["Nullable<string>"];
            deliveryAddress: components["schemas"]["Nullable<string>"];
            note: string;
            orderedAt: components["schemas"]["Nullable<string>"];
            fulfillmentAt: components["schemas"]["Nullable<string>"];
            fulfillmentTimeZone: components["schemas"]["Nullable<string>"];
            /** @enum {string} */
            stockDeductStatus: "picking" | "ready" | "shipped";
            stockDeductedAt: components["schemas"]["Nullable<string>"];
            workflow: components["schemas"]["OrderWorkflow"];
            status: string;
            channel: string;
            createdAt: string;
            shippedAt: components["schemas"]["Nullable<string>"];
            items: components["schemas"]["OrderItem"][];
        };
        OrderWorkflow: {
            id: components["schemas"]["Nullable<EntityId>"];
            name: string;
            version: number;
            statusId: string;
            definition: components["schemas"]["WorkflowDefinition"];
        };
        WorkflowDefinition: {
            initialStatus: string;
            statuses: components["schemas"]["WorkflowStatus"][];
            transitions: components["schemas"]["WorkflowTransition"][];
        };
        WorkflowStatus: {
            id: string;
            label: string;
            /** @enum {string} */
            category: "new" | "active" | "ready" | "completed" | "cancelled";
            /** @enum {string} */
            tone: "gray" | "blue" | "amber" | "green";
        };
        WorkflowTransition: {
            id: string;
            label: string;
            from: string;
            to: string;
            actions: components["schemas"]["WorkflowAction"][];
        };
        /** @enum {string} */
        WorkflowAction: "reserve_full" | "reserve_available" | "release_reserve" | "deduct_stock";
        OrderItem: {
            productId: components["schemas"]["EntityId"];
            quantity: number;
            price: number;
            components: components["schemas"]["OrderComponent"][];
        };
        OrderComponent: {
            productId: components["schemas"]["EntityId"];
            quantity: number;
            reservedQuantity: number;
        };
        SalesWorkflow: {
            id: components["schemas"]["EntityId"];
            name: string;
            version: number;
            definition: components["schemas"]["WorkflowDefinition"];
            archived: boolean;
        };
        Movement: {
            id: components["schemas"]["EntityId"];
            type: string;
            productId: components["schemas"]["EntityId"];
            warehouseId: components["schemas"]["EntityId"];
            toWarehouseId: components["schemas"]["Nullable<EntityId>"];
            quantity: number;
            amount: number;
            reference: components["schemas"]["Nullable<string>"];
            note: string;
            createdAt: string;
        };
        Settings: {
            companyName: string;
            lowStockAlerts: boolean;
            dailySummary: boolean;
            /** @enum {string} */
            orderStockDeductStatus: "picking" | "ready" | "shipped";
        };
        CatalogResponse: {
            priceTypes: {
                id: string;
                name: string;
                city: string | null;
            }[];
            selectedPriceTypeId: string | null;
            filters: {
                id: string;
                name: string;
                values: {
                    id: string;
                    name: string;
                }[];
            }[];
            products: components["schemas"]["CatalogProduct"][];
        };
        CatalogProduct: {
            id: components["schemas"]["EntityId"];
            kind: components["schemas"]["ProductKind"];
            sku: components["schemas"]["Nullable<string>"];
            name: string;
            category: components["schemas"]["Nullable<string>"];
            description: string;
            code: components["schemas"]["Nullable<string>"];
            externalCode: components["schemas"]["Nullable<string>"];
            uom: components["schemas"]["Nullable<string>"];
            country: components["schemas"]["Nullable<string>"];
            weightKg: components["schemas"]["Nullable<number>"];
            volumeM3: components["schemas"]["Nullable<number>"];
            vatRate: components["schemas"]["Nullable<number>"];
            minPrice: components["schemas"]["Nullable<number>"];
            parentProductId: components["schemas"]["Nullable<EntityId>"];
            barcodes: string[];
            packages: components["schemas"]["ProductPackage"][];
            analogIds: components["schemas"]["EntityId"][];
            tags: string[];
            price: number | null;
            hasPrice: boolean;
            physical: number | null;
            reserved: number | null;
            available: number | null;
            components: components["schemas"]["Component"][];
            filterValueIds: string[];
            images: components["schemas"]["ProductImage"][];
            customValues: components["schemas"]["CustomValues"];
        };
        CatalogProfilesResponse: {
            profiles: components["schemas"]["CatalogProfile"][];
        };
        CatalogPresentation: {
            scopeId: string;
            version: string;
            inheritedPublishedProductIds: string[];
            inheritedOrder: {
                productOrder: string[];
                filterOrder: string[];
                valueOrders: components["schemas"]["Record<string,string[]>"];
            };
            publications: components["schemas"]["CatalogPublication"][];
            productOrder: string[] | null;
            filterOrder: string[] | null;
            valueOrders: components["schemas"]["Record<string,(string[]|null)>"];
            effective: {
                publishedProductIds: string[];
                productOrder: string[];
                filterOrder: string[];
                valueOrders: components["schemas"]["Record<string,string[]>"];
            };
        };
        "Record<string,string[]>": {
            [key: string]: string[];
        };
        CatalogPublication: {
            productId: components["schemas"]["EntityId"];
            published: boolean | null;
        };
        "Record<string,(string[]|null)>": {
            [key: string]: string[] | null;
        };
        ProfileCatalogResponse: {
            priceTypes: {
                id: string;
                name: string;
                city: string | null;
            }[];
            selectedPriceTypeId: string | null;
            filters: {
                id: string;
                name: string;
                values: {
                    id: string;
                    name: string;
                }[];
            }[];
            products: components["schemas"]["CatalogProduct"][];
            profile: components["schemas"]["CatalogProfile"];
            version: string;
            warehouseId: string;
            limit: number;
            offset: number;
            total: number;
            nextOffset: number | null;
        };
        CatalogViewPreference: {
            columns: components["schemas"]["Nullable<string[]>"];
        };
        "Nullable<string[]>": string[] | null;
        CompanySchema: {
            /** @constant */
            formatVersion: 1;
            companyId: components["schemas"]["EntityId"];
            revision: string;
            fields: components["schemas"]["CustomField"][];
        };
        ExternalLink: {
            source: string;
            /** @enum {string} */
            entityType: "product" | "partner" | "order";
            externalId: string;
            internalId: string;
        };
        AuditResponse: {
            events: {
                id: string;
                actor: string;
                action: string;
                entity_type: string;
                entity_id: string | null;
                details: components["schemas"]["Record<string,unknown>"];
                created_at: string;
            }[];
        };
        "Record<string,unknown>": {
            [key: string]: unknown;
        };
        BillingOverview: {
            plan: components["schemas"]["BillingPlan"];
            plans: components["schemas"]["BillingPlan"][];
            storage: {
                databaseBytes: number;
                fileBytes: number;
                usedBytes: number;
                limitBytes: number;
                reservedBytes: number;
                files: number;
            };
            api: {
                used: number;
                limit: number;
                perMinute: number;
                periodStart: string;
                resetsAt: string;
            };
            warehouses: {
                used: number;
                limit: number;
            };
            changeRequest: {
                planId: string;
                /** @constant */
                status: "pending";
                requestedAt: string;
            } | null;
        };
        BillingPlan: {
            id: string;
            name: string;
            description: string;
            monthlyPrice: number;
            storageBytes: number;
            apiMonthly: number;
            apiPerMinute: number;
            warehouses: number;
            features: {
                storeOrders: boolean;
                extraWarehouses: boolean;
            };
        };
        PlansResponse: {
            plans: components["schemas"]["BillingPlan"][];
            paymentAvailable: boolean;
            futureFeatures: string[];
        };
        StorageCleanupResult: {
            deletedFiles: number;
            freedBytes: number;
            batchLimit: number;
        };
        PlanChangeResult: {
            /** @constant */
            status: "pending";
            planId: string;
        };
        PlanCancelResult: {
            /** @constant */
            status: "cancelled";
        };
        ImportsResponse: {
            imports: components["schemas"]["ProcurementImport"][];
            migrationPending: boolean;
        };
        ProcurementImport: {
            id: components["schemas"]["EntityId"];
            fileName: string;
            mimeType: string;
            byteSize: number;
            status: string;
            extraction: components["schemas"]["Extraction"] | null;
            error: components["schemas"]["Nullable<string>"];
            model: components["schemas"]["Nullable<string>"];
            documentId: components["schemas"]["Nullable<EntityId>"];
            attempts: number;
            createdAt: string;
            updatedAt: string;
            recognition: components["schemas"]["RecognitionTiming"] | null;
            fileUrl: string;
        };
        Extraction: {
            supplierId: components["schemas"]["Nullable<EntityId>"];
            calculatedTotal: number;
            supplierName: components["schemas"]["Nullable<string>"];
            supplierInn: components["schemas"]["Nullable<string>"];
            reference: components["schemas"]["Nullable<string>"];
            issuedAt: components["schemas"]["Nullable<string>"];
            total: components["schemas"]["Nullable<number>"];
            lines: components["schemas"]["ExtractedLine"][];
            evidence: components["schemas"]["Evidence"][];
            warnings: string[];
            recognition?: {
                startedAt: string;
                durationMs?: number;
                model?: string;
            };
        };
        ExtractedLine: {
            name: components["schemas"]["Nullable<string>"];
            sku: components["schemas"]["Nullable<string>"];
            barcode: components["schemas"]["Nullable<string>"];
            quantity: components["schemas"]["Nullable<number>"];
            unitCost: components["schemas"]["Nullable<number>"];
            vatRate: components["schemas"]["Nullable<number>"];
            productId: components["schemas"]["Nullable<EntityId>"];
        };
        Evidence: {
            field: string;
            lineIndex: components["schemas"]["Nullable<number>"];
            text: components["schemas"]["Nullable<string>"];
            box?: number[] | null;
        };
        RecognitionTiming: {
            startedAt: components["schemas"]["Nullable<string>"];
            elapsedSeconds: components["schemas"]["Nullable<number>"];
            estimatedRemainingSeconds: components["schemas"]["Nullable<number>"];
            queuePosition: components["schemas"]["Nullable<number>"];
            sampleCount: number;
            estimateExceeded: boolean;
        };
        MoyskladOverview: {
            migrationPending: boolean;
            connection: {
                accountId: string;
                name: string;
                checkedAt: string;
            } | null;
            jobs: components["schemas"]["MoyskladJob"][];
            limit?: {
                requests: number;
                windowSeconds: number;
            };
            labels?: components["schemas"]["Record<string,string>"];
        };
        MoyskladJob: {
            id: components["schemas"]["EntityId"];
            account_id: string;
            options: components["schemas"]["MoyskladOptions"];
            plan: {
                kind: string;
                total: number | null;
            }[];
            step: number;
            phase: string;
            /** @enum {string} */
            status: "running" | "ready" | "applying" | "paused" | "failed" | "completed" | "cancelled";
            error_message: components["schemas"]["Nullable<string>"];
            stage: string;
            created_at: string;
            updated_at: string;
            counts: components["schemas"]["MoyskladCount"][];
            photos: {
                total: number;
                pending: number;
                stored: number;
                applied: number;
                skipped: number;
                error: number;
                excluded?: number;
            };
        };
        MoyskladOptions: {
            products: boolean;
            partners: boolean;
            warehouses: boolean;
            organizations: boolean;
            purchases: boolean;
        };
        MoyskladCount: {
            kind: string;
            status: string;
            count: number;
            hydrated: number;
            warnings: number;
        };
        "Record<string,string>": {
            [key: string]: string;
        };
        MoyskladReport: {
            rows: components["schemas"]["MoyskladRow"][];
            total: number;
            offset: number;
            limit: number;
        };
        MoyskladRow: {
            kind: string;
            source_id: string;
            name: components["schemas"]["Nullable<string>"];
            status: string;
            internal_id: components["schemas"]["Nullable<EntityId>"];
            error_message: components["schemas"]["Nullable<string>"];
            warnings: string[];
            corrected: boolean;
            photos: {
                sourceId: string;
                status: string;
                imageId: components["schemas"]["Nullable<EntityId>"];
                error: components["schemas"]["Nullable<string>"];
            }[];
            source?: components["schemas"]["Record<string,unknown>"];
            corrected_source?: components["schemas"]["Nullable<Record<string,unknown>>"];
        };
        "Nullable<Record<string,unknown>>": components["schemas"]["Record<string,unknown>"] | null;
        MoyskladRowEditor: {
            editable: boolean;
            status: string;
            product: boolean;
            archivable: boolean;
            values: {
                name: string;
                article: string;
                code: string;
                externalCode: string;
                archived: boolean;
            };
            components: {
                index: number;
                kind: string;
                sourceId: components["schemas"]["Nullable<string>"];
                name: string;
                quantity: components["schemas"]["Nullable<number>"];
                internalId: components["schemas"]["Nullable<EntityId>"];
                archived: components["schemas"]["Nullable<boolean>"];
            }[];
            conflicts: {
                type: string;
                id: components["schemas"]["EntityId"];
                name: string;
                archived?: boolean;
            }[];
            sourceConflicts: {
                kind: string;
                source_id: string;
                name: string;
            }[];
        };
        "Nullable<boolean>": boolean | null;
        IdResult: {
            id: string;
        };
        ReferenceResult: {
            id: string;
            reference: string;
        };
        ImportResult: {
            id: string;
            status: string;
            duplicate?: boolean;
        };
        RejectedImportResult: {
            id: string;
            rejected: boolean;
        };
        OrderStatusResult: {
            id: string;
            status?: string;
        };
        OrderCreateResult: {
            id: string;
            reused?: boolean;
        };
        PartnerResolveResult: {
            id: string;
            name: string;
            created: boolean;
        };
        ImportDocumentResult: {
            id: string;
            reference: string;
            importId: string;
        };
        Error: {
            error: {
                /** @example INVALID_REQUEST */
                code: string;
                /** @example Описание ошибки */
                message: string;
            };
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "catalog_profile.list": {
        parameters: {
            query?: {
                includeArchived?: boolean;
            };
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Профили каталога */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CatalogProfilesResponse"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_profile.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Каталог магазина */
                    name: string;
                    /** @example replace-with-id */
                    warehouseId: string;
                    /** @example replace-with-id */
                    priceTypeId: string;
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_profile.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                profileId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Каталог магазина */
                    name?: string;
                    /** @example replace-with-id */
                    warehouseId?: string;
                    /** @example replace-with-id */
                    priceTypeId?: string;
                    /** @example false */
                    archived?: boolean;
                    /** @example 1 */
                    version: number;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_presentation.get": {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                scopeId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Публикация и порядок с наследованием */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CatalogPresentation"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_presentation.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                scopeId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example revision-from-get */
                    version: string;
                    publications?: {
                        /** @example replace-with-id */
                        productId: string;
                        /** @example false */
                        published: boolean | null;
                    }[];
                    productOrder?: string[] | null;
                    filterOrder?: string[] | null;
                    valueOrders?: {
                        [key: string]: string[] | null;
                    };
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "price_type.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @example Город */
                    city?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "price_type.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                priceTypeId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "price_type.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                priceTypeId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @example Город */
                    city?: string;
                    /** @example false */
                    archived: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "filter.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "filter.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                filterId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "filter.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                filterId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @example false */
                    archived: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "filter_value.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                filterId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "filter_value.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                filterId: string;
                valueId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "filter_value.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                filterId: string;
                valueId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @example false */
                    archived: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "product.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example SKU-001 */
                    sku?: string;
                    /** @example Товар */
                    name: string;
                    /** @example Категория */
                    category?: string;
                    /** @example Описание товара */
                    description?: string;
                    /** @example 1200 */
                    price?: number | null;
                    /** @example 800 */
                    cost?: number | null;
                    /** @example 5 */
                    minStock?: number | null;
                    /** @example Код-001 */
                    code?: string;
                    /** @example EXT-001 */
                    externalCode?: string;
                    /** @example шт */
                    uom?: string;
                    /** @example Россия */
                    country?: string;
                    /** @example 1.2 */
                    weightKg?: number | null;
                    /** @example 0.01 */
                    volumeM3?: number | null;
                    /** @example 20 */
                    vatRate?: number | null;
                    /** @example 1100 */
                    minPrice?: number | null;
                    /** @example replace-with-id */
                    preferredSupplierId?: string | null;
                    /** @example replace-with-id */
                    salesWorkflowId?: string | null;
                    /** @example replace-with-id */
                    parentProductId?: string | null;
                    barcodes?: string[];
                    packages?: {
                        /** @example Коробка */
                        name: string;
                        /** @example 10 */
                        quantity: number;
                        /** @example 4600000000001 */
                        barcode?: string;
                    }[];
                    analogIds?: string[];
                    customValues?: {
                        [key: string]: string | number | boolean | null;
                    };
                    tags?: string[];
                    /** @enum {string} */
                    kind?: "product" | "bundle" | "service" | "variant";
                    components?: {
                        /** @example replace-with-id */
                        productId: string;
                        /** @example 1 */
                        quantity: number;
                    }[];
                    filterValueIds?: string[];
                    prices?: {
                        /** @example replace-with-id */
                        priceTypeId: string;
                        /** @example 1200 */
                        price: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "product.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "product.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example SKU-001 */
                    sku?: string;
                    /** @example Товар */
                    name: string;
                    /** @example Категория */
                    category?: string;
                    /** @example Описание товара */
                    description?: string;
                    /** @example 1200 */
                    price?: number | null;
                    /** @example 800 */
                    cost?: number | null;
                    /** @example 5 */
                    minStock?: number | null;
                    /** @example Код-001 */
                    code?: string;
                    /** @example EXT-001 */
                    externalCode?: string;
                    /** @example шт */
                    uom?: string;
                    /** @example Россия */
                    country?: string;
                    /** @example 1.2 */
                    weightKg?: number | null;
                    /** @example 0.01 */
                    volumeM3?: number | null;
                    /** @example 20 */
                    vatRate?: number | null;
                    /** @example 1100 */
                    minPrice?: number | null;
                    /** @example replace-with-id */
                    preferredSupplierId?: string | null;
                    /** @example replace-with-id */
                    salesWorkflowId?: string | null;
                    /** @example replace-with-id */
                    parentProductId?: string | null;
                    barcodes?: string[];
                    packages?: {
                        /** @example Коробка */
                        name: string;
                        /** @example 10 */
                        quantity: number;
                        /** @example 4600000000001 */
                        barcode?: string;
                    }[];
                    analogIds?: string[];
                    customValues?: {
                        [key: string]: string | number | boolean | null;
                    };
                    tags?: string[];
                    /** @enum {string} */
                    kind?: "product" | "bundle" | "service" | "variant";
                    components?: {
                        /** @example replace-with-id */
                        productId: string;
                        /** @example 1 */
                        quantity: number;
                    }[];
                    filterValueIds?: string[];
                    prices?: {
                        /** @example replace-with-id */
                        priceTypeId: string;
                        /** @example 1200 */
                        price: number;
                    }[];
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "product_image.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                productId: string;
                imageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "partner.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @enum {string} */
                    type?: "Поставщик" | "Покупатель";
                    roles?: string[];
                    /** @example Контакт */
                    contact?: string;
                    /** @example +70000000000 */
                    phone?: string;
                    /** @example mail@example.test */
                    email?: string;
                    /** @example company */
                    legalKind?: string;
                    /** @example Полное название */
                    fullName?: string;
                    /** @example 1234567890 */
                    inn?: string;
                    /** @example 123456789 */
                    kpp?: string;
                    /** @example 1234567890123 */
                    ogrn?: string;
                    /** @example Юридический адрес */
                    legalAddress?: string;
                    /** @example Фактический адрес */
                    actualAddress?: string;
                    contacts?: {
                        /** @example Название */
                        name: string;
                        /** @example +70000000000 */
                        phone?: string;
                        /** @example mail@example.test */
                        email?: string;
                    }[];
                    bankAccounts?: {
                        /** @example Название */
                        bankName: string;
                        /** @example 40702810000000000000 */
                        accountNumber: string;
                        /** @example 044525000 */
                        bic?: string;
                        /** @example 30101810000000000000 */
                        correspondentAccount?: string;
                    }[];
                    groups?: string[];
                    /** @example Примечание */
                    note?: string;
                    /** @example replace-with-id */
                    priceTypeId?: string;
                    /** @example 5 */
                    discountPercent?: number;
                    customValues?: {
                        [key: string]: string | number | boolean | null;
                    };
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "partner.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                partnerId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "partner.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                partnerId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name?: string;
                    roles?: string[];
                    /** @example Контакт */
                    contact?: string;
                    /** @example +70000000000 */
                    phone?: string;
                    /** @example mail@example.test */
                    email?: string;
                    /** @example company */
                    legalKind?: string;
                    /** @example Полное название */
                    fullName?: string;
                    /** @example 1234567890 */
                    inn?: string;
                    /** @example 123456789 */
                    kpp?: string;
                    /** @example 1234567890123 */
                    ogrn?: string;
                    /** @example Юридический адрес */
                    legalAddress?: string;
                    /** @example Фактический адрес */
                    actualAddress?: string;
                    contacts?: Record<string, never>[];
                    bankAccounts?: Record<string, never>[];
                    groups?: string[];
                    /** @example Примечание */
                    note?: string;
                    /** @example replace-with-id */
                    priceTypeId?: string;
                    /** @example 5 */
                    discountPercent?: number;
                    /** @example false */
                    archived?: boolean;
                    customValues?: {
                        [key: string]: string | number | boolean | null;
                    };
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "partner.resolve": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @enum {string} */
                    type: "Поставщик" | "Покупатель";
                    /** @example +70000000000 */
                    phone?: string;
                    /** @example mail@example.test */
                    email?: string;
                } | unknown | unknown;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "organization.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @example company */
                    legalKind?: string;
                    /** @example Название */
                    fullName?: string;
                    /** @example 1234567890 */
                    inn?: string;
                    /** @example 123456789 */
                    kpp?: string;
                    /** @example 1234567890123 */
                    ogrn?: string;
                    /** @example Название */
                    legalAddress?: string;
                    /** @example Название */
                    actualAddress?: string;
                    bankAccounts?: Record<string, never>[];
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "organization.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "organization.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name?: string;
                    /** @example company */
                    legalKind?: string;
                    /** @example Название */
                    fullName?: string;
                    /** @example 1234567890 */
                    inn?: string;
                    /** @example 123456789 */
                    kpp?: string;
                    /** @example 1234567890123 */
                    ogrn?: string;
                    /** @example Название */
                    legalAddress?: string;
                    /** @example Название */
                    actualAddress?: string;
                    bankAccounts?: Record<string, never>[];
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "contract.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    partnerId: string;
                    /** @example replace-with-id */
                    organizationId: string;
                    /** @enum {string} */
                    kind: "purchase" | "sale" | "commission";
                    /** @example Д-001 */
                    number?: string;
                    /** @example 2026-09-29 */
                    signedAt?: string;
                    /** @example 10 */
                    commissionPercent?: number;
                    /** @example Примечание */
                    note?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "contract.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                contractId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "contract.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                contractId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    partnerId?: string;
                    /** @example replace-with-id */
                    organizationId?: string;
                    /** @enum {string} */
                    kind?: "purchase" | "sale" | "commission";
                    /** @example Д-001 */
                    number?: string;
                    /** @example 2026-09-29 */
                    signedAt?: string;
                    /** @example 10 */
                    commissionPercent?: number;
                    /** @example Примечание */
                    note?: string;
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "custom_field.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @example product
                     * @enum {string}
                     */
                    entityKind: "product" | "partner" | "purchase_order" | "supplier_invoice" | "receipt" | "supplier_return" | "internal_order";
                    /** @example Название */
                    name: string;
                    /**
                     * @description Постоянный код интеграции; при отсутствии создаётся автоматически
                     * @example material
                     */
                    code?: string;
                    /** @enum {string} */
                    valueType: "string" | "number" | "date" | "boolean" | "select";
                    options?: string[];
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "custom_field.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                fieldId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "custom_field.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                fieldId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name?: string;
                    options?: string[];
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    get_external_links: {
        parameters: {
            query: {
                source: string;
                entityType: "product" | "partner" | "order";
                externalId: string;
            };
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Данные компании */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalLink"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "external_link.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example shop */
                    source: string;
                    /** @enum {string} */
                    entityType: "product" | "partner" | "order";
                    /** @example external-123 */
                    externalId: string;
                    /** @example replace-with-id */
                    internalId: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "warehouse.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    /** @example Кратко */
                    short?: string;
                    /** @example Город */
                    city?: string;
                    /** @example Адрес */
                    address?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "warehouse.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                warehouseId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "warehouse.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                warehouseId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name?: string;
                    /** @example Кратко */
                    short?: string;
                    /** @example Город */
                    city?: string;
                    /** @example Адрес */
                    address?: string;
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "purchase.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    productId: string;
                    /** @example replace-with-id */
                    warehouseId: string;
                    /** @example Поставщик */
                    supplier: string;
                    /** @example 1 */
                    quantity: number;
                    /** @example 800 */
                    unitCost: number;
                    /** @example shop */
                    externalSource?: string;
                    /** @example external-123 */
                    externalId?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "purchase.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                purchaseId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    kind: "purchase_order" | "supplier_invoice" | "receipt" | "supplier_return" | "internal_order";
                    /** @example ЗП-0001 */
                    reference?: string | null;
                    /** @example replace-with-id */
                    supplierId?: string | null;
                    /** @example replace-with-id */
                    organizationId?: string | null;
                    /** @example replace-with-id */
                    contractId?: string | null;
                    /** @example replace-with-id */
                    warehouseId?: string | null;
                    /** @example replace-with-id */
                    sourceDocumentId?: string | null;
                    /**
                     * Format: date
                     * @example 2026-09-29
                     */
                    issuedAt?: string | null;
                    /**
                     * Format: date
                     * @example 2026-10-05
                     */
                    dueAt?: string | null;
                    /** @example Примечание */
                    note?: string;
                    customValues?: {
                        [key: string]: string | number | boolean | null;
                    };
                    lines: {
                        /** @example replace-with-id */
                        productId: string;
                        /** @example 1 */
                        quantity: number;
                        /** @example 800 */
                        unitCost: number;
                        /** @example 20 */
                        vatRate?: number | null;
                        /** @example 0 */
                        damaged?: number;
                        /** @example 0 */
                        missing?: number;
                        /** @example 1 */
                        sourceLineNo?: number | null;
                    }[];
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                documentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                documentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    kind?: "purchase_order" | "supplier_invoice" | "receipt" | "supplier_return" | "internal_order";
                    /** @example ЗП-0001 */
                    reference?: string | null;
                    /** @example replace-with-id */
                    supplierId?: string | null;
                    /** @example replace-with-id */
                    organizationId?: string | null;
                    /** @example replace-with-id */
                    contractId?: string | null;
                    /** @example replace-with-id */
                    warehouseId?: string | null;
                    /** @example replace-with-id */
                    sourceDocumentId?: string | null;
                    /**
                     * Format: date
                     * @example 2026-09-29
                     */
                    issuedAt?: string | null;
                    /**
                     * Format: date
                     * @example 2026-10-05
                     */
                    dueAt?: string | null;
                    /** @example Примечание */
                    note?: string;
                    customValues?: {
                        [key: string]: string | number | boolean | null;
                    };
                    lines?: {
                        /** @example replace-with-id */
                        productId: string;
                        /** @example 1 */
                        quantity: number;
                        /** @example 800 */
                        unitCost: number;
                        /** @example 20 */
                        vatRate?: number | null;
                        /** @example 0 */
                        damaged?: number;
                        /** @example 0 */
                        missing?: number;
                        /** @example 1 */
                        sourceLineNo?: number | null;
                    }[];
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement.status": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                documentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    status: "posted" | "closed" | "cancelled";
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_import.retry": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                importId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_import.reject": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                importId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_import.document": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                importId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    kind: "purchase_order" | "supplier_invoice" | "receipt" | "supplier_return" | "internal_order";
                    /** @example ЗП-0001 */
                    reference?: string | null;
                    /** @example replace-with-id */
                    supplierId?: string | null;
                    /** @example replace-with-id */
                    organizationId?: string | null;
                    /** @example replace-with-id */
                    contractId?: string | null;
                    /** @example replace-with-id */
                    warehouseId?: string | null;
                    /** @example replace-with-id */
                    sourceDocumentId?: string | null;
                    /**
                     * Format: date
                     * @example 2026-09-29
                     */
                    issuedAt?: string | null;
                    /**
                     * Format: date
                     * @example 2026-10-05
                     */
                    dueAt?: string | null;
                    /** @example Примечание */
                    note?: string;
                    customValues?: {
                        [key: string]: string | number | boolean | null;
                    };
                    lines: {
                        /** @example replace-with-id */
                        productId: string;
                        /** @example 1 */
                        quantity: number;
                        /** @example 800 */
                        unitCost: number;
                        /** @example 20 */
                        vatRate?: number | null;
                        /** @example 0 */
                        damaged?: number;
                        /** @example 0 */
                        missing?: number;
                        /** @example 1 */
                        sourceLineNo?: number | null;
                    }[];
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_payment.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    partnerId: string;
                    /** @example ПЛ-0001 */
                    reference?: string | null;
                    /** @enum {string} */
                    direction: "outgoing" | "incoming";
                    /** @enum {string} */
                    method: "bank" | "cash";
                    /** @example 800 */
                    amount: number;
                    /** @example replace-with-id */
                    organizationId?: string | null;
                    /** @example replace-with-id */
                    contractId?: string | null;
                    /** @example replace-with-id */
                    documentId?: string | null;
                    /**
                     * Format: date
                     * @example 2026-09-29
                     */
                    paidAt?: string | null;
                    /** @example Примечание */
                    note?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_payment.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                paymentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_payment.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                paymentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    partnerId?: string;
                    /** @example ПЛ-0001 */
                    reference?: string | null;
                    /** @enum {string} */
                    direction?: "outgoing" | "incoming";
                    /** @enum {string} */
                    method?: "bank" | "cash";
                    /** @example 800 */
                    amount?: number;
                    /** @example replace-with-id */
                    organizationId?: string | null;
                    /** @example replace-with-id */
                    contractId?: string | null;
                    /** @example replace-with-id */
                    documentId?: string | null;
                    /**
                     * Format: date
                     * @example 2026-09-29
                     */
                    paidAt?: string | null;
                    /** @example Примечание */
                    note?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_payment.status": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                paymentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    status: "posted" | "cancelled";
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "order.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Покупатель */
                    customer: string;
                    /** @example replace-with-id */
                    warehouseId: string;
                    /** @example Сайт */
                    channel: string;
                    items: {
                        /** @example replace-with-id */
                        productId: string;
                        /** @example 1 */
                        quantity: number;
                        /** @example 1200 */
                        price?: number;
                    }[];
                    /** @example replace-with-id */
                    priceTypeId?: string;
                    /** @example Заказ-123 */
                    externalNumber?: string;
                    /** @example Адрес доставки */
                    deliveryAddress?: string;
                    /** @example Примечание */
                    note?: string;
                    /** @example replace-with-id */
                    workflowId?: string | null;
                    /**
                     * @description none: без резерва; available: доступная часть; full: весь состав (по умолчанию для прежнего API).
                     * @enum {string}
                     */
                    reserveMode?: "none" | "available" | "full";
                    /**
                     * Format: date-time
                     * @example 2026-10-09T15:00:00Z
                     */
                    fulfillmentAt?: string | null;
                    /** @example Europe/Moscow */
                    fulfillmentTimeZone?: string | null;
                    /**
                     * Format: date-time
                     * @example 2026-09-29T12:00:00Z
                     */
                    orderedAt?: string;
                    /** @example shop */
                    externalSource?: string;
                    /** @example external-123 */
                    externalId?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "order.status": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    status: "picking" | "ready" | "shipped" | "cancelled";
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "order.reserve": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    mode: "none" | "available" | "full";
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "order.schedule": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * Format: date-time
                     * @example 2026-10-09T15:00:00Z
                     */
                    fulfillmentAt: string | null;
                    /** @example Europe/Moscow */
                    fulfillmentTimeZone?: string | null;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "order.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "sales_workflow.create": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    name: string;
                    definition: {
                        /** @example replace-with-id */
                        initialStatus: string;
                        statuses: {
                            /** @example replace-with-id */
                            id: string;
                            /** @example Название */
                            label: string;
                            /** @enum {string} */
                            category: "new" | "active" | "ready" | "completed" | "cancelled";
                            /** @enum {string} */
                            tone: "gray" | "blue" | "amber" | "green";
                        }[];
                        transitions: {
                            /** @example replace-with-id */
                            id: string;
                            /** @example Название */
                            label: string;
                            /** @example replace-with-id */
                            from: string;
                            /** @example replace-with-id */
                            to: string;
                            actions: ("reserve_full" | "reserve_available" | "release_reserve" | "deduct_stock")[];
                        }[];
                    };
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "sales_workflow.delete": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "sales_workflow.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example 1 */
                    version: number;
                    /** @example Название */
                    name?: string;
                    definition?: {
                        /** @example replace-with-id */
                        initialStatus: string;
                        statuses: {
                            /** @example replace-with-id */
                            id: string;
                            /** @example Название */
                            label: string;
                            /** @enum {string} */
                            category: "new" | "active" | "ready" | "completed" | "cancelled";
                            /** @enum {string} */
                            tone: "gray" | "blue" | "amber" | "green";
                        }[];
                        transitions: {
                            /** @example replace-with-id */
                            id: string;
                            /** @example Название */
                            label: string;
                            /** @example replace-with-id */
                            from: string;
                            /** @example replace-with-id */
                            to: string;
                            actions: ("reserve_full" | "reserve_available" | "release_reserve" | "deduct_stock")[];
                        }[];
                    };
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "order.transition": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example new_ready */
                    transitionId: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "stock.receipt": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    productId: string;
                    /** @example replace-with-id */
                    warehouseId: string;
                    /** @example Поставщик */
                    supplier: string;
                    /** @example 1 */
                    quantity: number;
                    /** @example 0 */
                    damaged?: number;
                    /** @example 0 */
                    missing?: number;
                    /** @example 800 */
                    unitCost: number;
                    /** @example replace-with-id */
                    purchaseId?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "stock.writeoff": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    productId: string;
                    /** @example replace-with-id */
                    warehouseId: string;
                    /** @example 1 */
                    quantity: number;
                    /** @example Причина */
                    reason: string;
                    /** @example replace-with-id */
                    selectedLotId?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "stock.transfer": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example replace-with-id */
                    productId: string;
                    /** @example replace-with-id */
                    warehouseId: string;
                    /** @example replace-with-id */
                    toWarehouseId: string;
                    /** @example 1 */
                    quantity: number;
                    /** @example replace-with-id */
                    selectedLotId?: string;
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "settings.update": {
        parameters: {
            query?: never;
            header: {
                /** @description Уникальный ключ команды (8–120 символов). Повтор с тем же ключом возвращает прежний ответ. */
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example Название */
                    companyName: string;
                    /** @example true */
                    lowStockAlerts: boolean;
                    /** @example true */
                    dailySummary: boolean;
                    /**
                     * @description Статус списания для новых заказов. Уже принятые заказы сохраняют своё правило.
                     * @enum {string}
                     */
                    orderStockDeductStatus?: "picking" | "ready" | "shipped";
                };
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            402: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_view.read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Личные столбцы; columns=null означает стандартный вид. Ключи полей сохраняются в заданном порядке; данные товаров не меняются. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CatalogViewPreference"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_view.save": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    columns: string[];
                };
            };
        };
        responses: {
            /** @description Личные столбцы; columns=null означает стандартный вид. Ключи полей сохраняются в заданном порядке; данные товаров не меняются. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CatalogViewPreference"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    get_bootstrap: {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Данные компании */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WarehouseState"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    get_catalog: {
        parameters: {
            query?: {
                /** @description Несколько ID через повторяющийся параметр */
                valueId?: string[];
                priceTypeId?: string;
            };
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Данные компании */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CatalogResponse"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    get_audit: {
        parameters: {
            query?: {
                limit?: number;
            };
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Данные компании */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuditResponse"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    get_images_imageId_: {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                imageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Оригинал файла */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "image/jpeg": string;
                    "image/png": string;
                    "image/webp": string;
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    get_procurement_imports: {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Данные компании */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImportsResponse"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "procurement_import.create": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-File-Name"?: string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "image/jpeg": string;
                "image/png": string;
                "image/webp": string;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            202: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            413: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            415: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    get_procurement_imports_importId_file: {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                importId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Оригинал файла */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "image/jpeg": string;
                    "image/png": string;
                    "image/webp": string;
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "product_image.create": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "image/jpeg": string;
                "image/png": string;
                "image/webp": string;
            };
        };
        responses: {
            /** @description Результат операции и актуальное состояние склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: components["schemas"]["IdResult"];
                        state: components["schemas"]["WarehouseState"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_profile.catalog": {
        parameters: {
            query?: {
                valueId?: string[];
                productId?: string[];
                q?: string;
                sort?: "default" | "name_asc" | "name_desc" | "price_asc" | "price_desc";
                limit?: number;
                offset?: number;
            };
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                profileId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Опубликованный каталог с ценами и остатками выбранного склада */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProfileCatalogResponse"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "catalog_profile.product": {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path: {
                profileId: string;
                productId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Опубликованная карточка профиля */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CatalogProduct"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "events.list": {
        parameters: {
            query?: {
                /** @description Курсор компании. Без курсора возвращается текущая позиция без старых событий. */
                after?: string;
                limit?: number;
            };
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description EventsPage; последние 20 000 событий компании, без бизнес-содержимого */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventsPage"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description EVENT_CURSOR_EXPIRED: загрузите снимок заново; EVENT_CURSOR_FUTURE: курсор опережает журнал */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "events.stream": {
        parameters: {
            query?: {
                /** @description Курсор компании. Без курсора возвращается текущая позиция без старых событий. */
                after?: string;
            };
            header?: {
                "Last-Event-ID"?: string;
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description SSE: id=cursor; data=WarehouseEvent. ready/heartbeat/error — управляющие сообщения. Необработанные события можно получить повторно после переподключения. */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/event-stream": string;
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description EVENT_CURSOR_EXPIRED: загрузите снимок заново; EVENT_CURSOR_FUTURE: курсор опережает журнал */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "events.socket": {
        parameters: {
            query?: {
                /** @description Курсор компании. Без курсора возвращается текущая позиция без старых событий. */
                after?: string;
            };
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description JSON WarehouseEvent и ready/heartbeat/error. Authorization в заголовке Upgrade; токен в URL не поддерживается. Клиентские сообщения закрывают соединение. */
            101: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description EVENT_CURSOR_EXPIRED: загрузите снимок заново; EVENT_CURSOR_FUTURE: курсор опережает журнал */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            426: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Квота API */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.overview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.connect": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example <MOYSKLAD_TOKEN> */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.disconnect": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.preview": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Каталог с оригиналами фотографий товаров, модификаций и комплектов (PNG/JPEG/WebP до 10 МБ); загрузка файлов после подтверждения apply
                     * @example true
                     */
                    products: boolean;
                    /**
                     * @description Поле совместимости старых клиентов. Для новых задач нормализуется в false: переносятся только поставщики товаров и контрагенты выбранных закупок; весь справочник не читается
                     * @example false
                     */
                    partners: boolean;
                    /** @example true */
                    warehouses: boolean;
                    /** @example true */
                    organizations: boolean;
                    /** @example false */
                    purchases: boolean;
                };
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.pause": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.resume": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.cancel": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.apply": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.retry": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Подключение без токена, задачи, этапы и счётчики импорта; photos: total,pending,stored,applied,skipped,error,excluded; фото исключённых строк учитываются отдельно от перенесённых */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.report": {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
                /** @description Только ошибки карточек (status=error или error_message) и фотографий. Информационные warnings не включают строку в этот режим. */
                problems?: boolean;
                source?: boolean;
            };
            header?: never;
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description rows,total,offset,limit; photos: sourceId,status,imageId,error; problems=true включает только ошибки строк/фото, без warning-only записей; фильтр применяется до пагинации, total соответствует ему; все строки ограничены компанией */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladReport"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.rowEditor": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                jobId: string;
                kind: string;
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description editable,status,product,archivable,values,components,conflicts,sourceConflicts; только текущая компания */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladRowEditor"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "moysklad.resolve": {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @example edit
                     * @enum {string}
                     */
                    action: "edit" | "exclude" | "include" | "recheck";
                    /** @example product */
                    kind?: string;
                    /** @example replace-with-id */
                    sourceId?: string;
                    changes?: {
                        /** @example Новое название */
                        name?: string;
                        /** @example SKU-2 */
                        article?: string;
                        /** @example CODE-2 */
                        code?: string;
                        /** @example EXT-2 */
                        externalCode?: string;
                        /** @example false */
                        archived?: boolean;
                        components?: {
                            /** @example 0 */
                            index: number;
                            /** @example 1 */
                            quantity: number;
                        }[];
                    };
                };
            };
        };
        responses: {
            /** @description Только ready/paused после scan; applied/skipped неизменны. Исходник сохраняется, МойСклад не изменяется. Перепроверка pending/error фоновая, apply требует нового подтверждения. Excluded зависимости блокируются. Completed отчёт сначала retry; исключения и исправления сохраняются в новой задаче. Ключ идемпотентности сохраняет решение и аудит. Ответ: подключение и задачи. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoyskladOverview"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "billing.storage_cleanup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Удаляет до 20 файлов без связей с карточками/документами/историей импорта, старше часа. Возвращает deletedFiles/freedBytes/batchLimit. Новые загрузки и используемые оригиналы сохраняются. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorageCleanupResult"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            503: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "billing.change_request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example start */
                    planId: string;
                };
            };
        };
        responses: {
            /** @description Сохранённая pending заявка; повтор того же плана не создаёт дубль. Новый planId заменяет прежний запрос. Тариф и списания не меняются до назначения оператором. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlanChangeResult"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            404: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            409: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "billing.cancel_request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Заявка отменена; текущий тариф сохраняется. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlanCancelResult"];
                };
            };
            /** @description Ошибка */
            400: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "billing.plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Тарифы: monthlyPrice (RUB), storageBytes, apiMonthly, apiPerMinute, warehouses и features. paymentAvailable=false: переход по заявке, без автоматической оплаты. Кеширование и WebSocket перечислены как будущие возможности. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlansResponse"];
                };
            };
        };
    };
    "billing.overview": {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Тариф/планы, storage (databaseBytes/fileBytes/reservedBytes/usedBytes/limitBytes/files), api (used/limit/perMinute/periodStart/resetsAt UTC), warehouses и pending changeRequest. Все Bearer-токены компании делят API-квоту; web-сессии не расходуют её. */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingOverview"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "company.schema": {
        parameters: {
            query?: never;
            header?: {
                /** @description Company ID из сгенерированной схемы. Несовпадение отклоняется до записи данных. */
                "X-Bistrysklad-Company"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Определения полей и revision; без бизнес-записей */
            200: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CompanySchema"];
                };
            };
            /** @description Ошибка */
            401: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Токен другой компании или запрет доступа */
            403: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка */
            429: {
                headers: {
                    /** @description Месячная квота */
                    "X-RateLimit-Limit"?: number;
                    /** @description Остаток месячной квоты */
                    "X-RateLimit-Remaining"?: number;
                    /** @description Ожидание после 429 в секундах */
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
}
