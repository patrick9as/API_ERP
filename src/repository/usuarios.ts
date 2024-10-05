import { PrismaClient } from '@prisma/client';
import { IUsuario } from "../contract/login";

const prisma = new PrismaClient()


async function GetByUsuarioAndSenha(usuario: IUsuario) {
    
    const user = await prisma.usuarios.findFirst({
        where: {
            AND: { 
                usuario: usuario.usuario,
                senha: usuario.senha
            }
        }
    });

    return user;
}

export { GetByUsuarioAndSenha };