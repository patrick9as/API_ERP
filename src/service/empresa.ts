import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient()

async function Post(data: Prisma.empresasCreateInput) {
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

async function GetAll() {
    const Empresa = await prisma.empresas.findMany();
    return(Empresa);
}

async function GetByID(id: number) {
    const Empresa = await prisma.empresas.findUnique({
        where: {
            id: id
        }
    });
    return(Empresa);
}

async function GetByNome(nome: string) {
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

export { Post, GetAll, GetByID, GetByNome };