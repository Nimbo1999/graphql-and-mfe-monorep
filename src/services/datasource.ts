import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'finance',
    entities: ["./src/models/entities/*.js"],
    migrations: ["./src/migrations/*.js"],
    migrationsTableName: "finance_migrations"
});

export default AppDataSource;
