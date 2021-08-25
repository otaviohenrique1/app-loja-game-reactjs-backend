import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export default class Categorias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  data_cadastro: Date;
}
