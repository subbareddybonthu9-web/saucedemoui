const { expect } = require('@playwright/test');
class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstnameInput = page.locator('[data-test="firstName"]');
        this.lastnameInput = page.locator('[data-test="lastName"]');
        this.postalcodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.backhomeButton = page.locator('[data-test="back-to-products"]');
    }
    async enterCheckoutInformation() {
        await this.firstnameInput.fill('John');
        await this.lastnameInput.fill('Doe');
        await this.postalcodeInput.fill('12345');
        await this.continueButton.click();
    }
    async finishCheckout() {
        await this.finishButton.click();
        await expect(this.backhomeButton).toBeVisible();
    }
}
module.exports = { CheckoutPage };