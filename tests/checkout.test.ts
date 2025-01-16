import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { CartPage } from '../src/pages/cart.page';
import { CheckoutPage } from '../src/pages/checkout.page';
import {UserFactory} from "../src/pages/users/user.factory";

test('Checkout Process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const user = UserFactory.getAdminUser();

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(user.username, user.password);

    await cartPage.addToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
    await cartPage.openCart();

    await page.click('#checkout');
    await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
    await checkoutPage.completeCheckout();

    expect(await page.isVisible('.complete-header')).toBe(true);
});
