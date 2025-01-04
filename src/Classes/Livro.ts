import { Genero } from "./Genero";
export class Livro {
    protected _id: number;
    protected _nome: string;
    protected _autor: string;
    protected _generos: Genero[];
    protected _editora: string;
    protected _edicao: string;
    protected _disponivel: boolean;
    protected _dataPublicacao: Date;
    protected static contadorId: number = 1;
    static listaLivros: Livro[]=[];

    constructor(nome: string, autor: string, generos: Genero[], editora: string, edicao: string, dataPublicacao: Date){
        this._id=Livro.contadorId++;
        this._nome=nome;
        this._autor=autor;
        this._generos=generos;
        this._editora=editora;
        this._edicao=edicao;
        this._disponivel=true // todo livro é dado como disponível ao cadastrar
        this._dataPublicacao=dataPublicacao;
        Livro.listaLivros.push(this)

    }

    get disponivel (): boolean{
        return this._disponivel
    }
    set disponivel (disponivel: boolean) {
        this._disponivel=disponivel;
    }
    get nome (): string{
        return this._nome
    }
    set nome (nome: string){
        this._nome=nome;
    }
    static exibirLivro(livro: Livro): string{
        return `ID: ${livro._id} | Nome: ${livro._nome} | Autor: ${livro._autor} | Gênero: ${livro._generos.map((el) => el.nome).join(", ")} | Editora: ${livro._editora} | Edição: ${livro._edicao}`

    }

    static procuraLivroNome (nome: string): string[] | null{
        const normalizado = nome.trim().toLowerCase()
        const testeNome = Livro.listaLivros.filter((el) => el._nome.trim().toLowerCase().includes(normalizado))
        if (testeNome.length > 0) {
            return testeNome.map((el) => Livro.exibirLivro(el))
        } else {
            console.log("Nenhum livro com esta palavra-chave no título foi encontrado.")
            return null
        }
    }

    static procuraLivroAutor (autor: string): string[] | null {
        const normalizado=autor.trim().toLowerCase()
        const testeAutor = Livro.listaLivros.filter((el) => el._autor.trim().toLowerCase().includes(normalizado))
        if (testeAutor.length > 0) {
            return testeAutor.map((el) => Livro.exibirLivro(el))
        } else {
            console.log("Nenhum livro com esta palavra-chave no autor foi encontrado.")
            return null
        }
    }

    static procuraLivroDisponivel (disponivel: boolean): string[] | null {
        const testeDisponivel = Livro.listaLivros.filter((el) => el._disponivel === disponivel)
        if (testeDisponivel.length>0){
            return testeDisponivel.map((el) => Livro.exibirLivro(el))
        } else {
            console.log(`Nenhum livro com status ${disponivel? "Disponível" : "Indisponível"} foi encontrado.`)
            return null
        }
    }

    static procuraLivroGenero (genero: string): string[] | null{
        const normalizado = genero.toLowerCase().trim()
        const testeLivroGenero = Livro.listaLivros.filter((el) => el._generos.some((g) => g.nome.trim().toLowerCase().includes(normalizado)))
        if (testeLivroGenero.length > 0){
            return testeLivroGenero.map((el) => Livro.exibirLivro(el))
        } else {
            console.log ("Nenhum livro deste gênero foi encontrado.")
            return null
        }
    }

    static procuraLivro(opcao: number){ // método que condensa todos os tipos de busca em um menu
        let controle=true;
            while(controle){
                switch(opcao){
                case 1: // busca por título
                    const nome = prompt("Nome: ")
                    if (nome){
                        Livro.procuraLivroNome(nome)
                    } else {
                        console.log("Nada foi digitado.")
                    }
                    break;
                case 2: // busca por autor
                    const autor = prompt("Autor: ")
                    if (autor){
                        Livro.procuraLivroAutor(autor)
                    } else {
                        console.log("Nada foi digitado.")
                    }
                    break;
                case 3: //busca por genero
                    const genero = prompt("Gênero: ")
                    if (genero){
                        Livro.procuraLivroGenero(genero)
                    } else {
                        console.log("Nada foi digitado.")
                    }
                    break;
                case 4: // busca por disponibilidade
                    console.log("1. Livros disponíveis")
                    console.log("2. Livros indisponíveis")
                    const opcao = Number(prompt("Procurar por livros disponíveis ou indisponíveis?"))
                    if (opcao){
                        if(opcao ===1){
                            let disponivel=true
                            Livro.procuraLivroDisponivel(disponivel)
                        } else if (opcao === 2 ){
                            let disponivel = false
                            Livro.procuraLivroDisponivel(disponivel)
                        } else {
                            console.log("Opção inválida.")
                        }
                    } else {
                        console.log("Nada foi digitado.")
                    }
                    break;
                case 5: // saindo
                    console.log("Saindo...")
                    controle = false;
                    break;
                default:
                    console.error("Opção não reconhecida.")
                    break;
            }
        }
    }
}