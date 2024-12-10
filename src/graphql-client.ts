import { GraphQLClient, gql } from 'graphql-request';

export class GraphQLClientWrapper {
    private client: GraphQLClient;

    constructor(endpoint: string) {
        this.client = new GraphQLClient(endpoint);
    }

    async query(query: string): Promise<any> {
        return this.client.request(query);
    }
}
