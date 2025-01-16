import { Page } from '@playwright/test';
import {selectors} from "./config/selectors";

export class CheckoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill(selectors.firstNameInput, firstName);
        await this.page.fill(selectors.lastNameInput, lastName);
        await this.page.fill(selectors.postalCodeInput, postalCode);
    }

    async completeCheckout() {
        await this.page.click(selectors.continueButton);
        await this.page.click(selectors.finishButton);
    }
}
