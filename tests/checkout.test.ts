import { test, expect } from '@playwright/test';
import { selectors } from '../src/selectors';
import { loginUser } from '../src/utils/login-helper';

test.describe('Checkout Process Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await loginUser(page, 'standard_user', 'secret_sauce');
    });

    test('Verify Checkout Process', async ({ page }) => {
        await page.locator(selectors.addToCartButton).click();
        await page.click(selectors.cartButton);
        await page.click(selectors.checkoutButton);
        await page.fill(selectors.firstNameInput, 'John');
        await page.fill(selectors.lastNameInput, 'Doe');
        await page.fill(selectors.postalCodeInput, '12345');
        await page.click(selectors.continueButton);

        const summaryTotal = await page.locator(selectors.summaryTotal);
        await summaryTotal.waitFor({ state: 'visible' });
        await expect(summaryTotal).toHaveText(/Total:\s+\$32.39/);

        await page.click(selectors.finishButton);
        const completeHeader = await page.locator(selectors.completeOrderHeader);
        await completeHeader.waitFor({ state: 'visible' });
        await expect(completeHeader).toHaveText('Thank you for your order!');
    });

    test('Checkout Multiple Items', async ({ page }) => {
        await page.locator(selectors.addToCartButton).click();
        await page.locator(selectors.bikeLightAddToCartButton).click();
        await page.click(selectors.cartButton);
        await page.click(selectors.checkoutButton);
        await page.fill(selectors.firstNameInput, 'John');
        await page.fill(selectors.lastNameInput, 'Doe');
        await page.fill(selectors.postalCodeInput, '12345');
        await page.click(selectors.continueButton);

        const summaryTotal = await page.locator(selectors.summaryTotal);
        await summaryTotal.waitFor({ state: 'visible' });
        await expect(summaryTotal).toHaveText(/Total:\s+\$43.18/);

        await page.click(selectors.finishButton);
        const completeHeader = await page.locator(selectors.completeOrderHeader);
        await completeHeader.waitFor({ state: 'visible' });
        await expect(completeHeader).toHaveText('Thank you for your order!');
    });
});
