import { Admin } from "../Classes/Admin";
import PromptSync from "prompt-sync";
export function menuAdmin (admin: Admin) {
    let controle = true
    while (controle){
        console.log(`------------ Bem vindo, ${admin.nome} ------------`)
        console.log("1. Minha conta")
        console.log("2. Locações")
        console.log("3. Usuários")
        console.log("4. Acervo")
        console.log("5. Sair")
        let opcao = Number (prompt("Entre com sua opção: "))
        switch(opcao){
            case 1: // Minha conta
                Admin.minhaConta(admin)
                break;
            case 2: // Locações
                break;
            case 3: // Usuários
                break;
            case 4: // Acervo
                break;
            case 5:
                console.log("Saido...")
                controle = false;
                break;
            default:
                console.log("Opção não reconhecida.")
                break;
        }
    }
}