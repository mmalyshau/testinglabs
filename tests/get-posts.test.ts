import { describe, it, expect } from 'vitest';
import { HttpClient } from '../src/http-client';

describe('GET /posts', () => {
    it('should return an array with more than 0 elements', async () => {
        const data = await HttpClient.get('https://jsonplaceholder.typicode.com/posts');
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
    });
});
