import { test } from '@playwright/test';

test('Capture screenshot', async ({ page }) => {

  // Open website
  await page.goto('https://playwright.dev/');

  // Capture screenshot
  await page.screenshot({
    path: 'full-page.png',
    fullPage: true
  });

});