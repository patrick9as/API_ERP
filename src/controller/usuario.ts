import express from 'express';
import { CadastrarUsuario } from '../service/usuario';


const ControllerUsuario = express.Router();

ControllerUsuario.post('/usuario', async (req, res) => {
    try{
        res.status(201).json({id: await CadastrarUsuario(req.body)});
    } catch (error) {
        res.status(500).send('Erro ao inserir usuário: ' + error);
    }
});

export { ControllerUsuario };