// loginPage.js
const BasePage = require('./basePage.js');
const { By, until } = require('selenium-webdriver');


class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.phoneInput = By.css('input.input.input-mask--phone'); 
        this.submitButton = By.css('.btn--md.btn--mark.btn--mobile.actionSubmitOrder');
    }

    async enterPhoneNumber(phoneNumber) {
        const phoneInputElement = await this.findElement(this.phoneInput);
        await phoneInputElement.sendKeys(phoneNumber);

        const submitButtonElement = await this.findElement(this.submitButton);
        await submitButtonElement.click();

        await this.driver.wait(until.urlContains('order'), 10000);
    }
}

module.exports = LoginPage;
