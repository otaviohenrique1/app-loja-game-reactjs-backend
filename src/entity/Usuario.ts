import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export default class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  perfil: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  sexo: string;

  @Column()
  data_nascimento: Date;
  
  @Column()
  pais: string;
  
  @Column()
  cidade: string;
  
  @Column()
  estado: string;

  @Column()
  resumo: string;

  @Column()
  celular: string;

  @Column()
  url_personalizado: string;

  @Column()
  data_cadastro: Date;
}
