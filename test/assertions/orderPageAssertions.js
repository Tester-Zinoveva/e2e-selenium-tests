require('chromedriver');
const assert = require('assert');
const { By } = require('selenium-webdriver');
const OrderPageLocators = require('../locators/orderPageLocators.js');

class OrderPageAssertions {

    async assertErrorMessageDisplayed(driver, errorLocator, expectedMessage) {
        const errorElement = await driver.findElement(errorLocator);
        const isErrorDisplayed = await errorElement.isDisplayed();
        const actualMessage = await errorElement.getText();
        
        expect(isErrorDisplayed).to.be.true;
        expect(actualMessage).to.include(expectedMessage);
    }

    async assertFieldValue(driver, fieldLocator, expectedValue) {
        const fieldElement = await driver.findElement(fieldLocator);
        const fieldValue = await fieldElement.getAttribute('value');
        
        expect(fieldValue).to.equal(expectedValue);
    }
    
    async assertEmailErrorDisplayed(driver) {
        await this.assertErrorMessageDisplayed(driver, OrderPageLocators.emailError, 'Введите корректный email');
    }

    async assertNameErrorDisplayed(driver) {
        await this.assertErrorMessageDisplayed(driver, OrderPageLocators.nameError, 'Поле обязательно к заполнению');
    }

    async assertProgramAdded(driver) {
        const isProgramDisplayed = await extralightPremiumElement.isDisplayed();

        expect(isProgramDisplayed).to.be.true;
    }

async assertProgramRemoved(driver) {
    const programElements = await driver.findElements(this.locators.extralightPremiumElement);
    
    // Ожидаем, что количество найденных элементов будет равно 0, что означает, что программа удалена
    expect(programElements.length).to.equal(0, "Program 'extralightPremium' should be removed but it is still present.");
}


    async assertTextDisplayed(driver, textLocator, expectedText) {
        const textElement = await driver.findElement(textLocator);
        const actualText = await textElement.getText();
        
        expect(actualText).to.include(expectedText);
    }

    async assertSuccessMessageDisplayed(driver, expectedMessage) {
        const successMessageElement = await driver.findElement(By.css('.success-message'));
        const actualMessage = await successMessageElement.getText();
        
        expect(actualMessage).to.include(expectedMessage);
    }
}

module.exports = new OrderPageAssertions();
