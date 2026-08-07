import { test, expect } from '@playwright/test';

test('Login and Download Assignment Report @sanity', async ({ page }) => {
  test.setTimeout(120000);

  // Login
  await page.goto('https://simui-dev.quantified.ai/login');

  await page.getByText('Log in with password').click();

  const emailField = page.getByRole('textbox', { name: 'Email address' });
  await emailField.waitFor({ state: 'visible' });
  // The login form can remount right after appearing (lazy-mounted component),
  // which clears an in-flight fill. Retry the fill+check together so a remount
  // just gets refilled instead of failing the assertion against a stale node.
  await expect(async () => {
    await emailField.fill('rizwana@clustox.com');
    await expect(emailField).toHaveValue('rizwana@clustox.com');
  }).toPass({ timeout: 10000 });

  await page.getByRole('textbox', { name: 'Password' }).fill('Yell0wyucc@');

  await page.getByRole('button', { name: 'Sign in' }).click();

  // Wait until application loads
  await page.waitForURL(/simui-dev\.quantified\.ai\/(?!login)/, { timeout: 30000 });
  await page.waitForLoadState('domcontentloaded');

  // Go to Dashboard - the team switcher lives here, not on the My Teams page.
  // The Dashboard link only appears inside the "My Teams" dropdown menu at this viewport width.
  await page.getByRole('button', { name: 'My Teams' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.waitForLoadState('domcontentloaded');

  // Search and select team
  const searchBox = page.getByRole('textbox', { name: 'Search teams' });

  await expect(searchBox).toBeVisible({ timeout: 30000 });

  await searchBox.click();
  await searchBox.pressSequentially('Commercial Market', { delay: 80 });

  await page.getByText('Commercial Market Development', { exact: true }).click();

  // Close the team dropdown
  await page.keyboard.press('Escape');

  // Assignment Type
  await page.getByRole('tab', { name: 'Certification' }).click();

  // Tabs
  await page.getByRole('tab', { name: 'Users' }).click();

  // Download report
  const downloadPromise = page.waitForEvent('download');

  const downloadButton = page.locator('button.download-btn');

  await expect(downloadButton).toBeVisible();

  await downloadButton.click();

  const download = await downloadPromise;

  console.log(`Downloaded: ${download.suggestedFilename()}`);

  // Open user menu
  await page.locator('qai-icon[kind="user-circle"]').click();

  // Logout
  await page.getByText('Logout', { exact: true }).click();
});
