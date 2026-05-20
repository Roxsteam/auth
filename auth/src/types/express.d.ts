declare namespace Express {
// O interface somará a tipagem criada com a existente.
    export interface Request {
        user?: {
            id: string
        }
    } 
}