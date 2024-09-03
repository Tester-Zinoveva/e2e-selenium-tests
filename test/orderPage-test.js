const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('./pageObjects/loginPage.js');
const orderPageAssertions = require('./assertions/orderPageAssertions.js');
const OrderPageLocators = require('./locators/orderPageLocators.js');
const OrderPage = require('./pageObjects/orderPage.js');
const chai = require('chai');
const { expect } = chai;



describe('Order Form End-to-End Tests', function () {
    let driver;
    let loginPage;
    let orderPage;
    loginPage = new LoginPage(driver);
    orderPage = new OrderPage(driver);

    this.timeout(60000);

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://letbefit.ru/');
        await loginPage.enterPhoneNumber('79878485432');
    });

    after(async function () {
        await driver.quit();
    });

    describe('Name and Email Validation', function() {

        it('should display error messages for empty fields', async function () {
            await orderPage.clickSubmitButton();
            await orderPageAssertions.assertEmailErrorDisplayed(driver);
            await orderPageAssertions.assertNameErrorDisplayed(driver);
        });

        it('should accept a valid email and name', async function () {
            await orderPage.fillEmail('validemail@example.com');
            await orderPage.fillName('John Doe');
            await orderPageAssertions.assertFieldValue(driver, OrderPageLocators.emailInput, 'validemail@example.com');
            await orderPageAssertions.assertFieldValue(driver, OrderPageLocators.nameInput, 'John Doe');
        });

    });

    describe('Programs Management', function() {

        it('Возможно добавлю проверку текста', async function () {
        });

        it('should add a program and verify its addition', async function () {
            await orderPage.addProgram();
            await orderPageAssertions.assertProgramAdded(driver);
        });

        it('should delete a program and verify its removal', async function () {
            await orderPage.deleteProgram();
            await orderPageAssertions.assertProgramRemoved();
        });

        it('should correctly set checkboxes for different programs', async function () {
            await orderPage.click(orderPage.locators.dropdownToggleButton);
            await orderPage.checkAllCheckboxes(orderPage.locators.trialDayOption);
            await orderPage.checkAllCheckboxes(orderPage.locators.twoWeeksOption);
            await orderPage.checkAllCheckboxes(orderPage.locators.fourWeeksOption);
        });

    });

    describe('Delivery Section', function() {

        it('should correctly check three checkboxes', async function () {
            await orderPage.checkAllCheckboxes(orderPage.locators.utensilsCheckbox);
            await orderPage.checkAllCheckboxes(orderPage.locators.noCourierCheckbox);
        });

        it('should accept a valid address', async function () {
            await orderPage.fillAddress('123 Main St, Apt 4B');
            await orderPageAssertions.assertFieldValue(driver, OrderPageLocators.addressInput, '123 Main St, Apt 4B');
        });

        it('should select the first available date from the delivery date dropdown', async function() {
            await orderPage.selectFirstDropdownOption();
        });

        it('should select the first available time from the delivery time dropdown', async function() {
            await orderPage.selectFirstTimeDropdownOption();
        });

    });

    describe('Payment Section', function() {
        it('should display the correct payment method text for card', async function () {
            await orderPageAssertions.assertTextDisplayed(driver, orderPage.locators.paymentMethodCardText, 'Картой');
        });

        it('should display the correct payment method text for cash', async function () {
            await orderPageAssertions.assertTextDisplayed(driver, orderPage.locators.paymentMethodCashText, 'Наличные');
        });

        // it('should apply a valid coupon and verify the success message', async function () {
        //     await orderPage.checkAllCheckboxes(driver, orderPage.couponCheckboxWithIcon)
        //     await orderPage.applyCoupon('VALIDCOUPON');
        //     await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.couponSuccessMessage, 'Купон применен');
        // });

        it('should display an error for an invalid coupon', async function () {
            await orderPage.applyCoupon('INVALIDCOUPON');
            await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.couponErrorMessage, 'Купон не подходит');
        });

        it('should check the correct texts for the summary section', async function () {
            await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.extralightText, 'Extralight');
            await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.discountText, 'Скидка');
            await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.bonusText, 'Будет начислено бонусов');
            await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.totalText, 'Итого');
            await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.consentText, 'Нажимая кнопку “Оформить” Вы даёте согласие на обработку персональных данных и соглашаетесь с публичной офертой');
        });

        it('', async function () {
            await orderPage.checkAllCheckboxes(OrderPageLocators.locators.addCommentCheckbox)
            await orderPageAssertions.assertTextDisplayed(driver, OrderPageLocators.commentText, 'Добавить комментарий к заказу')
        });
                //it('should click the "Оформить" button and verify the order submission', async function () {
          //  await orderPage.clickSubmitButton();
            // Проверка успешной отправки заказа, например, наличие сообщения о подтверждении
           // await orderPageAssertions.assertOrderConfirmationDisplayed(driver);
        //});
    });
});
