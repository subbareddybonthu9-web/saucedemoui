class cartpage {
    constructor(page) {
        this.page = page;
        this.cartlink = page.locator('.shopping_cart_link');
        this.checkoutbutton = page.locator('[data-test="checkout"]');
        this.continueshoppingbutton = page.locator('[data-test="continue-shopping"]');
    }
    async continueshopping() {
        await this.cartlink.click();
        await this.continueshoppingbutton.click();
    }
    async checkout() {
        await this.cartlink.click();
        await this.checkoutbutton.click();
    }
}
module.exports = { cartpage };