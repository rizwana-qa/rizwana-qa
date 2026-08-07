import { test } from '@playwright/test';

test('Absolute XPath example', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator(
    'xpath=/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input').fill('standard_user');

});