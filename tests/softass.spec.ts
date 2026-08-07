import { test, expect } from '@playwright/test';

test('Verify student details', async () => {

    const studentName = 'Rizwana';
    const age = 30;
    const city = 'Lahore';

    expect.soft(studentName).toBe('Rizwana');
    expect.soft(age).toBe(30);
    expect.soft(city).toBe('Islamabad'); // This will fail

    console.log('Remaining assertions still execute.');
});