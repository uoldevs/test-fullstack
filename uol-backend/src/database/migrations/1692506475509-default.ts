import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692506475509 implements MigrationInterface {
    name = 'Default1692506475509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "cpf" text NOT NULL, "phone" text NOT NULL, "status_id" integer NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "UQ_95ff138b88fdd8a7c9ebdb97a32" UNIQUE ("name"), CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_892a2061d6a04a7e2efe4c26d6f" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_892a2061d6a04a7e2efe4c26d6f"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
