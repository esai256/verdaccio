const fs = require('fs');
const os = require('os');
const path = require('path');

const { green } = require('colorette');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function () {
  // eslint-disable-next-line no-console
  console.log(green('Setup Puppeteer'));
  const browser = await puppeteer.launch({
    isMobile: false,
    ignoreHTTPSErrors: true,
    // invert values for local testing
    devtools: false,
    headless: true,
    // slowMo: 6000,
    // invert values for local testing
    args: ['--no-sandbox'],
  });
  global.__BROWSER__ = browser;
  fs.mkdirSync(DIR, { recursive: true, force: true });
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
