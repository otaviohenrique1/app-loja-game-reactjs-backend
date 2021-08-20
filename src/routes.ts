import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";

const routes = Router();

routes.get('/usuarios', usuarioController.index);
routes.get('/usuarios/:id', usuarioController.show);
routes.post('/usuarios/login', usuarioController.login);
routes.post('/usuarios', usuarioController.create);
routes.patch('/usuarios/:id', usuarioController.update);
routes.delete('/usuarios/:id', usuarioController.delete);

export default routes;