import { test } from '@playwright/test';

test('Scroll and click', async ({ page }) => {

  // Load Playwright website
  await page.goto('https://playwright.dev/');

  // Click Get Started
  await page.getByRole('link', { name: 'Get started' }).click();

  // Wait for documentation page
  await page.waitForURL('**/docs/intro');

  // Scroll down
  await page.mouse.wheel(0, 800);

  // Scroll back up
  await page.mouse.wheel(0, -800);

  // Click the exact Introduction link
  await page.getByRole('link', {
    name: 'Introduction',
    exact: true
  }).click();

});