"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, userName, cpf, senha, verificaAdmin) {
        this._verificaAdmin = false;
        this._id = Usuario.contadorId++;
        this._nome = nome;
        this._userName = userName;
        this._cpf = cpf;
        this._senha = senha;
        this._verificaAdmin = verificaAdmin;
    }
    // penso que agora, ao registrar, deva-se verificar tanto se o cpf já está cadastrado quanto se o userName já está cadastrado.
    //Essa verificação pode se beneficiar do método procuraUsuario que eu estava desenvolvendo, e deve ser útil pra outros métodos ou funções depois
    static procuraUsuarioID() {
    }
    static procuraUsuarioNome(nome) {
        const testeNome = Usuario.listaUsuarios.find((el) => el._nome = nome);
        if (testeNome) {
            return testeNome._nome;
        }
        else {
            console.error("Usuário não encontrado.");
            return "";
        }
    }
    static procuraUsuarioUserName(userName) {
        // Lógica: recebe um user name, procura se existe na lista; se sim, retorna a string userName; se não, retorna a string vazia e printa no console "Usuário não encontrado."
        // preciso adicionar uma forma de pesquisar, tanto em usuário quanto em nome, considerando maiusculas e minusculas e tirando os espaços
        // ideia: limitar o userName para não ter espaços
        const normalizado = userName.toLowerCase().trim;
        const testeUserName = Usuario.listaUsuarios.find((el) => el._userName.toLowerCase().trim === normalizado);
        if (testeUserName) {
            return testeUserName._userName;
        }
        else {
            console.error("Usuário não encontrado.");
            return "";
        }
    }
    static procuraUsuarioCpf() {
    }
}
exports.Usuario = Usuario;
Usuario.contadorId = 1;
Usuario.listaUsuarios = [];
