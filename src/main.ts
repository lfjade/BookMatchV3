import { Usuario } from "./Classes/Usuario";
import PromptSync = require("prompt-sync");
import { acervo } from "./utils/acervo";
import { menuUsuario } from "./utils/menuUsuario";
import { log } from "console";
// -------------- TESTES --------------
// const novoUsuario = new Usuario ("Jade Lacerda Fernandes", "jadeusa", "028.529.980.84", "123", false)
// const teste = Usuario.procuraUsuarioUserName("jadeusa")
// console.log(teste)

const prompt = PromptSync();
let controle = true
while (controle){
    console.log("Bem vindo ao BookMatch!")
    console.log("1. Login")
    console.log("2. Registre-se")
    console.log("3. Acervo")
    console.log("4. Sair")

    const opcao = Number(prompt("Entre com sua opção:"))
    switch(opcao){
        case 1: // login
        const userName = prompt("Nome de usuário: ")
        const senha = prompt("Senha: ")
        const login = Usuario.login(userName, senha) // aqui ainda não abriu a possibilidade de entrar no menu usuário ou menu admin; apenas printa a mensagem de boas vindas ou senha inválida.
        if(login?.verificaAdmin === false) {
            menuUsuario(login)
        } else if (login?.verificaAdmin === true){
            //menuAdmin(login)
        }
        break;
        case 2: // Registre-se
        Usuario.cadastroInterativo();
        break;
        case 3: // Acervo
        acervo()
        break;
        case 4:
            console.log("Saindo...")
            controle=false
            break;
        default:
            console.log("Opção não reconhecida.")
            break;
    }

    
}