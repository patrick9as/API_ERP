import express from 'express';
import { Login } from '../service/login';

const ControllerLogin = express.Router();

ControllerLogin.post('/login', async (req, res) => {
    let result = await Login(req.body);

    if (result?.token)
        res.status(200).json(result);
    else
        res.status(401).send('Acesso negado');  
});

export { ControllerLogin };