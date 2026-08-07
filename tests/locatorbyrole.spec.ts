import { test, expect } from '@playwright/test';

test('Login using getByRole', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  // Locate Username using role
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

  // Locate Password using role
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  // Locate Login button using role
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(
    'https://the-internet.herokuapp.com/secure'
  );

  // Verify success message
  await expect(
    page.getByText('You logged into a secure area!')
  ).toBeVisible();

});