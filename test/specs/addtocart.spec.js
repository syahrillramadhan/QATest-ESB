const assert = require('assert');
const cartPage = require('../pageobjects/cart.page');
const detailProductPage = require('../pageobjects/detailProduct.page');

describe('Add to cart', () => {
  it('I can add to cart product', async () => {
    //add to cart produk sauce labs backpack
    await detailProductPage.AddtocartItemBackpack();
    await cartPage.clickIconCart();
    await expect(cartPage.cartItem).toHaveTextContaining('Sauce Labs Backpack');
  })
})