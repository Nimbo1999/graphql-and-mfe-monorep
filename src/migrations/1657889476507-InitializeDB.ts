import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeDB1657889476507 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS metadata(
            id SERIAL,
            created_at TIMESTAMPTZ NOT NULL,
            last_modified_at TIMESTAMPTZ NOT NULL,
            PRIMARY KEY(id)
        )`);

        await queryRunner.query(`CREATE TABLE IF NOT EXISTS category(
            id SERIAL,
            name VARCHAR(50) UNIQUE NOT NULL,
            meta_id INT,
            PRIMARY KEY(id),
            CONSTRAINT fk_category_meta FOREIGN KEY(meta_id) REFERENCES metadata(id)
        )`);

        await queryRunner.query(`CREATE TABLE IF NOT EXISTS finance(
            id SERIAL,
            amount DECIMAL NOT NULL,
            description VARCHAR,
            meta_id INT,
            category_id INT,
            PRIMARY KEY(id),
            CONSTRAINT fk_finance_meta FOREIGN KEY(meta_id) REFERENCES metadata(id),
            CONSTRAINT fk_finance_category FOREIGN KEY(category_id) REFERENCES category(id)
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
