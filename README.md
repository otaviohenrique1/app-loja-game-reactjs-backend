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

  insert into usuarios (nome, perfil, email, senha, data_nascimento, sexo, celular,
  cidade, estado, pais, resumo, url_personalizado, data_cadastro)
  values ("Juca", "juca123", "juca@email.com", "0123456789", "1988-10-19", "Masculino", 129958754110,
  "Rio de Janeiro", "Rio de Janeiro", "Brasil", "Jogo qualquer jogo", "app_loja_game.com/laslkdklasdlkasjdla", "2021-08-18");

  /* drop database app_loja_game_reactjs_bd; */