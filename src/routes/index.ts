import { Router } from 'express';
import { ControllerLogin } from '../controller/login';
import { ControllerUsuario } from '../controller/usuario';
import { ControllerEmpresa } from '../controller/empresa';
import { ControllerCliente } from '../controller/cliente';

const routes = Router();

routes.use(ControllerLogin);
// routes.use(ControllerUsuario);
routes.use(ControllerEmpresa);
routes.use(ControllerCliente);

export { routes };