import { Router } from 'express';
import { ControllerLogin } from '../controller/login';
import { ControllerEmpresa } from '../controller/empresa';
import { ControllerCliente } from '../controller/cliente';

const routes = Router();

routes.use(ControllerLogin);
routes.use(ControllerEmpresa);
routes.use(ControllerCliente);

export { routes };