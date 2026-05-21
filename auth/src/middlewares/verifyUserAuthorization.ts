import {Request, Response, NextFunction} from "express"
import { AppError } from "@/utils/AppError"

// A função recebe a propriedade role que indica a permissão do usuário logo
// Colocamos como um array, pois uma rota pode ser acessada por mais de um usuário
function verifyUserAuthorization(role: string[]){

return (request: Request, response: Response, next: NextFunction) =>{
    if (!request.user || !role.includes(request.user.role)) {
        throw new AppError ("Unauthorized", 401)
    }

    return next()
}

}

export { verifyUserAuthorization }