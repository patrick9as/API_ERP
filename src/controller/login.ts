import modelUsuario from '../model/usuario';

function Get(): modelUsuario {
    let usuario = new modelUsuario;
    usuario.id = 1;
    usuario.nome = 'patrick';

    return usuario;
}

export { Get };