const { By, Builder ,until, Keys, select } = require("selenium-webdriver");
const assert = require("assert");
 const path = require('path')

describe("Selenium demo page", () => {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });

  it("Check the heading of the page", async () => {
    await driver.get("https://seleniumbase.io/demo_page");
    await driver.manage().setTimeouts({implicit: 500});

    let title = await driver.getTitle();
    console.log(title);
    assert.equal("Web Testing Page", title);
  });

  it("Input some text", async () => {
    let input = await driver.findElement(By.id("myTextInput"))
    await input.sendKeys("Divyendu")
    
  });

  it("upload file", async ()=>{
    const txt = path.resolve("./test/readFile.txt")
    await driver.get("https://seleniumbase.io/w3schools/file_upload")
    let iframe = await driver.findElement(By.id('iframeResult'))
    await driver.switchTo().frame(iframe)
    let uploadbtn = await driver.findElement(By.id('myFile'))
    await driver.wait(until.elementIsVisible(uploadbtn), 2000);
    await uploadbtn.sendKeys(txt)
    await driver.manage().setTimeouts({implicit: 500});
    await driver.switchTo().defaultContent()
  });


  after(async function () {
    await driver.quit();
  });
});
