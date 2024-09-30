import express from 'express';
import { routes } from '../routes/index';
var cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);


server.get('/', (req, res) => {
    res.status(200).send('API ERP');
});

export { server };