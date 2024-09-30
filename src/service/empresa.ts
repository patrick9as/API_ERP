import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient()

async function Post(data: Prisma.empresaCreateInput) {
    const Empresa = await prisma.empresa.create({
        data: {
            nome_fantasia: data.nome_fantasia,
            razao_social: data.razao_social,
            cnpj: data.cnpj,
            ativo: data.ativo
        }
    });
    return(Empresa.id)
}

async function GetAll() {
    const Empresa = await prisma.empresa.findMany();
    return(Empresa);
}

async function GetByID(id: number) {
    const Empresa = await prisma.empresa.findUnique({
        where: {
            id: id
        }
    });
    return(Empresa);
}

async function GetByNome(nome: string) {
    const empresas = await prisma.empresa.findMany({
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