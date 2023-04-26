// const puppeteer = require("puppeteer-extra");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// puppeteer.use(StealthPlugin());

const puppeteer = require("puppeteer");
require("dotenv").config();

const username = process.env.EMAIL;
const password = process.env.PASSWORD;
const loginUrl = process.env.APP_LOGIN_URL;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Go to LeetCode.
  await page.goto(loginUrl);

  // Click the Google Login button.
  await page.waitForSelector("[data-icon=google-c]");
  await simulateClick(page, "[data-icon=google-c]");

  // Wait for navigation to new page.
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  // Fill out username
  await page.waitForSelector("[type=email]");
  await page.type("[type=email]", username);

  // Click the "Next" button
  const nextButton = await page.$x("//span[contains(text(), 'Next')]");
  await nextButton[0].click();

  // Fill out password
  await page.waitForXPath("//input[@type='password']", { visible: true });
  const passwordInput = await page.$x("//input[@type='password']");
  await passwordInput[0].type(password);

  // Click the login button and wait for navigation
  const nextButton2 = await page.$x("//span[contains(text(), 'Next')]");
  await nextButton2[0].click();
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  // Close the Chromium browser
  await browser.close();
})();

async function simulateClick(page, selector) {
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const event = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      element.dispatchEvent(event);
    }
  }, selector);
}
