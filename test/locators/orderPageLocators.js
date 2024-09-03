const { By } = require('selenium-webdriver');
const dropdownBaseLocator = '.contract-config__el';

const OrderPageLocators = {
    nameInput: By.css('input[name="name"][aria-required="true"][aria-invalid="true"]'), 
    emailInput: By.css('input[name="email"]'), 
    dropdownToggleButton: By.css('.config-head.js-config-head'),
    addProgramButton: By.css('.action-buttonAddAnotherProgram'),
    extralightPremiumProgramButton: By.css('.program-register-row.action-add-order-program[data-program="extralightpremium"]'),
    deleteButtonForSpecificItem: By.css('.order-program-el[data-id="id-1725135016"] .btn-icon-row.btn-icon-row--left'),
    extralightPremiumElement: By.css('.contract-type.bg--navy .contract-type-title'),
    emailError: By.xpath('//span[contains(text(), "Email (обязательно)")]/following-sibling::div[@class="input-msg"]'), 
    nameError: By.xpath('//input[@name="name"]/following-sibling::div[@class="input-msg"]'),
    submitButton: By.css('div.btn--md.btn--mark.btn--mobile.action-send-order[data-test="orderFinish"]'),
    utensilsCheckbox: By.xpath("//div[contains(text(), 'Нужны приборы')]/preceding-sibling::div[@class='style-input-element']"),
    noCourierCheckbox: By.xpath("//div[contains(text(), 'Доставка без встречи с курьером')]/preceding-sibling::div[@class='style-input-element']"),
    noCourierPlaceInput: By.css('input.input[type="text"][name="noСourierPlace"][data-test="orderChecknoСourier"]'),
    addCommentCheckbox: By.xpath("//div[contains(text(), 'Добавить комментарий к заказу')]/preceding-sibling::div[@class='style-input-element']"),
    paymentMethodCardText: By.css('div.tab__el.js-tick[data-pay="ecard"][data-test="orderCard"]'),
    paymentMethodCashText: By.css('div.tab__el.js-tick.active[data-pay="cash"][data-test="orderCash"]'),
    addressInput: By.css('input active-address'),
    dropdownToggle: By.css('div.dropdown.action-block-date .dropdown-current'), //здесь надо немного поменять
    firstDropdownOption: By.css('div.dropdown.action-block-date .dropdown-menu__el:first-child'),
    dropdownTimeToggle: By.css('div.dropdown[data-test="orderTime"] .dropdown-current'),
    firstTimeDropdownOption: By.css('div.dropdown[data-test="orderTime"] .dropdown-menu__el:first-child'),
    couponCheckboxWithIcon: By.xpath('//label[@data-test="orderCheckCoupon"]//div[@class="style-input-element"]'),
    couponInputField: By.css('input.input.js-order-form-coupon[name="coupon"][data-test="orderCheckCoupon"]'),
    couponApplyButton: By.css('div.btn--md.btn--light.btn--mobile.actionSetCoupon.js-check-avaibled-coupon[data-test="orderCouponBtn"]'),
    couponErrorMessage: By.css('.input-row.input-row--validate.input-row--error .input-msg'),
    extralightText: By.css('div.contract-total[data-test="orderTotalItem"] .contract-total__name'),
    discountText: By.css('div.contract-total.constant-sale[data-test="orderTotalItemSale"] .contract-total__name'),
    bonusText: By.css('div.contract-total[data-test="orderTotalItemBonus"] .contract-total__name'),
    totalText: By.css('div.contract-total.constant-summary[data-test="orderTotalCost"] .contract-total__name'),
    commentText: By.css('div.input-row textarea.input[name="comment"]'),
    addCommentCheckbox: By.xpath('//div[@data-test="orderCheckComment"]'),




    // Локаторы для конкретных элементов выпадающего списка
    trialDayOption: By.css(`${dropdownBaseLocator}[data-item="6days"]`),  // Пробный день
    twoWeeksOption: By.css(`${dropdownBaseLocator}[data-item="2week"]`),  // 2 недели
    fourWeeksOption: By.css(`${dropdownBaseLocator}[data-item="4week"]`), // 4 недели
    twoMonthsOption: By.css(`${dropdownBaseLocator}[data-item="8week"]`), // 2 месяца
    threeMonthsOption: By.css(`${dropdownBaseLocator}[data-item="12week"]`) // 3 месяца
    
};

module.exports = OrderPageLocators;


