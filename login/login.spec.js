// @ts-check
const { test, expect } = require('@playwright/test');

test('Should Login ', async({page}) => {

    //load login page
    await page.goto('https://staging.indigoemr.com/login')
    
    //fill in the email address in the email adress field
    await page.locator('[id="email"]').fill('test-qa@inboxkitten.com')

    //fill in the password in the password input box
    await page.locator('[id="password"]').fill('qaV9ult!x')

    //click the login button
    await page.locator('[class="btn__secondary btn btn-secondary btn-block"]').click()
    await page.close();
    
});
test('Should book appointment', async({page}) => {
    //First load login page and login to access 'Book appointment feature
    await page.goto('https://staging.indigoemr.com/login')
        
    //fill in the email address in the email adress field
    await page.locator('[id="email"]').fill('test-qa@inboxkitten.com')
    
    //fill in the password in the password input box
    await page.locator('[id="password"]').fill('qaV9ult!x')
    
    //click the login button
    await page.locator('[class="btn__secondary btn btn-secondary btn-block"]').click()
    await page.locator('[class="btn__secondary btn btn-secondary btn-block"]').click();
    await page.locator('role=link[name="lions Front Desk Manage all patients registration, appointment bookings and information"]').click();
    await page.locator('text="Book"').nth(2).click();
    await page.locator('[id="mrn"]').fill('alt00107');
    await page.locator('[id="mrn"]').click();
    await page.locator('text=Select Option >> nth=0').nth(0).click();
    await page.locator('text="Select Option"').nth(1).click();
    
    
       await page.pause();
       
    })



    await page.goto('https://staging.indigoemr.com/login');
  await page.getByPlaceholder('johndoe@gmail.com').click();
  await page.getByPlaceholder('johndoe@gmail.com').fill('test-qa@inboxkitten.com');
  await page.getByPlaceholder('********').click();
  await page.getByPlaceholder('********').fill('qaV9ult!x');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/select-branch');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/modules');
  await page.getByRole('button', { name: 'Continue' }).click();
await expect(page).toHaveURL('https://staging.indigoemr.com/modules');
await page.getByRole('link', { name: 'lions Front Desk Manage all patients registration, appointment bookings and information' }).click();
await expect(page).toHaveURL('https://staging.indigoemr.com/frontdesk/dashboard');
await page.locator('.book-button').first().click();
await page.getByPlaceholder('Enter MRN').click();
await page.getByPlaceholder('Enter MRN').fill('alt00107');
await page.locator('li:has-text("alt00107")').click();
await page.locator('div:nth-child(7) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container').click();
await page.locator('#react-select-7-option-1').click();
await page.locator('div:nth-child(8) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container').click();
await page.locator('#react-select-8-option-2').click();
await page.getByRole('button', { name: 'Book Appointment' }).click();