import express from 'express';
import { Get } from '../controller/cliente';

const cliente = express.Router();

cliente.get('/cliente', (req, res) =>{
    res.status(200).send(Get());
});

export { cliente };