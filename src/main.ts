import { Usuario } from "./Classes/Usuario";
import PromptSync = require("prompt-sync");
import { acervo } from "./utils/acervo";
import { menuUsuario } from "./utils/menuUsuario";
import { Genero } from "./Classes/Genero";
import { Livro } from "./Classes/Livro";
import { Locacao } from "./Classes/Locacao";
import { Admin } from "./Classes/Admin";
// -------------- TESTES --------------
// const novoUsuario = new Usuario ("Jade Lacerda Fernandes", "jadeusa", "028.529.980.84", "123", false)
// const teste = Usuario.procuraUsuarioUserName("jadeusa")
// console.log(teste)


// --------------------- INSTANCIANDO USUARIOS ------------------

const usuarios = [
    new Usuario("Jade Lacerda Fernandes", "jadeusa", "028.529.980.84", "123", false),
    new Usuario("Lucas Andrade Silva", "lucasand", "123.456.789.00", "senha123", false),
    new Usuario("Ana Beatriz Souza", "anabia", "987.654.321.11", "abc123", false),
    new Admin("carlosadmin", "admin123"), // Admin
    new Usuario("Mariana Lopes Ferreira", "marifer", "321.654.987.33", "senha1234", false),
    new Usuario("João Victor Monteiro", "joaovic", "789.321.654.44", "joaosenha", false),
    new Admin("gabrielaadmin", "gabi2024"), // Admin
    new Usuario("Pedro Henrique Matos", "pedrohm", "234.567.890.66", "pedrosenha", false),
    new Usuario("Isabela Farias Nunes", "isafn", "111.222.333.77", "isabella123", false),
    new Admin("rafaeladmin", "admin321") // Admin
  ];

// -------------- INSTANCIAS GENEROS ----------------

const generos = [
    new Genero("Fantasia"),
    new Genero("Ficção Científica"),
    new Genero("Romance"),
    new Genero("Terror"),
    new Genero("Suspense"),
    new Genero("Drama"),
    new Genero("Aventura"),
    new Genero("História"),
    new Genero("Poesia"),
    new Genero("Biografia")
  ];

