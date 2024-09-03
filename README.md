
# README

## Проект: Автоматизация тестирования формы заказа

### Описание
Данный проект реализует автоматизированное тестирование веб-интерфейса формы заказа на сайте [letbefit.ru](https://letbefit.ru/). Используя Selenium и фреймворк для тестирования Mocha, проект проверяет различные аспекты пользовательского интерфейса, включая валидацию полей, управление программами, раздел доставки и методы оплаты.

### Структура проекта
- **pageObjects/** - содержит классы страниц, которые инкапсулируют логику взаимодействия с элементами страниц.
- **locators/** - содержит файлы с локаторами для элементов страниц.
- **assertions/** - содержит функции для проверок, которые выполняются в тестах.
- **tests/** - содержит файлы с тестами.

### Что тестируется

1. **Валидация полей имени и email:** Проверяется правильность обработки пустых полей, а также возможность ввода корректных данных.
2. **Управление программами:** Тестируется добавление и удаление программ, проверка состояния чекбоксов.
3. **Раздел доставки:** Проверяется правильность ввода адреса, выбор даты и времени доставки, работа чекбоксов в разделе доставки.
4. **Раздел оплаты:** Тестируются отображение корректных текстов для выбранных методов оплаты, применение купонов и проверка итоговых данных заказа.

### Логика тестов

- **Подготовка окружения:** Перед выполнением тестов создается экземпляр драйвера браузера, открывается целевая страница и выполняется авторизация пользователя по номеру телефона.
- **Тестирование валидации полей:** Для пустых полей имени и email проверяется наличие соответствующих сообщений об ошибках, затем вводятся корректные данные и проверяется их сохранение.
- **Тестирование управления программами:** Выполняются проверки на добавление и удаление программ, а также проверяется состояние чекбоксов для различных вариантов программ.
- **Тестирование раздела доставки:** Проверяются три основных чекбокса, возможность ввода корректного адреса, а также выбор первой доступной даты и времени доставки.
- **Тестирование раздела оплаты:** Проверяются отображаемые тексты для разных методов оплаты, работа купонов (валидных и невалидных) и проверка итоговых данных и условий заказа.

### Кейсы и пограничные случаи

1. **Валидация полей:**
   - Проверка сообщений об ошибках при отправке формы с пустыми полями.
   - Ввод валидного имени и email и проверка их правильного отображения.

2. **Управление программами:**
   - Добавление программы и проверка ее наличия.
   - Удаление программы и проверка ее отсутствия.
   - Проверка правильного состояния чекбоксов для различных программ.

3. **Раздел доставки:**
   - Проверка работы чекбоксов "Посуда" и "Без курьера".
   - Ввод валидного адреса и проверка его отображения.
   - Выбор первой доступной даты и времени доставки из выпадающего списка.

4. **Раздел оплаты:**
   - Проверка отображаемого текста для методов оплаты "Картой" и "Наличные".
   - Проверка сообщения об ошибке при вводе невалидного купона.
   - Проверка правильного отображения текстов в итоговом разделе заказа.

### Запуск тестов
Для запуска тестов необходимо:
1. Установить все необходимые зависимости с помощью команды `npm install`.
2. Запустить тесты командой `npm test`.

### Что можно улучшить
1. Вынести проверяемый текст в отдельный файл
2. Добавить gitignor
3. Можно вынести тестовые данные (например, email, имя, адрес) в отдельный конфигурационный файл или объект
4. Добавить больше негативных сценариев (например, ввод невалидных данных в поля, использование невалидных дат)
5. Добавить тестов для различных браузеров
6. Можно вынести тестовые данные (например, email, имя, адрес) в отдельный конфигурационный файл или объект

