import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['tests/**/*.test.ts'],
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'html'],
            reportsDirectory: './coverage'
        }
    },
});
