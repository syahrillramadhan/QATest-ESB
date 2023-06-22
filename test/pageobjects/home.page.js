const Page = require ('./page');
    
class HomePage extends Page{

    //page locators:

        get dashboardHeader() {
            return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]')
        }

    //page actions:  
       //to verify user is in dashboard page
        async isDashboardHeaderExist () {
          return await this.dashboardHeader.isDisplayed();  
        }

    }
module.exports = new HomePage();