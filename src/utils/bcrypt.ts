import bcrypt from 'bcrypt';

// Função para gerar um hash da senha
async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // número de rodadas para gerar o "sal"
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

// Função para verificar uma senha com o hash armazenado
async function comparePassword(password: string, hash: string): Promise<boolean> {
    const match = await bcrypt.compare(password, hash);
    return match;
}

export { hashPassword, comparePassword }