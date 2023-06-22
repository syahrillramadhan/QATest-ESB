const Page = require ('./page');
    
class CheckoutPage extends Page{

    //page locators:

        get btnCheckOut () {
            return $('#checkout')
        }

        get txtFirstName () {
            return $('#first-name')
        }
        
        get txtLastName () {
            return $('#last-name')
        }

        get txtPostalCode () {
            return $('#postal-code')
        }

        get btnContinue () {
            return $('#continue')
        }

        get btnFinish () {
            return $('#finish')
        }

    //page actions:  
       //to check out product
        async clickBtnCheckOut () {
            return await this.btnCheckOut.click();
        }

        async isFillinDataforCheckout (firstName, lastName, postalCode) {
            await this.txtFirstName.setValue(firstName);
            await this.txtLastName.setValue(lastName);
            await this.txtPostalCode.setValue(postalCode);
            await this.btnContinue.click();
        } 

        async clickBtnOverviewOrder () {
            return await this.btnFinish.click();
        }
    }
module.exports = new CheckoutPage();