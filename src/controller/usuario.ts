import express from 'express';
import { PostUsuario, GetUsuarios, GetUsuarioByID } from '../service/usuario';


const ControllerUsuario = express.Router();

ControllerUsuario.post('/usuario', async (req, res) => {
    try{
        res.status(201).json({id: await PostUsuario(req.body)});
    } catch (error) {
        res.status(500).send('Erro ao inserir usuário: ' + error);
    }
})

ControllerUsuario.get('/usuario', async(req, res) => {
    try {
        const usuarios = await GetUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).send('Erro ao buscar usuarios: ' + error);
    }
})

ControllerUsuario.get('/usuario/:id', async(req, res) => {
    try { 
        res.status(200).json(await GetUsuarioByID(Number(req.params.id)));
    } catch (error) {
        res.status(500).send('Erro ao buscar usuarios: ' + error);
    }
})

export { ControllerUsuario };