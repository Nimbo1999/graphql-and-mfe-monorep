import { DataSource } from 'typeorm';

import { Category, Finance, Metadata } from '../models/entities/index.js';

const AppDataSource = new DataSource({
    applicationName: 'graphql-backend-app',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'finance',
    entities: [Category, Finance, Metadata],
    migrations: ['src/migrations/*.js'],
    subscribers: ['src/subscribers/*.js'],
    migrationsTableName: 'finance_migrations',
    migrationsRun: true,
    synchronize: false,
    logger: 'advanced-console'
});

export default AppDataSource;
