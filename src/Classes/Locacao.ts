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

    static procuraLocacaoUsuario(usuario: Usuario){
        
    }
}