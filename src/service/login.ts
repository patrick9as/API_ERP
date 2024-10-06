import { IUsuario } from '../contract/login';
import { JSONWebToken } from '../utils/jwt';
import { GetByUsuarioAndSenha } from '../repository/usuarios';

async function Logar(data: IUsuario) {

    const usuario = await GetByUsuarioAndSenha(data);

    if (usuario) {
        //Factory de autenticações
        let auth = new JSONWebToken;

        if (auth.Login(data))
            return auth;
    };

    return null;
}

export { Logar }