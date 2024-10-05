const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

import { IAuthenticator, IUsuario } from '../contract/login';

class JSONWebToken implements IAuthenticator {
    public token: string = "";
    public expiresIn: string = "";

    Login(data: IUsuario): Boolean {
        if (data.usuario && data.senha) {

            this.expiresIn = '10h';
            this.token = jwt.sign(data, secretKey, { expiresIn: this.expiresIn })

            return true;
        } else {
            return false;
        }
    }
}

export { JSONWebToken }