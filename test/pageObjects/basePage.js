const { until } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async findElement(locator) {
        return await this.driver.findElement(locator);
    }

    async click(locator) {
        const element = await this.driver.findElement(locator);
        await element.click();
    }

    async type(locator, text) {
        const element = await this.findElement(locator);
        await element.clear();
        await element.sendKeys(text);
    }

    async waitForElementVisible(locator, timeout = 10000) {
        const element = await this.driver.wait(until.elementLocated(locator), timeout);
        await this.driver.wait(until.elementIsVisible(element), timeout);
    }

    async checkAllCheckboxes(checkboxLocator) {
        const checkboxes = await this.driver.findElements(checkboxLocator);
        for (let checkbox of checkboxes) {
            const isChecked = await checkbox.isSelected();
            if (!isChecked) {
                await checkbox.click();
            }
        }
    }
    
}

module.exports = BasePage;
