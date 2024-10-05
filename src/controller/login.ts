import express from 'express';
import { Autenticar } from '../service/login';

const ControllerLogin = express.Router();

ControllerLogin.get('/login', (req, res) => {
    console.log(req.body)
    res.status(200).send(Autenticar(req.body));
});

export { ControllerLogin };