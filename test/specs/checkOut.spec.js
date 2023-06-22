const assert = require('assert');
const cartPage = require('../pageobjects/cart.page');
const detailProductPage = require('../pageobjects/detailProduct.page');
const CheckoutPage = require('../pageobjects/Checkout.page');
const SecurePage = require('../pageobjects/secure.page');


describe('Check out', () => {
    it('I can success check out product', async () => {
      //add to cart produk sauce labs backpack
      await detailProductPage.AddtocartItemBackpack();
      await cartPage.clickIconCart();
      await CheckoutPage.clickBtnCheckOut();
      await CheckoutPage.isFillinDataforCheckout('Syahril','Ramadhan', '1702');
      await CheckoutPage.clickBtnOverviewOrder();

      // verify success to create order
      await expect(SecurePage.successAlertCheckout).toHaveTextContaining('Thank you for your order!')
    })
  })