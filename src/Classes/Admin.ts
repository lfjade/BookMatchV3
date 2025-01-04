import { Usuario } from "./Usuario";

export class Admin extends Usuario {

    constructor(userName: string, senha: string){
        super (userName, "", "", senha, true)
    }

    static minhaConta(admin: Admin): void {
        let controle = true
            while(controle){
                console.log ("1. Alterar dados")
                console.log ("2. Sair")
                let opcao = Number(prompt ("Entre com sua opção: "))
                switch(opcao){
                    case 1: 
                        Admin.alteraDadosAdmin(admin)
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
    static alteraDadosAdmin(admin: Admin){
            let controle = true
            while(controle){
                console.log("1. Alterar nome de usuário")
                console.log("2. Alterar senha")
                console.log("3. Sair")
                const opcao = Number(prompt("Entre com sua opção: "))
                switch(opcao){
                    case 1: // alterar nome de usuário
                        const novoUserName = (prompt ("Novo nome de usuário: ") ?? "")?.trim() // OPERADOR 'COALESCÊNCIA NULA (??) - O OPERADOR VERIFICA SE O VALOR À ESQUERDA É NULL OU UNDEFINED; SE SIM, RETORNA O VALOR À DIREITA ("")
                        const testeUserName = Usuario.procuraUsuarioUserName(novoUserName)

                        if (!testeUserName){
                            admin._userName=novoUserName
                            console.log("Nome de usuário alterado com sucesso.")
                        }
                        break;
                    case 2: //Alterar senha
                        const senhaAtual = (prompt("Informe a senha atual:") ?? "")?.trim()
                        if (senhaAtual===admin._senha){
                            console.log("Senha correta!")
                            const novaSenha = (prompt("Entre com a nova senha: ")?? "")
                            admin._senha=novaSenha;
                            console.log("Senha alterada com sucesso.")
                        } else {
                            console.log("Senha incorreta.")
                        }
                        break;
                    case 3: 
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