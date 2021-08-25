# app-loja-game-reactjs-backend
## Instalar typeorm
  npm install --save typeorm
  ou
  yarn add typeorm

## Instalar reflect-metadata
  npm install --save reflect-metadata
  ou
  yarn add reflect-metadata

## Instalar mysql
  npm install --save mysql
  ou
  yarn add mysql

## Instalar express-async-errors
  npm install --save express-async-errors
  ou
  yarn add express-async-errors

## Instalar cors e @types/cors
  npm install --save cors
  npm install -D @types/cors
  ou
  yarn add cors
  yarn add -D @types/cors

## Instalar express e @types/express
  npm install --save express
  npm install -D @types/express
  ou
  yarn add express
  yarn add -D @types/express

## Instalar yup e @types/yup
  npm install --save yup
  npm install -D @types/yup
  ou
  yarn add yup
  yarn add -D @types/yup

## Instalar typescript
  npm install -D typescript
  ou
  yarn add -D typescript

## Instalar ts-node
  npm install -D ts-node
  ou
  yarn add -D ts-node

## Instalar ts-node-dev
  npm install -D ts-node-dev
  ou
  yarn add -D ts-node-dev

## Gera o tsconfig.json
  npx tsc --init ou yarn tsc --init 

## Cria alguma migration
  yarn typeorm migration:create -n create_funcionario
  yarn typeorm migration:create -n create_produto
  yarn typeorm migration:create -n create_usuario
  yarn typeorm migration:create -n create_favorito
  yarn typeorm migration:create -n create_log
  yarn typeorm migration:create -n create_compra
  yarn typeorm migration:create -n create_promocao
  yarn typeorm migration:create -n create_categoria

## Roda a migration
  yarn typeorm migration:run
## Reverte a migration
  yarn typeorm migration:revert

## Cria o projeto
  typeorm init --database mysql
  ou
  npx typeorm init --database mysql
  ou
  yarn typeorm init --database mysql

  typeorm init --name app-loja-game-reactjs-backend --database mysql
  ou
  npx typeorm init --name app-loja-game-reactjs-backend --database mysql
  ou
  yarn typeorm init --name app-loja-game-reactjs-backend --database mysql

## Links de teste
  http://localhost:3333/
  http://localhost:3333/users

## Iniciar a aplicacao
  npm start ou yarn start

## Comandos do mysql
  create database if not exists app_loja_game_reactjs_bd;
use app_loja_game_reactjs_bd;
select * from usuarios;
select * from categorias;

/* insert into usuarios (nome, perfil, email, senha, data_nascimento, sexo, celular,
cidade, estado, pais, resumo, url_personalizado, data_cadastro) values
("Juca", "juca123", "juca@email.com", "0123456789", "1988-10-19", "Masculino", 12995875411, "Rio de Janeiro",
"Rio de Janeiro", "Brasil", "Jogo qualquer jogo", "app_loja_game.com/laslkdklasdlkasjdla", "2021-08-18"),
('Jeca', 'jeca123', 'jeca@email.com', '9876543210', '1980-10-18', 'Masculino', '12995478411', 'São Paulo', 'São Paulo',
'Brasil', 'Jogo qualquer jogo', 'app_loja_game.com/ljalsjdalsdlajsldk', '2021-08-18'),
('Jaca', 'jaca123', 'jaca@email.com', '0147258369', '1982-10-01', 'Masculino', '12997778411', 'São Paulo', 'São Paulo',
'Brasil', 'Jogo qualquer jogo', 'app_loja_game.com/adsasdasdqweqweqwe', '2021-08-18'); */
/* drop table usuarios, categorias, migrations; */

/*INSERT INTO categorias (nome, data_cadastro) VALUES
  ("Ação", "2021-05-06"),
  ("Arcade", "2021-05-06"),
  ("Ritmo", "2021-05-06"),
  ("Beat 'em Up", "2021-05-06"),
  ("Jogo de Tiros em Primeira Pessoa", "2021-05-06"),
  ("Jogo de Tiros em Terceira Pessoa", "2021-05-06"),
  ("Luta", "2021-05-06"),
  ("Artes Marciais", "2021-05-06"),
  ("Plataformas", "2021-05-06"),
  ("Runners", "2021-05-06"),
  ("Roguelike de Ação", "2021-05-06"),
  ("Aventura", "2021-05-06"),
  ("Casual", "2021-05-06"),
  ("História Excelente", "2021-05-06"),
  ("Metroidvania", "2021-05-06"),
  ("Quebra-Cabeças", "2021-05-06"),
  ("Romance Visual", "2021-05-06"),
  ("RPG", "2021-05-06"),
  ("JRPG", "2021-05-06"),
  ("RPG de Aventura", "2021-05-06"),
  ("RPG de Ação", "2021-05-06"),
  ("RPG de Estratégia", "2021-05-06"),
  ("RPG de Grupos", "2021-05-06"),
  ("RPG por Turnos", "2021-05-06"),
  ("RPG Maker", "2021-05-06"),
  ("Roguelike", "2021-05-06"),
  ("Simulador", "2021-05-06"),
  ("Agricultura", "2021-05-06"),
  ("Crafting", "2021-05-06"),
  ("Construção", "2021-05-06"),
  ("Automação", "2021-05-06"),
  ("Dating", "2021-05-06"),
  ("Espaço", "2021-05-06"),
  ("Aviação", "2021-05-06"),
  ("Física", "2021-05-06"),
  ("Sandbox", "2021-05-06"),
  ("Gestão de Negócios", "2021-05-06"),
  ("Imersivo e Vida", "2021-05-06"),
  ("Estratégia", "2021-05-06"),
  ("Cartas", "2021-05-06"),
  ("Tabuleiro", "2021-05-06"),
  ("Criação de Cidades", "2021-05-06"),
  ("Colonização", "2021-05-06"),
  ("Defesa por Torres", "2021-05-06"),
  ("Estratégia em Tempo Real", "2021-05-06"),
  ("Estratégia por Turnos", "2021-05-06"),
  ("Grande Estratégia", "2021-05-06"),
  ("Estratégia 4X", "2021-05-06"),
  ("Estratégia Militar", "2021-05-06"),
  ("Esportes", "2021-05-06"),
  ("Corridas", "2021-05-06"),
  ("Esportes Individuais", "2021-05-06"),
  ("Esportes de Equipe", "2021-05-06"),
  ("Pesca", "2021-05-06"),
  ("Caça", "2021-05-06"),
  ("Simulador de Corridas", "2021-05-06"),
  ("Simulador de Esportes", "2021-05-06"),
  ("Todos os Esportes", "2021-05-06"),
  ("Anime", "2021-05-06"),
  ("Espaço", "2021-05-06"),
  ("Ficção Científica", "2021-05-06"),
  ("Cyberpunk", "2021-05-06"),
  ("Mistério", "2021-05-06"),
  ("Detetives", "2021-05-06"),
  ("Mundo Aberto", "2021-05-06"),
  ("Sobrevivência", "2021-05-06"),
  ("Terror", "2021-05-06"),
  ("Suspense", "2021-05-06"),
  ("Fantasia", "2021-05-06"),
  ("Hack and Slash", "2021-05-06"),
  ("MOBA", "2021-05-06"),
  ("Puzzle", "2021-05-06"),
  ("Point-and-Click", "2021-05-06");*/
