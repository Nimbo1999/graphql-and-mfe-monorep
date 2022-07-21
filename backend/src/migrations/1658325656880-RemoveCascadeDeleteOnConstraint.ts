import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveCascadeDeleteOnConstraint1658325656880 implements MigrationInterface {
    name = 'RemoveCascadeDeleteOnConstraint1658325656880';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "category" DROP CONSTRAINT "FK_72d0a778db6a2812243a3768232"`
        );
        await queryRunner.query(
            `ALTER TABLE "finance" DROP CONSTRAINT "FK_1819c50e1d5e721fd4f453126ab"`
        );
        await queryRunner.query(
            `ALTER TABLE "category" ADD CONSTRAINT "FK_72d0a778db6a2812243a3768232" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "finance" ADD CONSTRAINT "FK_1819c50e1d5e721fd4f453126ab" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
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
            `ALTER TABLE "finance" ADD CONSTRAINT "FK_1819c50e1d5e721fd4f453126ab" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "category" ADD CONSTRAINT "FK_72d0a778db6a2812243a3768232" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
    }
}
