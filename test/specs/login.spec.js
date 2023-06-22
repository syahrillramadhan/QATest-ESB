const assert = require('assert');
const LoginPage = require ('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page')

describe('Login', () => {

    it('Open Browser', async () => {
      await LoginPage.open()
      const title = await browser.getTitle();
      await assert.strictEqual(title , 'Swag Labs');
    });

    it('I failed to login without input credential' , async () => {
      await LoginPage.btnSubmit.click();
      await expect(SecurePage.alertRequired).toHaveTextContaining('Epic sadface: Username is required')
      await LoginPage.closeAlertbtn.click();
    });
    
    it('I failed to login with invalid credential' , async () => {
      await LoginPage.login('standard_user123','secret_sauce123');
      await expect(SecurePage.flashAlert).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
      await LoginPage.closeAlertbtn.click();
    });

    it('I can success login' , async () => {
      await LoginPage.login('standard_user','secret_sauce');
      await assert.equal(true ,await HomePage.isDashboardHeaderExist());
    })
});

