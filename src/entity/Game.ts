import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  genero: string;

  @Column()
  desenvolvedor: string;

  @Column()
  distribuidora: string;

  @Column()
  data_de_lancamento: Date;

  @Column()
  classificacao: string;

  @Column()
  serie: string;

  @Column()
  sinopse: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  plataforma: string;

  @Column()
  idiomas_dublagem: string;

  @Column()
  idiomas_legendas: string;

  @Column()
  idiomas_interface: string;

  @Column()
  modo_de_jogo: string;

  @Column()
  game_capa: string;

  @Column()
  game_galeria: string;

  @Column()
  game_extras: string;

  @Column()
  data_cadastro: Date;
}
