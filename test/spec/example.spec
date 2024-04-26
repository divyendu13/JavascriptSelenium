const { By, Builder, Browser } = require("selenium-webdriver");
const { assert } = require("assert");
const home = require("./../page/homePage.js");
const base = require("./../page/basePage.js");
const demo = require('./../page/demoPage.js')

describe("This is a sample Test", () => {
  

  beforeEach(async () => {});

  it("POM Test Check", async function () {
    var baseurl = "https://seleniumbase.io/demo_page";
    await home.enter_url(baseurl);
    let title = await driver.getTitle()
    console.log(title)
  });

  it("Assert the heading", async() =>{
    let heading = await demo.heading.getText()
    console.log(heading)
    await assert('Demo Page',heading)
  })

  after(async () => {
    home.closeBrowser()
  });
});
