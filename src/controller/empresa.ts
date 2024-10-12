import express from 'express';
import { CadastrarEmpresa, BuscarEmpresas, BuscarEmpresaPorID, BuscarEmpresasPorNome } from '../service/empresa';

const ControllerEmpresa = express.Router();

ControllerEmpresa.post('/empresa', async(req, res) => {
    try {
        res.status(201).json({ id: await CadastrarEmpresa(req.body) });
    } catch (error) {
        res.status(400).json({ error: 'Erro ao inserir empresa nova empresa', code: (error as any).code || 0 });
        console.log(error);
    }
});

ControllerEmpresa.get('/empresa', async (req, res) => {
    try {
        const nome = req.query.nome as string | undefined;
        const empresas = nome ? await BuscarEmpresasPorNome(nome) : await BuscarEmpresas();
        res.status(200).json(empresas);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao buscar empresas', code: (error as any).code || 0 });
    }
});

ControllerEmpresa.get('/empresa/:id', async(req, res) => {
    try {
        const empresas = await BuscarEmpresaPorID(parseInt(req.params.id));
        res.status(200).json(empresas);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao buscar empresa', code: (error as any).code || 0 });
    }
});

export { ControllerEmpresa };