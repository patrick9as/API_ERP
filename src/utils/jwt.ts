import IUsuario from '../contract/usuario';
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

function generateToken(data: IUsuario){
    if (!secretKey) {
        throw new Error('JWT_SECRET_KEY must be defined in the environment variables');
    }
    
    const expiresIn = '10h'
    const token = jwt.sign(data, secretKey, { expiresIn })
    return token
}

export { generateToken }