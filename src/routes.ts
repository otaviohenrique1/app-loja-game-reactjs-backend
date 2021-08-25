import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";
import categoriaController from "./controllers/CategoriaController";

const routes = Router();

routes.get('/usuarios', usuarioController.index);
routes.get('/usuarios/:id', usuarioController.show);
routes.post('/usuarios/login', usuarioController.login);
routes.post('/usuarios', usuarioController.create);
routes.put('/usuarios/:id', usuarioController.update);
// routes.put('/usuarios/edicao/:id', usuarioController.update4);
routes.delete('/usuarios/:id', usuarioController.delete);

routes.get('/categorias', categoriaController.index);
routes.get('/categorias/:id', categoriaController.show);
routes.post('/categorias', categoriaController.create);
routes.put('/categorias/:id', categoriaController.update);
routes.delete('/categorias/:id', categoriaController.delete);

export default routes;