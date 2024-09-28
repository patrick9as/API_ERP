import express from 'express';
import ICliente from '../model/cliente';

const ControllerCliente = express.Router();

ControllerCliente.get('/cliente', (req, res) =>{
    let cliente = {} as ICliente;
    cliente.id = 1;
    cliente.nome_fantasia = 'PATRICK CORP';
    cliente.razao_social = 'PATRICK CORP LTDA';
    cliente.cnpj = '11111111000111';

    res.status(200).send(cliente);
});

export { ControllerCliente };