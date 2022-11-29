test('Login demo test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.locator('text=Sign in').click();
    await page.locator('text=ACME').isVisible();
 })
 
 await page.waitForSelector('text=Sign in', { timeout: 4000 })
 await expect(page.locator('text=Sign in')).toHaveCount(1)
 
 test('Login demo test 2', async ({ page }) => {
 
    await page.goto('https://opensource-demo.orangehrmlive...)
    await page.pause()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    await page.locator('p:has-text("Paul Collings")').click()
    await page.locator('text=Logout').click()
    await page.close();
 })
 
 test.only('Login demo test 3', async ({ page }) =＞ {
    await page.goto('https://admin-demo.nopcommerce.com/lo...
    await page.locator('input[name="Email"]').click();
    await page.locator('input[name="Email"]').press('Control+a');
    await page.locator('input[name="Email"]').fill('admin@yourstore.com');
    await page.locator('input[name="Password"]').click();
    await page.locator('input[name="Password"]').press('Control+a');
    await page.locator('input[name="Password"]').fill('admin');
    await page.locator('text=Log in').click();
    await page.locator('#nopSideBarPusher i').click();
    await page.locator('text=Logout').click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/lo...
    await page.close();
 })