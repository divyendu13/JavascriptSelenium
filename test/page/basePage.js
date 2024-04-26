let webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: 10000 });

class BasePage {
  constructor() {
    global.driver = driver;
  }
  async go_to_url(theURL) {
    await driver.manage().window().maximize();
    await driver.get(theURL);
  }

  async closeBrowser() {
    await driver.quit();
  }
}

module.exports = BasePage;
