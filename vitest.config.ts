import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['tests/*.test.ts'],
        exclude: ['tests/api_example.test.ts', 'tests/ui_example.test.ts'],
    },
});
