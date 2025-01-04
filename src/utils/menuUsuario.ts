import { Usuario } from "../Classes/Usuario";
import { acervo } from "./acervo";
import { Locacao } from "../Classes/Locacao";

export function menuUsuario(usuario: Usuario){
    let controle = true;
    console.log(`------------ Bem vindo, ${usuario.nome} ------------`)
    console.log("1. Minha conta")
    console.log("2. Minhas Locações")
    console.log("3. Acervo")
    console.log("4. Sair")
    while (controle){
        const opcao = Number(prompt("Entre com a sua opção: "))
        switch(opcao){
            case 1: // minha conta
                Usuario.minhaConta(usuario)
                break;
            case 2: // minhas locações
                Locacao.procuraLocacaoUsuario(usuario)
                break;
            case 3:
                acervo();
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

}