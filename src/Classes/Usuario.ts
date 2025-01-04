import PromptSync from "prompt-sync";
const prompt = PromptSync();


export class Usuario {
    protected _id: number;
    protected _nome: string;
    protected _userName: string;
    protected _cpf: string;
    protected _senha: string;
    protected _verificaAdmin: boolean = false;
    protected static contadorId: number=1;
    static listaUsuarios: Usuario[]=[]

    constructor (nome: string, userName: string, cpf: string, senha: string, verificaAdmin: boolean) {
        this._id=Usuario.contadorId++;
        this._nome=nome;
        this._userName=userName
        this._cpf=cpf;
        this._senha=senha;
        this._verificaAdmin=verificaAdmin;
        this.registrar();
    }

    private registrar (){
        const testeUserName=Usuario.procuraUsuarioUserName(this._userName)
        const testeCpf = Usuario.procuraUsuarioCpf(this._cpf)
        if (!testeUserName || !testeCpf){
            Usuario.listaUsuarios.push(this)
            if(!this._verificaAdmin){
                console.log("Usuário cadastrado.")
            } else {
                console.log("Admin cadastrado.")
            }
        } else if (testeUserName && !testeCpf){
            console.log("Nome de Usuário já cadastrado no sistema")
        } else if (!testeUserName && testeCpf){
            console.log("CPF já cadastrado no sistema.")
        } else {
            console.log("Nome de usuário e CPF já cadastrados no sistema.")
        }
    }
    
    static procuraUsuarioID(id: number): number | null{
        const testeId = Usuario.listaUsuarios.find((el) => el._id = id);
        if(testeId){
            return testeId._id
        } else {
            console.log ("Usuário não encontrado.")
            return null
        }

    }
    static procuraUsuarioNome(nome: string): string | null {
        const normalizado = nome.toLowerCase().trim();
        const testeNome = Usuario.listaUsuarios.find((el) => el._nome.toLowerCase().trim() === normalizado)
        if (testeNome){
            return testeNome._nome
        } else {
            console.error("Usuário não encontrado.")
            return null
        }

    }
    static procuraUsuarioUserName(userName: string): string | null {
        // Lógica: recebe um user name, procura se existe na lista; se sim, retorna a string userName; se não, retorna a string vazia e printa no console "Usuário não encontrado."
        if (!userName.trim()) {
            console.error("O nome de usuário não pode ser vazio.");
            return null;
        } // caso receba "" => "O nome de usuário não pode ser vazio."
        const normalizado = userName.toLowerCase().trim();
        const testeUserName = Usuario.listaUsuarios.find((el) => el._userName.toLowerCase().trim() === normalizado)
        if (testeUserName) {
            return testeUserName._userName
        } else {
            console.error("Usuário não encontrado.")
            return null
        }
    }
    static procuraUsuarioCpf(cpf: string): string | null{
        const normalizado = cpf.replace(/\D/g, ""); // remove todos caracteres não numéricos da string
        const testeCpf = Usuario.listaUsuarios.find((el) => el._cpf.replace(/\D/g, "") === normalizado)
        if (testeCpf) {
            return testeCpf._cpf
        } else {
            console.error ("Usuário não encontrado.")
            return null
        }
    }
    static procuraUsuario (opcao: number): string | null | void{ // método que inclui todos os métodos de pesquisa num menu
        let controle = true

            while(controle){
                switch(opcao){
                case 1: // procuraUsuarioID
                let id = Number(prompt("Informe o ID do Usuário: "))
                let saida = this.procuraUsuarioID(id)
                return saida?.toString() || null;
                break;
                case 2: // procuraUsuarioNome
                let nome = prompt("Informe o nome do Usuário: ")
                return this.procuraUsuarioNome(nome)
                break;
                case 3: //procuraUsuarioUsername
                let userName = prompt ("Informe o Username: ")
                return this.procuraUsuarioUserName(userName)
                break;
                case 4: // procuraUsuarioCpf
                let cpf = prompt("Informe o CPF: ")
                return this.procuraUsuarioCpf(cpf)
                break;
                case 5:
                    console.log("Saindo...")
                    controle = false;
                    break;
                default:
                    console.error("Opção não reconhecida.")
                    break;
            }
        }
    }

