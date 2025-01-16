import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { UserFactory } from '../src/users/user.factory';

test.describe('Login Tests', () => {
    test('Valid User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const user = UserFactory.getAdminUser();
        await page.goto('https://www.saucedemo.com/');
        await loginPage.login(user.username, user.password);

        const logoText = await page.textContent('.app_logo');
        expect(logoText).toBe('Swag Labs');
    });

    test('Invalid User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const user = UserFactory.getInvalidUser();
        await page.goto('https://www.saucedemo.com/');
        await loginPage.login(user.username, user.password);

        const errorText = await page.textContent('[data-test="error"]');
        expect(errorText).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});
