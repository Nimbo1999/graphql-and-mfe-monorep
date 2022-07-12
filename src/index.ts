import { ApolloServer } from 'apollo-server';

import { typeDefs } from './graphql/index';
import { resolvers } from './graphql/resolvers/book';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: 'bounded'
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
