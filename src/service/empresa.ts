import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient()

async function CadastrarEmpresa(data: Prisma.empresasCreateInput) {
    if (Array.isArray(data)) {
        throw new Error('Array não permitido!');
    }
    const Empresa = await prisma.empresas.create({
        data: {
            id: data.id,
            nome_fantasia: data.nome_fantasia,
            razao_social: data.razao_social,
            cnpj: data.cnpj,
            ativo: data.ativo
        }
    });
    return(Empresa.id)
}

async function BuscarEmpresas() {
    const Empresa = await prisma.empresas.findMany();
    return(Empresa);
}

async function BuscarEmpresaPorID(id: number) {
    const Empresa = await prisma.empresas.findUnique({
        where: {
            id: id
        }
    });
    return(Empresa);
}

async function BuscarEmpresasPorNome(nome: string) {
    const empresas = await prisma.empresas.findMany({
        where: {
            OR: [
                { nome_fantasia: { contains: nome } },
                { razao_social: { contains: nome } }
            ]
        }
    });
    return empresas;
}

export { CadastrarEmpresa, BuscarEmpresas, BuscarEmpresaPorID, BuscarEmpresasPorNome };