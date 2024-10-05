import { usuarios } from "@prisma/client";

export interface IUsuario extends usuarios{ 

}

export interface IAuthenticator {
    token: string;
    expiresIn: string;
    Login(data: IUsuario): Boolean;
}