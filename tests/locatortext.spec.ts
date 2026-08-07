import { test, expect } from '@playwright/test';

test('Practice getByText with SauceDemo', async ({ page }) => {

  // Open website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify inventory page
  await expect(page).toHaveURL(/inventory/);

  // Practice getByText()
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  // Click product using visible text
  await page.getByText('Sauce Labs Backpack').click();

  // Verify product details
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

});