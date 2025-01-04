import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Locacao {
    protected _id: number;
    protected _livro: Livro;
    protected _usuario: Usuario;
    protected _dataLocacao: Date;
    protected _previsaoDevolucao: Date;
    protected _dataDevolucao: Date | null;
    protected static contadorId: number = 1;
    static listaLocacoes: Locacao[]=[];

    constructor(livro: Livro, usuario: Usuario){
        this._id=Locacao.contadorId++;
        this._livro=livro;
        this._usuario=usuario;
        this._dataLocacao = new Date();
        this._previsaoDevolucao=new Date (this._dataLocacao);
        this._previsaoDevolucao.setDate(this._dataLocacao.getDate()+14)
        this._dataDevolucao=null;

        if (this._livro.disponivel){
            Locacao.listaLocacoes.push(this)
            console.log("Locação registrada com sucesso.")
            this._livro.disponivel=false;
        }
    }

    exibirLocacaoUsuario(locacao: Locacao): string {
        return `Livro: ${locacao._livro.nome}\n Data de locação: ${locacao._dataLocacao}\n ${ (this._dataDevolucao? `Devolver até: ${locacao._previsaoDevolucao}` : `Data de devolução: ${locacao._dataDevolucao}`)}`
    }

    static procuraLocacaoUsuario(usuario: Usuario){ // recebe o parâmetro Usuario
        let locacoesUsuario = Locacao.listaLocacoes.filter((el) => el._usuario === usuario) // aqui ele cria um array de objetos Locacao que tiverem o usuário passado no parâmetro
        locacoesUsuario.map((el) => el.exibirLocacaoUsuario) // aqui ele pega o array e pra cada objeto usa o método de exibição
        
    }

    get dataDevolucao (): Date | null{
        return this._dataDevolucao
    }
    set dataDevolucao (data: Date) {
        this._dataDevolucao=data
    }

}