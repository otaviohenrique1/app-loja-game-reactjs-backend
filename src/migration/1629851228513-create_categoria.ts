import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategoria1629851228513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'categorias',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'data_cadastro',
          type: 'date'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categorias');
  }
}
