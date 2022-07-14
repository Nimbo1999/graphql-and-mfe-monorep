import { ApolloServer } from 'apollo-server';

import { typeDefs } from './schema/index';
import { resolvers } from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: 'bounded'
});

export default server;
