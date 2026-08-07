import { test, expect } from '@playwright/test';

test('View Assignment', async ({ page }) => {
  test.setTimeout(120000);

  // Login
  await page.goto('https://simui-dev.quantified.ai/login');

  await page.getByText('Log in with password').click();

  await page.getByRole('textbox', { name: 'Email address' }).fill('rizwana@clustox.com');

  await page.getByRole('textbox', { name: 'Password' }).fill('Yell0wyucc@');

  await page.getByRole('button', { name: 'Sign in' }).click();

  // Wait until redirected to Team Manager
  await page.waitForURL('**/team_manager/**', {
    timeout: 60000
  });

  //await page.waitForLoadState('networkidle');

  // Open My Teams
  await page.getByRole('button', { name: 'My Teams' }).click();

  // Open Assignments
  await page.getByRole('link', { name: 'Assignments' }).click();

  await page.waitForLoadState('networkidle');

  // Open Assignment Status dropdown
await page.locator("//qai-searchable-select[1]//button[1]//span[2]//qai-icon[1]//*[name()='svg']").click();
await page.getByRole('button', { name: 'Deselect all' }).click();
//await page.getByText('Completed', { exact: true }).click();


// Select Completed
await page.locator('button')
  .filter({ hasText: 'Completed' })
  .first()
  .click();

await page.waitForLoadState('networkidle');

// Click the assignment title first
await page.getByText(
  'Novartis: KISQALI mBC Final Verbal Assessment Certification Q1 Class B'
).click();

await page.waitForTimeout(2000);

// Now click View Assignment
await page.getByRole('link', {
  name: 'View assignment for Novartis: KISQALI mBC Final Verbal Assessment Certification Q1 Class B 2026',
  exact: true
}).click();

await page.waitForLoadState('networkidle');

// View Previous Results
await page.getByRole('button', {
  name: /View Previous Results/
}).click();

await page.locator("//tr[td[contains(., 'Jul 21, 2026 • 9:33 PM')]]//button").click();

await page.waitForURL('**/results_guided**', {
  timeout: 30000
});


// Verify logout was successful
await page
  .locator("//button[@qaislot='user']//qai-icon[@kind='chevron-down']//*[name()='svg']")
  .click();

//await page.pause();

await page.getByRole('button', { name: 'Logout' }).click();

await page.waitForURL('**/login', {
  timeout: 60000
});

await expect(page).toHaveURL(/login/);

console.log('Logout successful');

await page.pause();
});