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

export { GetByUsuarioAndSenha };