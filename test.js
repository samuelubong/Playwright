const playwright = require('playwright');

(async () => {

    //code execution happens within in here

    const browser = await playwright ['chromium'].launch({
        headless: false
    });

    //context
   const context = await browser.newContext();

   //page
   const page = await context.newPage();
    //Testing Login feature
   //navigate to the pages
   await page.goto('https://staging.indigoemr.com');
   await page.locator('[id="email"]').fill('test-qa@inboxkitten.com');
    await page.locator('[id="password"]').fill('qaV9ult!x');
    await page.locator('[class="btn__secondary btn btn-secondary btn-block"]').click();
    await page.locator('[class="btn__secondary btn btn-secondary btn-block"]').click();
    await page.locator('role=link[name="lions Front Desk Manage all patients registration, appointment bookings and information"]').click();

    //Testing Book appointment feature
   await page.locator('text="Book"').nth(2).click();
   await page.locator('[id="mrn"]').fill('alt00107');
   await page.locator('[id="react-select-6-input"]').selectOption[0];
   
    await page.pause();
   

   //await browser.close();

})();