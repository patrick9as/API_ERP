import { PrismaClient } from '@prisma/client';
import { IUsuario } from "../contract/login";
import { hashPassword, comparePassword } from '../utils/bcrypt';

const prisma = new PrismaClient()

async function GetByUsuarioAndSenha(usuario: IUsuario) {
    // Buscando o usuário pelo nome de usuário no banco de dados
    const user = await prisma.usuarios.findFirst({
        where: { usuario: usuario.usuario }
    });

    // Verificando se o usuário foi encontrado e se a senha bate com o hash no banco
    if (user && user.senha && await comparePassword(usuario.senha, user.senha)) {
        return user;  // Usuário e senha válidos
    }

    return null;  // Usuário ou senha inválidos
}

async function PostUsuario(data: IUsuario) {
    const hashedPassword = await hashPassword(data.senha);

    const novoUsuario = await prisma.usuarios.create({
        data: {
            id_empresa: data.id_empresa,
            usuario: data.usuario,
            senha: hashedPassword,
            nome: data.nome,
            id_cargo: data.id_cargo
        }
    });

    return novoUsuario;
}

export { GetByUsuarioAndSenha, PostUsuario };