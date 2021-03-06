import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuario1629297354942 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'usuarios',
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
          name: 'perfil',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'senha',
          type: 'varchar'
        },
        {
          name: 'sexo',
          type: 'varchar'
        },
        {
          name: 'data_nascimento',
          type: 'date'
        },
        {
          name: 'pais',
          type: 'varchar'
        },
        {
          name: 'cidade',
          type: 'varchar'
        },
        {
          name: 'estado',
          type: 'varchar'
        },
        {
          name: 'resumo',
          type: 'varchar'
        },
        {
          name: 'celular',
          type: 'varchar'
        },
        {
          name: 'url_personalizado',
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
    await queryRunner.dropTable('usuarios');
  }
}
