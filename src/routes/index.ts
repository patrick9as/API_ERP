import { Router } from 'express';
import { login } from './login';
import { empresa } from './empresa';
import { cliente } from './cliente';

const routes = Router();

routes.use(login);
routes.use(empresa);
routes.use(cliente);

export { routes };