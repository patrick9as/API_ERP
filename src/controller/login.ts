import IUsuario from '../model/usuario';
import express from 'express';

const ControllerLogin = express.Router();

ControllerLogin.get('/login', (req, res) => {
    let usuario = new IUsuario;
    usuario.id = 1;
    usuario.nome = 'patrick';
    res.status(200).send(usuario);
});

export { ControllerLogin };