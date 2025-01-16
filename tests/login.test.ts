import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import {UserFactory} from "../src/pages/users/user.factory";

test('Valid User Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const user = UserFactory.getAdminUser();

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(user.username, user.password);

    expect(await page.textContent('.app_logo')).toBe('Swag Labs');
});

test('Invalid User Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const user = UserFactory.getInvalidUser();

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(user.username, user.password);

    expect(await page.isVisible('[data-test="error"]')).toBe(true);
});
