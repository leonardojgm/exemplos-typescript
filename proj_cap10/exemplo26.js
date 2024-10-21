"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classe26(constructor) {
    console.log("Nome da classe: " + constructor.name);
    console.log("Estrutura da classe: " + constructor);
}
function propriedade26(idClasse, idPropriedade) {
    console.log("Nome da propriedade: " + idPropriedade);
}
function metodo26(idClasse, idMetodo, descritortodo) {
    console.log("Nome do método: " + idMetodo);
}
let exemplo26 = class exemplo26 {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
    }
    get Nome() {
        return this.nome;
    }
    get Codigo() {
        return this.codigo;
    }
    exibir(texto) {
        console.log(texto + "!\n" + this.codigo + " - " + this.nome);
    }
};
__decorate([
    propriedade26
], exemplo26.prototype, "codigo", void 0);
__decorate([
    metodo26
], exemplo26.prototype, "exibir", null);
exemplo26 = __decorate([
    classe26
], exemplo26);
var objeto26 = new exemplo26("Willian", 1234);
objeto26.exibir("Olá, bom dia");
console.log("Código: " + objeto26.Codigo + "\n" +
    "Nome: " + objeto26.Nome);
