import promptSync from "prompt-sync";
import { Livro } from "../Classes/Livro";


export function acervo(){
    
    const prompt = promptSync()
    let controle = true;

    while(controle) {
        console.log("------ Acervo BookMatch -------")
        console.log("1. Listar Todo Acervo")
        console.log("2. Buscar no Acervo")
        console.log("3. Sair do acervo")
        const opcao = Number(prompt("Escolha uma opção: "))

        switch (opcao) {
            case 1: 
                console.log("Exibindo Acervo...")
                Livro.listaLivros.forEach((el) => Livro.exibirLivro(el))
                break;
            case 2:
                console.log ("Busca") // No menu Admin esse menu aqui poderia ter mais opção; neste caso, posso reconsiderar refazer essa pesquisa chamando cada método separadamente, ou fazer outro método pro Admin, ou só decidir que não há necessidade de nenhum dos dois.
                console.log("1. Pesquisa por nome")
                console.log("2. Pesquisa por autor")
                console.log("3. Pesquisa por gênero")
                console.log("4. Pesquisa por disponibilidade")
                console.log("5. Sair")
                const opcao = Number(prompt("Escolha uma opção: "))
                Livro.procuraLivro(opcao)
                
                break;
            case 3:
                console.log("Saindo");
                controle=false;
                break;
            default: 
                console.log("Opção não reconhecida.")
                break;
        }
    }
}