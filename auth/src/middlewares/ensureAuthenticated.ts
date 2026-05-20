import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

export function ensureAuthenticated(
request: Request, 
response: Response, 
next: NextFunction){

    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new AppError("JWT Token não informado")
    }

    const [,token]= authHeader.split(" ")

    // Desestruturando o id do usuário, para saber quem está logando.
   const {sub: user_id} = verify(token, authConfig.jwt.secret)

// Adicionando a propriedade "user" na requisição

   request.user  = {
    id: String(user_id),
    }


    return next()


}