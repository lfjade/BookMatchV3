export class Genero {
    protected _id: number
    protected _nome: string
    protected static contadorID: number=1;
    static listaGeneros: Genero[]=[];

    constructor (nome: string){
        this._id=Genero.contadorID++
        this._nome = nome
        this.registrar()
    }

    private registrar(){
        const testeNome = this.procuraGeneroNome(this._nome)
        if (!testeNome){
            Genero.listaGeneros.push(this)
            console.log("Gênero cadastrado.")
        } else {
            console.log("Gênero já cadastrado no sistema.")
        }
    }

    procuraGeneroNome(nome: string): string | null {
        const normalizado = nome.trim().toLowerCase()
        const testeNomeGenero = Genero.listaGeneros.find((el) => el._nome.toLowerCase().trim() === normalizado)
        if (testeNomeGenero){
            return testeNomeGenero._nome
        } else {
            return null
        }
    }

    get nome (): string {
        return this._nome
    }
    set nome (nome: string){
        this._nome=nome
    }
}