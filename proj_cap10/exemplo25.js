"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classe25(constructor) {
    console.log("Nome da classe: " + constructor.name);
    console.log("Estrutura da classe: " + constructor);
}
function propriedade25(idClasse, idPropriedade) {
    console.log("Nome da propriedade: " + idPropriedade);
}
let exemplo25 = class exemplo25 {
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
};
__decorate([
    propriedade25
], exemplo25.prototype, "codigo", void 0);
exemplo25 = __decorate([
    classe25
], exemplo25);
var objeto25 = new exemplo25("Willian", 1234);
console.log("Código: " + objeto25.Codigo + "\n" +
    "Nome: " + objeto25.Nome);
