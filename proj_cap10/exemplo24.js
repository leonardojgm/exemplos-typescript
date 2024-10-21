"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function mensagemExemplo24(valor) {
    return function (parametro) {
        parametro.prototype.propriedade = valor;
        console.log("Nome da classe: " + parametro.name);
    };
}
let exemplo24 = class exemplo24 {
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
exemplo24 = __decorate([
    mensagemExemplo24("ativar_log")
], exemplo24);
var objeto24 = new exemplo24("Willian", 1234);
console.log("Nome: " + objeto24.Nome + "\n" +
    "Código: " + objeto24.Codigo + "\n" +
    "Valor propriedade: " + objeto24.propriedade);
