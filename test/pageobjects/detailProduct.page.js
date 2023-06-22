const Page = require ('./page');
const LoginPage = require ('../pageobjects/login.page');
    
class detailProductPage extends Page{

    //page locators:

        get isItemBackpack () {
            return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/div[1]');
        }

        get btnAddTocartItemBackpack() {
            return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]')
        }

    //page actions:  
       //to add to cart item sauce labs backpack
        async AddtocartItemBackpack () {
            await LoginPage.open()
            await LoginPage.login('standard_user','secret_sauce');
            await this.isItemBackpack.click();
            await this.btnAddTocartItemBackpack.click(); 
        }
    }
module.exports = new detailProductPage();