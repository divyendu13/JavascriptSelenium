const { By, Key } = require("selenium-webdriver");
const base = require("./basePage.js");

class homePage extends base {
  async enter_url(theURL) {
    await this.go_to_url(theURL);
  }

  
}

module.exports = new homePage();
