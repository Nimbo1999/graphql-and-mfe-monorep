import server from './server';
import datasource from './services/datasource';

datasource.initialize()
    .then(() => {
        console.log('🏧  Data source initialized successfully!!');
        server.listen({ port: 8000 }).then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    })
    .catch(err => {
        console.error('Error during Data source initialization', err);
    });
