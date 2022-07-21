import 'reflect-metadata';
import server from './server.js';
import datasource from './services/datasource.js';

datasource
    .initialize()
    .then(connection => {
        console.log({ isInitialized: connection.isInitialized });
        console.log('🏧  Data source initialized successfully!!');
        server.listen({ port: 8000 }).then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    })
    .catch(err => {
        console.error('Error during Data source initialization', err);
    });
