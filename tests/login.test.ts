import { test, expect } from '@playwright/test';
import { selectors } from '../src/selectors';
import { loginUser } from '../src/utils/login-helper';

test.describe('Login Tests', () => {
    test('Valid User Login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await loginUser(page, 'standard_user', 'secret_sauce');
        const logoText = await page.textContent(selectors.appLogo);
        expect(logoText).toBe('Swag Labs');
    });

    test('Invalid User Login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await loginUser(page, 'invalid_user', 'wrong_password');
        const errorText = await page.textContent(selectors.errorMessage);
        expect(errorText).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});
