"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function mensagemExemplo23(parametro) {
    console.log("Decorator foi executado!" + "\n" +
        "Estrutura da classe: " + "\n" +
        parametro);
}
let exemplo23 = class exemplo23 {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
    }
    exibe() {
        console.log("Nome: " + this.nome + "\n" +
            "Código: " + this.codigo);
    }
};
exemplo23 = __decorate([
    mensagemExemplo23
], exemplo23);
var objeto23 = new exemplo23("Willian", 1234);
objeto23.exibe();
