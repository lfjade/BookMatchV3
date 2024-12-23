"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./Classes/Usuario");
const novoUsuario = new Usuario_1.Usuario("Jade Lacerda Fernandes", "jadeusa", "028.529.980.84", "123", false);
const teste = Usuario_1.Usuario.procuraUsuarioUserName("jadeusa");
console.log(teste);
