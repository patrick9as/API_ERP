import express from 'express';
import { Get } from '../controller/empresa';

const empresa = express.Router();

empresa.get('/empresa', (req, res) =>{
    res.status(200).send(Get());
});

export { empresa };