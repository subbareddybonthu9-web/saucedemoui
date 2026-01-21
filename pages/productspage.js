const { expect } = require("@playwright/test");
class ProductsPage {
  constructor(page) {
    this.page = page;
    this.firstproduct = page.locator('#item_1_title_link');
    this.secondproduct = page.locator('#item_0_title_link');
    this.addtocartbutton = page.locator('[data-test="add-to-cart"]');
    this.removebutton = page.locator('[data-test="remove"]'); // correct locator
  }

  async addfirstproduct() {
    await this.firstproduct.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');
    await this.addtocartbutton.click();
    await expect(this.removebutton).toHaveText('Remove'); // use removebutton
    await expect(this.page.locator('.shopping_cart_link')).toHaveText('1');
  }
  async addsecondproduct() {
    await this.secondproduct.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=0');
    await this.addtocartbutton.click();
    await expect(this.removebutton).toHaveText('Remove');
    await expect(this.page.locator('.shopping_cart_link')).toHaveText('2');
  }
}


module.exports = { ProductsPage };
