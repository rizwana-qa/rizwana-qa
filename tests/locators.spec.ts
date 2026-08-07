import { test, expect } from '@playwright/test';

test('Login using getByLabel', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(
    'https://practicetestautomation.com/logged-in-successfully/'
  );
});