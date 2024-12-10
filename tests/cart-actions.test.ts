import { test, expect } from '@playwright/test';
import { selectors } from '../src/selectors';
import { loginUser } from '../src/utils/login-helper';

test.describe('Cart Actions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await loginUser(page, 'standard_user', 'secret_sauce');
    });

    test('Add Item to Cart', async ({ page }) => {
        await page.click(selectors.addToCartButton);
        const cartBadge = await page.textContent(selectors.cartBadge);
        expect(cartBadge).toBe('1');
    });

    test('Add Multiple Items to Cart', async ({ page }) => {
        await page.click(selectors.addToCartButton);
        await page.waitForSelector(selectors.bikeLightAddToCartButton);
        await page.click(selectors.bikeLightAddToCartButton);
        const cartBadge = await page.textContent(selectors.cartBadge);
        expect(cartBadge).toBe('2');
    });

    test('Remove Item from Cart', async ({ page }) => {
        await page.click(selectors.addToCartButton);
        await page.click(selectors.cartButton);
        await page.click('[data-test="remove-sauce-labs-backpack"]');
        expect(await page.isVisible(selectors.cartBadge)).toBe(false);
    });
});
