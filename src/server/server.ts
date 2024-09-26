import express from 'express';
import { routes } from '../routes/index';

const server = express();

server.use(routes);

server.get('/', (req, res) => {
    res.status(200).send('API ERP');
});

export { server };