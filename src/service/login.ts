import { generateToken } from '../utils/jwt';
import IUsuario from '../contract/usuario';

function Autenticar (data: IUsuario) {
    if (data.usuario && data.senha) {
        return generateToken(data);
    } else {
        throw new Error("Usuário ou senha inválidos");
    }
}

export { Autenticar }