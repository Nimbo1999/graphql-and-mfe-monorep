import { ApolloServer } from 'apollo-server';

import { typeDefs } from './graphql/index';
import { resolvers } from './graphql/resolvers/metadata';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: 'bounded'
});

export default server;
