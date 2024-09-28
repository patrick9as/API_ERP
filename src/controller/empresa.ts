import express from 'express';
import IEmpresa from '../model/empresa';

const ControllerEmpresa = express.Router();

ControllerEmpresa.get('/empresa', (req, res) =>{
    let empresa = {} as IEmpresa;
    empresa.id = 1;
    empresa.nome_fantasia = 'PATRICK CORP';
    empresa.razao_social = 'PATRICK CORP LTDA';
    empresa.cnpj = '11111111000111';
    res.status(200).send(empresa);
});

export { ControllerEmpresa };