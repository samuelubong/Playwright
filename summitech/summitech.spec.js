// @ts-check
const {test, expect} = require('@playwright/test');
test('User shoul be able to Login', async ({ page }) => {
  await page.goto('https://staging.indigoemr.com/login');
  await page.getByPlaceholder('johndoe@gmail.com').click();
  await page.getByPlaceholder('johndoe@gmail.com').fill('test-qa@inboxkitten.com');
  await page.getByPlaceholder('********').click();
  await page.getByPlaceholder('********').fill('qaV9ult!x');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/select-branch');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/modules');
  await page.close();
});

test('User should be able to book appointment', async ({ page }) =>{
  await page.goto('https://staging.indigoemr.com/login');
  await page.getByPlaceholder('johndoe@gmail.com').click();
  await page.getByPlaceholder('johndoe@gmail.com').fill('test-qa@inboxkitten.com');
  await page.getByPlaceholder('********').click();
  await page.getByPlaceholder('********').fill('qaV9ult!x');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/select-branch');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/modules');
  await page.locator('role=link[name="lions Front Desk Manage all patients registration, appointment bookings and information"]').click();
await page.locator('.book-button').first().click();
await page.getByPlaceholder('Enter MRN').click();
await page.getByPlaceholder('Enter MRN').fill('alt00107');
await page.locator('li:has-text("alt00107")').click();
await page.locator('div:nth-child(7) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container').click();
await page.locator('#react-select-7-option-1').click();
await page.locator('div:nth-child(8) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container').click();
await page.locator('#react-select-8-option-2').click();
await page.getByRole('button', { name: 'Book Appointment' }).click();
await page.close();
});

  test('User should be able to logout', async ({ page }) => {
    await page.goto('https://staging.indigoemr.com/login');
    await page.getByPlaceholder('johndoe@gmail.com').click();
    await page.getByPlaceholder('johndoe@gmail.com').fill('test-qa@inboxkitten.com');
    await page.getByPlaceholder('********').click();
    await page.getByPlaceholder('********').fill('qaV9ult!x');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'lions Front Desk Manage all patients registration, appointment bookings and information' }).click();
    await expect(page).toHaveURL('https://staging.indigoemr.com/frontdesk/dashboard');
    await page.getByRole('button', { name: 'Indigo User Avatar John Doe ' }).click();
    await page.locator('[class="navigation-otherlinks-right pb-3"]').click();
    await page.close();
  
    
  });