import express from 'express';
import { GetAll, GetByID, GetByNome, Post } from '../service/empresa';

const ControllerEmpresa = express.Router();

ControllerEmpresa.post('/empresa', async(req, res) => {
    try {
        res.status(201).json({ id: await Post(req.body) });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao publicar empresas: ' + error });
    }
});

ControllerEmpresa.get('/empresa', async (req, res) => {
    try {
        const nome = req.query.nome as string | undefined;
        const empresas = nome ? await GetByNome(nome) : await GetAll();
        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar empresas' });
    }
});

ControllerEmpresa.get('/empresa/:id', async(req, res) => {
    try {
        const empresas = await GetByID(parseInt(req.params.id));
        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar empresas' });
    }
});

export { ControllerEmpresa };