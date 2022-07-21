import { DataSource } from 'typeorm';

import { Category, Finance, Metadata } from '../models/entities/index.js';

const { FINANCE_DB_HOST = 'localhost' } = process.env;
const basefolder = FINANCE_DB_HOST === 'localhost' ? 'src' : 'dist';

const AppDataSource = new DataSource({
    applicationName: 'graphql-backend-app',
    type: 'postgres',
    host: FINANCE_DB_HOST,
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'finance',
    entities: [Category, Finance, Metadata],
    migrations: [`${basefolder}/migrations/*.js`],
    subscribers: [`${basefolder}/subscribers/*.js`],
    migrationsTableName: 'finance_migrations',
    migrationsRun: true,
    synchronize: false,
    logger: 'advanced-console'
});

export default AppDataSource;
