import { IUsuario } from "../contract/login";
import { PostUsuario } from "../repository/usuarios";

async function CadastrarUsuario(data: IUsuario) {
    data.id_cargo = 7;
    //regras de validação do usuário
    return (await PostUsuario(data)).id;
}

export { CadastrarUsuario };