import { describe, it, expect } from 'vitest';
import { multiply } from '../src';

describe('Multiply Function', () => {
    it('should multiply two numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});
