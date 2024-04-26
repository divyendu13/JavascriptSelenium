const { By, Builder, Browser } = require("selenium-webdriver");

class demoPage{
    get heading() {return $('#myTable h1')}

}

module.exports = new demoPage()