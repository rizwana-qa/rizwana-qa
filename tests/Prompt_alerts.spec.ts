import { test, expect } from '@playwright/test';

test('Handle all JavaScript dialogs with delay', async ({ page }) => {

  await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');

  // Alert
  page.once('dialog', async dialog => {
    console.log(`Type: ${dialog.type()}`);
    console.log(`Message: ${dialog.message()}`);

    await page.waitForTimeout(3000); // Keep alert visible for 3 seconds

    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Show alert box' }).click();

  await page.waitForTimeout(1000);

  // Confirm
  page.once('dialog', async dialog => {
    console.log(`Type: ${dialog.type()}`);
    console.log(`Message: ${dialog.message()}`);

    await page.waitForTimeout(3000); // Keep confirm visible for 3 seconds

    await dialog.dismiss(); // or dialog.accept()
  });

  await page.getByRole('button', { name: 'Show confirm box' }).click();

  await page.waitForTimeout(1000);

  // Prompt
  page.once('dialog', async dialog => {
    console.log(`Type: ${dialog.type()}`);
    console.log(`Message: ${dialog.message()}`);

    await page.waitForTimeout(3000); // Keep prompt visible for 3 seconds

    await dialog.accept('Rizwana Zahoor');
    // or dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Show prompt box' }).click();

  await page.waitForTimeout(5000);
});