import { test, expect } from '@playwright/test';
import { CartPage } from '../src/pages/cart.page';
import { LoginPage } from '../src/pages/login.page';
import {UserFactory} from "../src/pages/users/user.factory";

test('Add Items to Cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const user = UserFactory.getAdminUser();

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(user.username, user.password);

    await cartPage.addToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
    await cartPage.openCart();

    expect(await page.isVisible('.cart_item')).toBe(true);
});
