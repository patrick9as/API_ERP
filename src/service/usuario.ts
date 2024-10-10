import { IUsuario } from "../contract/login";
import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePassword } from '../utils/bcrypt';

const prisma = new PrismaClient();

async function GetUsuarios() {
    return await prisma.usuarios.findMany();
}

async function GetUsuarioByID(id: number) {
    return await prisma.usuarios.findFirst({
        where: {
            id: id
        }
    });
}

async function GetByUsuarioAndSenha(usuario: IUsuario) {
    console.log(usuario);
    const user = await prisma.usuarios.findFirst({
        where: { usuario: usuario.usuario }
    });

    if (!user) {
        console.log("Usuário não encontrado!");
        return null;
    }

    console.log("Usuário encontrado no banco:", user);
    console.log("Comparando senha fornecida com o hash armazenado...");

    const isPasswordValid = await comparePassword(usuario.senha, user.senha);
    
    if (isPasswordValid) {
        console.log("Senha correta!");
        return user;  // Senha correta
    } else {
        console.log("Senha incorreta!");
        return null;  // Senha incorreta
    }
}

async function PostUsuario(data: IUsuario) {
    const hashedPassword = await hashPassword(data.senha);
    
    console.log("Salvando usuário com senha hash:", hashedPassword);

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

export { PostUsuario, GetByUsuarioAndSenha, GetUsuarios, GetUsuarioByID };