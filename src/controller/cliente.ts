import express from 'express';
import { GetAll } from '../service/cliente';

const ControllerCliente = express.Router();

ControllerCliente.get('/cliente', (req, res) =>{
    
    res.status(200).send(GetAll());
});

export { ControllerCliente };