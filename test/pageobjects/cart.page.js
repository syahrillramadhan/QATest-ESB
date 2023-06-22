const Page = require ('./page');
    
class cartPage extends Page{

    //page locators:

        get iconCart () {
            return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]/span[1]')
        }

        get cartItem () {
            return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/a[1]/div[1]');
        }



    //page actions:  
       //to verify user add to cart product
        async clickIconCart () {
            return await this.iconCart.click();
        }
    }
module.exports = new cartPage();