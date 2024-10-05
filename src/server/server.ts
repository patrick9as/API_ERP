import express from 'express';
import { routes } from '../routes/index';
import 'dotenv/config';

console.log(process.env.JWT_SECRET_KEY)

var cors = require('cors');
const { expressjwt } = require('express-jwt')

const server = express();

server.use(express.json());
server.use(cors());

server.use(expressjwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"]
}).unless({
    path: [
        '/login',
        { url: /^\/login\/.*/, methods: ['GET'] },
        //{ url: /^\/.*/, methods: ['GET'] }, // Libera todas as rotas abaixo de "/"
        { url: /^\/api-docs\/.*/, methods: ['GET'] } // Libera todas as rotas abaixo de /api-docs
    ]
}));

server.use(routes);


server.get('/', (req, res) => {
    res.status(200).send('API ERP');
});

export { server };