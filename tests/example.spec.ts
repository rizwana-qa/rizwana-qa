import { test, expect } from '@playwright/test';

test('has title @smoke', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link @smoke @regression', async ({ page }) => {
  await page.goto('https://rizwana-curriculum-vitae.vercel.app/');

  // Change mode buttom
  await page.locator("//button[@title='Switch to dark mode']//*[name()='svg']").click();

 
});