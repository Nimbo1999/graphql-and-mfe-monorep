import 'reflect-metadata';
import { Migration } from 'typeorm';
import server from './server.js';
import datasource from './services/datasource.js';

function verifyMigrationsStatus(migrations: Migration[]) {
    if (migrations.length) {
        for(const mig of migrations) {
            console.log(`=====> Migration ${mig.name}, has been applied successfully! <=====`);
        }
    }
}

datasource
    .initialize()
    .then(connection =>
        connection.runMigrations().then(migrations => {
            verifyMigrationsStatus(migrations);
            console.log('🏧  Data source initialized successfully!!');
            server.listen({ port: 8000 }).then(({ url }) => {
                console.log(`🚀  Server ready at ${url}`);
            });
        }).catch(err => {
            console.error(err);
            console.error('Unabled to run migrations');
        })
    )
    .catch(err => {
        console.error('Error during Data source initialization', err);
    });
