"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fncPromessa() {
    return new Promise((sucesso, erro) => {
        function processar() {
            for (let contador = 1; contador <= 10; contador++) {
                console.log("Contador: " + contador);
            }
            console.log("Função processar() em execução...");
            sucesso();
        }
        setTimeout(processar, 2000);
    });
}
function invocaPromessa() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Invocando fncPromessa()...");
        yield fncPromessa();
        yield fncPromessa();
        console.log("Execução de fncPromessa() finalizada...");
    });
}
function executar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Início da execução do programa...");
        yield invocaPromessa();
        console.log("Fim da execução do programa...");
    });
}
executar();