    static login (userName: string, senha: string): Usuario | void{
        let testelogin = Usuario.procuraUsuarioUserName(userName) // isso aqui retorna => username : "usuário não encontrado" & null; 
        if (testelogin) { // se usuário encontrado => executa : senão => não faz nada 
            const usuarioEncontrado = Usuario.listaUsuarios.find((el) => el._userName === testelogin && el._senha===senha) // monta o objeto usuarioEncontrado : Usuario; o método find percorre a lista e verifica se o mesmo objeto atende às duas condições ao mesmo tempo
            if (usuarioEncontrado){
                console.log (`Seja bem vindo, ${usuarioEncontrado._nome}`)
                return usuarioEncontrado
            } else {
                console.log("Senha incorreta.")
                return
            }// mensagem de boas vindas se usuarioEncontrado? => true; "Senha incorreta." se false.
        }

    }
    static cadastroInterativo() { //nome: string, userName: string, cpf: string, senha: string
        const nome = prompt("Nome: ")
        const userName = prompt("Nome de usuário: ")
        const cpf = prompt("CPF: ")
        const senha = prompt ("Senha: ")
        new Usuario(nome, userName, cpf, senha, false)

        const jaCadastrado = Usuario.listaUsuarios.find((el) => el._userName === userName)
        jaCadastrado? "Cadastro realizado!" : "Erro no cadastro. Tente novamente."
        
    }
    get verificaAdmin(): boolean{
        return this._verificaAdmin
    }

    get nome(): string{
        return this._nome
    }

    static minhaConta (usuario: Usuario){
        let controle = true
        while(controle){
            console.log ("1. Alterar dados")
            console.log ("2. Sair")
            let opcao = Number(prompt ("Entre com sua opção: "))
            switch(opcao){
                case 1: // alterar dados
                    // chamar metodo alterar dados usuario
                    Usuario.alteraDadosUsuario(usuario)
                    break;
                case 2:
                    console.log("Saindo...")
                    controle = false
                    break;
                default:
                    console.log("Opção não reconhecida.")
                    break;
            }
        }
    }
    static alteraDadosUsuario(usuario: Usuario){
        let controle = true
        while(controle){
            console.log("1. Alterar nome")
            console.log("2. Alterar nome de usuário")
            console.log("3. Alterar CPF")
            console.log("4. Alterar senha")
            console.log("5. Sair")
            const opcao = Number(prompt("Entre com sua opção: "))
            switch(opcao){
                case 1: // alterar nome
                    const novoNome= prompt("Novo nome: ")
                    usuario._nome = novoNome
                    console.log("Nome alterado com sucesso.")
                    break;
                case 2: // alterar nome de usuário
                    const novoUserName = prompt ("Novo nome de usuário: ")
                    const testeUserName = this.procuraUsuarioUserName(novoUserName)
                    if (!testeUserName){
                        usuario._userName=novoUserName
                        console.log("Nome de usuário alterado com sucesso.")
                    }

                    break;
                case 3: // alterar CPF
                    const novoCPF = prompt("Novo CPF: ")
                    const testeCpf = this.procuraUsuarioCpf(novoCPF)
                    if (!testeCpf){
                        usuario._cpf=novoCPF;
                        console.log("CPF alterado com sucesso.")
                    }
                    break;
                case 4: //Alterar senha
                    const senhaAtual = prompt("Informe a senha atual:")
                    if (senhaAtual===usuario._senha){
                        console.log("Senha correta!")
                        const novaSenha = prompt("Entre com a nova senha: ")
                        usuario._senha=novaSenha;
                        console.log("Senha alterada com sucesso.")
                    } else {
                        console.log("Senha incorreta.")
                    }
                    break;
                case 5: 
                    console.log("Saindo...")
                    controle=false
                    break;
                default:
                    console.error("Opção não reconhecida.")
                    break;
            } 
        }
    }
}