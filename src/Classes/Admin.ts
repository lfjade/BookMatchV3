import { Usuario } from "./Usuario";

export class Admin extends Usuario {

    constructor(userName: string, senha: string){
        super (userName, "", "", senha, true)
    }
}