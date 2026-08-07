import { test, expect } from '@playwright/test';

test('View Portfolio @regression', async ({ page }) => {

    await page.goto('https://rizwanazahoor.vercel.app/#contact');

    // Name
    await page.getByRole('textbox', { name: 'Your name' })
        .fill('Rizwana Zahoor');

    // Email
    await page.getByRole('textbox', { name: 'Your email' })
        .fill('rizwana.airobitics@gmail.com');

    // Subject
    await page.getByRole('textbox', { name: 'Subject' })
        .fill('QA Assignment 7');

    // Message
    await page.getByRole('textbox', { name: 'Message' })
        .fill('Assignment 7 is completed. Please find attachment!');

    // Verify all entered values
    await expect(
        page.getByRole('textbox', { name: 'Your name' })
    ).toHaveValue('Rizwana Zahoor');

    await expect(
        page.getByRole('textbox', { name: 'Your email' })
    ).toHaveValue('rizwana.airobitics@gmail.com');

    await expect(
        page.getByRole('textbox', { name: 'Subject' })
    ).toHaveValue('QA Assignment 7');

    await expect(
        page.getByRole('textbox', { name: 'Message' })
    ).toHaveValue('Assignment 7 is completed. Please find attachment!');

    // Send Message
    await page.getByRole('button', { name: /Send Message/i }).click();

});