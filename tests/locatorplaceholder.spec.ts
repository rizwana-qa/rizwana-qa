import { test, expect } from '@playwright/test';

test('Login using getByPlaceholder', async ({ page }) => {

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  // Locate Username using placeholder
  await page.getByPlaceholder('Username').fill('Admin');

  // Locate Password using placeholder
  await page.getByPlaceholder('Password').fill('admin123');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(
    'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  );

});