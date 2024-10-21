"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function mensagem22(texto) {
    return function (parametro) {
        console.log(texto);
    };
}
let exemplo22 = class exemplo22 {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
    }
    exibe() {
        console.log("Nome: " + this.nome + "\n" +
            "Código: " + this.codigo);
    }
};
exemplo22 = __decorate([
    mensagem22("Esta é a mensagem do decorator...")
], exemplo22);
var objeto22 = new exemplo22("Willian", 1234);
objeto22.exibe();
