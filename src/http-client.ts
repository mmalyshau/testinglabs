import fetch from 'node-fetch';

export class HttpClient {
    static async get(url: string): Promise<any> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`);
        }
        return response.json();
    }

    static async post(url: string, body: object): Promise<any> {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`POST request failed with status ${response.status}`);
        }
        return response.json();
    }
}
