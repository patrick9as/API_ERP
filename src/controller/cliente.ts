import modelCliente from '../model/cliente';

function Get(): modelCliente {
    let cliente = new modelCliente();
    cliente.id = 1;
    cliente.nome_fantasia = 'PATRICK CORP';
    cliente.razao_social = 'PATRICK CORP LTDA';
    cliente.cnpj = '11111111000111';

    return cliente;
}

export { Get };