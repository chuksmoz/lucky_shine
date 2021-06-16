import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1623666483572 implements MigrationInterface {
    name = 'InitialMigration1623666483572'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `treasure` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `latitude` decimal(10,8) NOT NULL, `longitude` decimal(11,8) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `money_value` (`id` int NOT NULL AUTO_INCREMENT, `treasureId` int NOT NULL, `amt` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `age` int NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `money_value` ADD CONSTRAINT `FK_c25682ae348108354f8e23b378e` FOREIGN KEY (`treasureId`) REFERENCES `treasure`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `money_value` DROP FOREIGN KEY `FK_c25682ae348108354f8e23b378e`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP TABLE `money_value`", undefined);
        await queryRunner.query("DROP TABLE `treasure`", undefined);
    }

}
