import express from 'express';
import {  } from '../service/usuario';

const ControllerUsuario = express.Router();

ControllerUsuario.post('/usuario', async (req, res) => {
    let result = await ServiceUsuario(req.body);

    if (result?.token)
        res.status(200).json(result);
    else
        res.status(401).send('Acesso negado');  
});

export { ControllerUsuario };


//service usuário:

/*
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/bcrypt';
import { IUsuario } from '../contract/login';

const prisma = new PrismaClient();

// Função para cadastrar um novo usuário
async function CadastrarUsuario(data: IUsuario) {
    // Gera o hash da senha antes de salvar no banco de dados
    const hashedPassword = await hashPassword(data.senha);

    // Cria o usuário no banco de dados, substituindo a senha pela senha com hash
    const novoUsuario = await prisma.usuarios.create({
        data: {
            usuario: data.usuario,
            senha: hashedPassword,
            nome: data.nome,
            // Adicione outros campos necessários
        }
    });

    return novoUsuario;
}

export { CadastrarUsuario };
*/