import modelEmpresa from '../model/empresa';

function Get(): modelEmpresa {
    let empresa = new modelEmpresa();
    empresa.id = 1;
    empresa.nome_fantasia = 'PATRICK CORP';
    empresa.razao_social = 'PATRICK CORP LTDA';
    empresa.cnpj = '11111111000111';

    return empresa;
}

export { Get };