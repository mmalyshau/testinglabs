import { Page } from '@playwright/test';
import {selectors} from "./config/selectors";

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.fill(selectors.usernameInput, username);
        await this.page.fill(selectors.passwordInput, password);
        await this.page.click(selectors.loginButton);
    }
}
