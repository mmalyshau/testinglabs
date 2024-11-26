import { describe, it, expect } from 'vitest';
import { HttpClient } from '../src/http-client';

describe('POST /posts', () => {
    it('should create a new resource and return it with correct fields', async () => {
        const body = { title: 'test title', body: 'test body', userId: 1 };
        const data = await HttpClient.post('https://jsonplaceholder.typicode.com/posts', body);

        expect(data).toMatchObject({
            id: 101,
            title: 'test title',
            body: 'test body',
            userId: 1,
        });
    });
});
