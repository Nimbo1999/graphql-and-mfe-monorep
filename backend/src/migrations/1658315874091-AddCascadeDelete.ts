import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCascadeDelete1658315874091 implements MigrationInterface {
    name = 'AddCascadeDelete1658315874091';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "fk_category_meta"`);
        await queryRunner.query(`ALTER TABLE "finance" DROP CONSTRAINT "fk_finance_meta"`);
        await queryRunner.query(
            `ALTER TABLE "category" ADD CONSTRAINT "FK_72d0a778db6a2812243a3768232" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE CASCADE`
        );
        await queryRunner.query(
            `ALTER TABLE "finance" ADD CONSTRAINT "FK_1819c50e1d5e721fd4f453126ab" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE CASCADE`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "finance" DROP CONSTRAINT "FK_1819c50e1d5e721fd4f453126ab"`
        );
        await queryRunner.query(
            `ALTER TABLE "category" DROP CONSTRAINT "FK_72d0a778db6a2812243a3768232"`
        );
        await queryRunner.query(
            `ALTER TABLE "finance" ADD CONSTRAINT "fk_finance_meta" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "category" ADD CONSTRAINT "fk_category_meta" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }
}
