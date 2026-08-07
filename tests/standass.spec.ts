import { test, expect } from '@playwright/test';

test('Verify product price', async () => {

    const productPrice = 1200;

    expect(productPrice).toBeGreaterThan(1000);

    console.log('Product price is valid.');
});