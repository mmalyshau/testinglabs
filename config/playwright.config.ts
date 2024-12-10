import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 60000,
    testDir: './tests',
    retries: 1,
    reporter: [
        ['html', { outputFolder: 'playwright-html-report', open: 'never' }],
        ['list'],
    ],
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        navigationTimeout: 30000,
        baseURL: 'https://www.saucedemo.com',
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'WebKit',
            use: { browserName: 'webkit' },
        },
    ],
});
