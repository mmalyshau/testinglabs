import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { CartPage } from '../src/pages/cart.page';
import { CheckoutPage } from '../src/pages/checkout.page';
import { UserFactory } from '../src/users/user.factory';

test.describe('Checkout Process Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const user = UserFactory.getAdminUser();
        await page.goto('https://www.saucedemo.com/');
        await loginPage.login(user.username, user.password);
    });

    test('Verify Checkout Process', async ({ page }) => {
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await cartPage.addToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
        await cartPage.openCart();
        await page.click('#checkout');
        await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
        await checkoutPage.completeCheckout();

        const completeHeader = await page.locator('.complete-header');
        await completeHeader.waitFor({ state: 'visible' });
        expect(await completeHeader.textContent()).toBe('Thank you for your order!');
    });

    test('Checkout Multiple Items', async ({ page }) => {
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await cartPage.addToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
        await cartPage.addToCart('[data-test="add-to-cart-sauce-labs-bike-light"]');
        await cartPage.openCart();
        await page.click('#checkout');
        await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
        await checkoutPage.completeCheckout();

        const completeHeader = await page.locator('.complete-header');
        await completeHeader.waitFor({ state: 'visible' });
        expect(await completeHeader.textContent()).toBe('Thank you for your order!');
    });
});
