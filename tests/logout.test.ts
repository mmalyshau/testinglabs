import { test, expect } from '@playwright/test';
import { selectors } from '../src/selectors';
import { loginUser } from '../src/utils/login-helper';

test.describe('Logout Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await loginUser(page, 'standard_user', 'secret_sauce');
    });

    test('Verify User is able to logout', async ({ page }) => {
        await page.click(selectors.menuButton);
        await page.click(selectors.logoutButton);
        expect(await page.isVisible(selectors.usernameInput)).toBe(true);
    });
});
