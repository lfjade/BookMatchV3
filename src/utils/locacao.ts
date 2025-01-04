import promptSync from "prompt-sync";
import { Locacao } from "../Classes/Locacao";
import { Livro } from "../Classes/Livro";
import { Usuario } from "../Classes/Usuario";

export function locacao (){
    const prompt = promptSync()
    let controle = true
    while (controle){
        console.log("Bem vindo ao menu de locações!")
        console.log("1. Registrar nova locação")
        console.log("2. Registrar devolução")
        console.log("3. Listar locações ativas")
        console.log("4. Listar locações já devolvidas")
        console.log("5. Buscar locações por Usuário")
        console.log("6. Buscar locações por livro")
        console.log("7. Alterar data de devolução")
        console.log("8. Cancelar locação")
        console.log("9. Sair")
        const opcao = Number(prompt("Entre com sua opção: "))
        switch (opcao){
            case 1: // registrar locação
                const idLivro = Number(prompt("Entre com o ID do Livro: "))
                const livro = Livro.listaLivros.find ((el) => el.id === idLivro)
                const idUsuario = Number(prompt("Entre com o ID de usuário: "))
                const usuario = Usuario.listaUsuarios.find ((el) => el.id===idUsuario)
                new Locacao(livro, usuario) // ta dando erro aqui nesse caralho
                break;
            case 2: // registrar devolução
                break;
            case 3: // listar locações ativas
                break;
            case 4: //listar locações já devolvidas
                break;
            case 5: // buscar locações por Usuário
                break;
            case 6: // buscar locações por livro
                break;
            case 7: // Alterar data de devolução
                break;
            case 8: // Cancelar locação
                break;
            case 9: // Sair
                console.log("Saindo...")
                controle = false 
                break;
            default:
                console.log("Opção não recohecida.")
                break;

        }
    }
}