import express from 'express';
import { Get } from '../controller/login';

const login = express.Router();

login.get('/login', (req, res) => {
    res.status(200).send(Get());
});

export { login };