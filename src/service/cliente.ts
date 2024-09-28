import ICliente from '../model/cliente';

function GetAll() {
    let cliente = {} as ICliente;
    cliente.id = 1;
    cliente.nome_fantasia = 'PATRICK CORP';
    cliente.razao_social = 'PATRICK CORP LTDA';
    cliente.cnpj = '11111111000111';

    return [cliente];
}

export { GetAll };