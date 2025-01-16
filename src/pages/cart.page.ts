import { Page } from '@playwright/test';
import {selectors} from "./config/selectors";

export class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart(itemSelector: string) {
        await this.page.click(itemSelector);
    }

    async openCart() {
        await this.page.click(selectors.cartButton);
    }
}
