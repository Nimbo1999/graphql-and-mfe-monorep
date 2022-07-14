import server from './server';

server.listen({ port: 8000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
