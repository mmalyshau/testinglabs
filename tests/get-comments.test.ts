import { describe, it, expect } from 'vitest';
import { HttpClient } from '../src/http-client';

describe('GET /comments with parameter', () => {
    const postId = 1;

    it('should return an array with more than 0 elements', async () => {
        const data = await HttpClient.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
    });

    it('should ensure all elements have postId equal to parameter', async () => {
        const data = await HttpClient.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        data.forEach((item: any) => {
            expect(item.postId).toBe(postId);
        });
    });
});
