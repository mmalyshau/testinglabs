import { describe, it, expect } from 'vitest';
import { GraphQLClientWrapper } from '../src/graphql-client';

const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';

describe('GraphQL query for episodes with "Rick" in name', () => {
    it('should return episodes containing "Rick" in their name as a separate word or part of a word', async () => {
        const client = new GraphQLClientWrapper(GRAPHQL_URL);
        const query = `
            query {
                episodes(filter: { name: "Rick" }) {
                    results {
                        name
                    }
                }
            }
        `;
        const response = await client.query(query);

        expect(response.episodes.results.length).toBeGreaterThan(0);

        response.episodes.results.forEach((episode: { name: string }) => {
            expect(episode.name.toLowerCase()).toContain('rick');
        });
    });
});