// -------------------- INSTANCIANDO LIVROS -------------------
const livros = [
    new Livro(
      "O Senhor dos Anéis: A Sociedade do Anel",
      "J.R.R. Tolkien",
      [new Genero("Fantasia"), new Genero("Aventura")],
      "HarperCollins",
      "1ª Edição",
      new Date("1954-07-29")
    ),
    new Livro(
      "Duna",
      "Frank Herbert",
      [new Genero("Ficção Científica"), new Genero("Aventura")],
      "Chilton Books",
      "1ª Edição",
      new Date("1965-08-01")
    ),
    new Livro(
      "1984",
      "George Orwell",
      [new Genero("Ficção Científica"), new Genero("Drama")],
      "Secker & Warburg",
      "1ª Edição",
      new Date("1949-06-08")
    ),
    new Livro(
      "Orgulho e Preconceito",
      "Jane Austen",
      [new Genero("Romance"), new Genero("Drama")],
      "T. Egerton",
      "1ª Edição",
      new Date("1813-01-28")
    ),
    new Livro(
      "Drácula",
      "Bram Stoker",
      [new Genero("Terror"), new Genero("Suspense")],
      "Archibald Constable and Company",
      "1ª Edição",
      new Date("1897-05-26")
    ),
    new Livro(
      "O Código Da Vinci",
      "Dan Brown",
      [new Genero("Suspense"), new Genero("Aventura")],
      "Doubleday",
      "1ª Edição",
      new Date("2003-03-18")
    ),
    new Livro(
      "Harry Potter e a Pedra Filosofal",
      "J.K. Rowling",
      [new Genero("Fantasia"), new Genero("Aventura")],
      "Bloomsbury",
      "1ª Edição",
      new Date("1997-06-26")
    ),
    new Livro(
      "Dom Casmurro",
      "Machado de Assis",
      [new Genero("Romance"), new Genero("Drama")],
      "Typographia Nacional",
      "1ª Edição",
      new Date("1899-01-01")
    ),
    new Livro(
      "O Hobbit",
      "J.R.R. Tolkien",
      [new Genero("Fantasia"), new Genero("Aventura")],
      "George Allen & Unwin",
      "1ª Edição",
      new Date("1937-09-21")
    ),
    new Livro(
      "A Metamorfose",
      "Franz Kafka",
      [new Genero("Drama"), new Genero("Ficção Científica")],
      "Kurt Wolff Verlag",
      "1ª Edição",
      new Date("1915-10-01")
    ),
    new Livro(
      "O Pequeno Príncipe",
      "Antoine de Saint-Exupéry",
      [new Genero("Fábula"), new Genero("Poesia")],
      "Reynal & Hitchcock",
      "1ª Edição",
      new Date("1943-04-06")
    ),
    new Livro(
      "Sherlock Holmes: Um Estudo em Vermelho",
      "Arthur Conan Doyle",
      [new Genero("Suspense"), new Genero("Mistério")],
      "Ward, Lock & Co",
      "1ª Edição",
      new Date("1887-11-01")
    ),
    new Livro(
      "It: A Coisa",
      "Stephen King",
      [new Genero("Terror"), new Genero("Suspense")],
      "Viking Press",
      "1ª Edição",
      new Date("1986-09-15")
    ),
    new Livro(
      "Os Miseráveis",
      "Victor Hugo",
      [new Genero("Drama"), new Genero("História")],
      "A. Lacroix, Verboeckhoven & Cie",
      "1ª Edição",
      new Date("1862-04-03")
    ),
    new Livro(
      "O Nome da Rosa",
      "Umberto Eco",
      [new Genero("Suspense"), new Genero("História")],
      "Bompiani",
      "1ª Edição",
      new Date("1980-11-01")
    ),
    new Livro(
      "Cem Anos de Solidão",
      "Gabriel García Márquez",
      [new Genero("Drama"), new Genero("Realismo Mágico")],
      "Editorial Sudamericana",
      "1ª Edição",
      new Date("1967-06-05")
    ),
    new Livro(
      "A Divina Comédia",
      "Dante Alighieri",
      [new Genero("Poesia"), new Genero("Fantasia")],
      "Nenhuma (Publicado originalmente em manuscrito)",
      "1ª Edição",
      new Date("1320-01-01")
    ),
    new Livro(
      "Admirável Mundo Novo",
      "Aldous Huxley",
      [new Genero("Ficção Científica"), new Genero("Drama")],
      "Chatto & Windus",
      "1ª Edição",
      new Date("1932-08-01")
    ),
    new Livro(
      "Memórias Póstumas de Brás Cubas",
      "Machado de Assis",
      [new Genero("Romance"), new Genero("Drama")],
      "Typographia Nacional",
      "1ª Edição",
      new Date("1881-01-01")
    ),
    new Livro(
      "A Guerra dos Mundos",
      "H.G. Wells",
      [new Genero("Ficção Científica"), new Genero("Aventura")],
      "William Heinemann",
      "1ª Edição",
      new Date("1898-01-01")
    )
  ];


  // ------------------ INSTANCIANDO LOCAÇÕES --------------- 

  const locacoes = [
    // Livros devolvidos
    (() => {
      const locacao = new Locacao(livros[0], usuarios[1]);
      locacao.dataDevolucao = new Date("2024-01-15");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[1], usuarios[2]);
      locacao.dataDevolucao = new Date("2024-01-20");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[2], usuarios[3]);
      locacao.dataDevolucao = new Date("2024-02-01");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[3], usuarios[4]);
      locacao.dataDevolucao = new Date("2024-02-10");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[4], usuarios[5]);
      locacao.dataDevolucao = new Date("2024-03-01");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[5], usuarios[6]);
      locacao.dataDevolucao = new Date("2024-03-15");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[6], usuarios[7]);
      locacao.dataDevolucao = new Date("2024-04-01");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[7], usuarios[8]);
      locacao.dataDevolucao = new Date("2024-04-20");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[8], usuarios[9]);
      locacao.dataDevolucao = new Date("2024-05-01");
      return locacao;
    })(),
    (() => {
      const locacao = new Locacao(livros[9], usuarios[0]);
      locacao.dataDevolucao = new Date("2024-05-15");
      return locacao;
    })(),
  
    // Livros não devolvidos
    new Locacao(livros[10], usuarios[1]),
    new Locacao(livros[11], usuarios[2]),
    new Locacao(livros[12], usuarios[3]),
    new Locacao(livros[13], usuarios[4]),
    new Locacao(livros[14], usuarios[5]),
    new Locacao(livros[15], usuarios[6]),
    new Locacao(livros[16], usuarios[7]),
    new Locacao(livros[17], usuarios[8]),
    new Locacao(livros[18], usuarios[9]),
    new Locacao(livros[19], usuarios[0])
  ];


const prompt = PromptSync();
let controle = true
while (controle){
    console.log("Bem vindo ao BookMatch!")
    console.log("1. Login")
    console.log("2. Registre-se")
    console.log("3. Acervo")
    console.log("4. Sair")

    const opcao = Number(prompt("Entre com sua opção:"))
    switch(opcao){
        case 1: // login
        const userName = prompt("Nome de usuário: ")
        const senha = prompt("Senha: ")
        const login = Usuario.login(userName, senha) // aqui ainda não abriu a possibilidade de entrar no menu usuário ou menu admin; apenas printa a mensagem de boas vindas ou senha inválida.
        if(login?.verificaAdmin === false) {
            menuUsuario(login)
        } else if (login?.verificaAdmin === true){
            //menuAdmin(login)
        }
        break;
        case 2:
        Usuario.cadastroInterativo();
        break;
        case 3:
        acervo()
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