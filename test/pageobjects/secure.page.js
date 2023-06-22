

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]');
    }

    get alertRequired () {
        return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]');
    }

    get successAlertCheckout () {
        return $('.checkout_complete_container')
    }
}

module.exports = new SecurePage();
