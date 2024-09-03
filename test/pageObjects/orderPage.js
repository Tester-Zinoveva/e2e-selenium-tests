const BasePage = require('./basePage.js'); // Замените на .js
const { By } = require('selenium-webdriver');
const OrderPageLocators = require('../locators/orderPageLocators.js'); // Замените на .js



class OrderPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.locators = OrderPageLocators;
    }

    async addProgram() {
        await this.click(this.locators.addProgramButton);
        await extralightPremiumProgramButton.click();
    }

    async deleteProgram() {
        await this.click(this.locators.deleteButtonForSpecificItem);
    }

    async checkAllImmediatePaymentCheckboxes() {
        const checkboxes = await this.driver.findElements(this.locators.immediatePaymentCheckboxes);
        for (let checkbox of checkboxes) {
            const isChecked = await checkbox.isSelected();
            if (!isChecked) {
                await checkbox.click();
            }
        }
    }

    async checkAllInstallmentPaymentCheckboxes() {
        const checkboxes = await this.driver.findElements(this.locators.installmentPaymentCheckboxes);
        for (let checkbox of checkboxes) {
            const isChecked = await checkbox.isSelected();
            if (!isChecked) {
                await checkbox.click();
            }
        }
    }

    async fillAddress(address) {
        await this.type(this.locators.addressInput, address);
    }

    async selectDropdownOption(dropdownLocator, optionText) {
        await this.click(dropdownLocator);

        const option = await this.driver.findElement(By.xpath(`//div[contains(text(), '${optionText}')]`));
        await option.click();
    }

    async applyCoupon(couponCode) {
        await this.type(this.locators.couponInputField, couponCode);
        await this.click(this.locators.couponApplyButton);
    }

    async clickSubmitButton() {
        await this.click(this.locators.submitButton);
    }

    async fillEmail(email) {
        await this.type(this.locators.emailInput, email);
    }

    async fillName(name) {
        await this.type(this.locators.nameInput, name);
    }

    async selectFirstDropdownOption() {
        await this.click(this.locators.dropdownToggle);
    
        await this.waitForElementVisible(this.locators.firstDropdownOption);
    
        await this.click(this.locators.firstDropdownOption);
    }

    async selectFirstTimeDropdownOption() {
        await this.click(this.locators.dropdownTimeToggle);
    
        await this.waitForElementVisible(this.locators.firstTimeDropdownOption);
    
        await this.click(this.locators.firstTimeDropdownOption);
    }
    
    
}

module.exports = OrderPage;
