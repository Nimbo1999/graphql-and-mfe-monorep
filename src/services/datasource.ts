import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    applicationName: 'graphql-backend-app',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'finance',
    entities: ["src/models/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    migrationsTableName: "finance_migrations",
    migrationsRun: true,
    synchronize: false,
    logger: 'advanced-console',
});

export default AppDataSource;
