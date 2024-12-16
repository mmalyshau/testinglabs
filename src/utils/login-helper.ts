import { Page } from '@playwright/test';
import { selectors } from '../selectors';

export async function loginUser(page: Page, username: string, password: string) {
    await page.fill(selectors.usernameInput, username);
    await page.fill(selectors.passwordInput, password);
    await page.click(selectors.loginButton);
}
