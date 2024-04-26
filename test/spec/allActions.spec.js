const { By, Builder, until, Keys, select } = require("selenium-webdriver");
const assert = require("assert");
const path = require("path");

describe("Selenium demo page", () => {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });

  it("Check the heading of the page", async () => {
    await driver.get("https://seleniumbase.io/demo_page");
    await driver.manage().setTimeouts({ implicit: 500 });

    let title = await driver.getTitle();
    console.log(title);
    assert.equal("Web Testing Page", title);
  });

  it("Input some text", async () => {
    let input = await driver.findElement(By.id("myTextInput"));
    await input.sendKeys("Divyendu");
  });

  it("upload file", async () => {
    const txt = path.resolve("./test/readFile.txt");
    await driver.get("https://seleniumbase.io/w3schools/file_upload");
    let iframe = await driver.findElement(By.id("iframeResult"));
    await driver.switchTo().frame(iframe);
    let uploadbtn = await driver.findElement(By.id("myFile"));
    await driver.wait(until.elementIsVisible(uploadbtn), 2000);
    await uploadbtn.sendKeys(txt);
    await driver.manage().setTimeouts({ implicit: 500 });
    await driver.switchTo().defaultContent();
    await driver.switchTo().newWindow("tab");
    await driver.manage().setTimeouts({ implicit: 5000 });
  });

  it("drag and drop", async () => {
    let actions = await driver.actions({ async: true });
    await driver.get("https://seleniumbase.io/other/drag_and_drop");
    const source = await driver.findElement(By.id("drag1"));
    const target = await driver.findElement(By.css("#myForm #div1"));
    await actions.dragAndDrop(source, target).perform();
    await driver.manage().setTimeouts({ implicit: 5000 });
    let result = await driver.findElement(By.css("#myForm #div1 img"));
    await driver.wait(until.elementIsVisible(result), 5000);
    await driver.sleep(5000);
  });

  it("select some text", async () => {
    let actions = await driver.actions({ async: true });
    await driver.get('https://seleniumbase.io/demo_page')
    await driver.wait(until.elementIsEnabled(await driver.findElement(By.css("button[onclick='buttonFunction1()']"))),5000)
    let draggable = await driver.findElement(By.css('tr:nth-child(4) td:nth-child(1)'))
    let start = await draggable.getRect()
    let finish = await driver.findElement(By.css('tr:nth-child(4) td:nth-child(3)')).getRect()
    await actions.dragAndDrop(draggable,{x:100,y:20}).perform()
    await driver.sleep(5000);
  });

  after(async function () {
    await driver.quit();
  });
});
