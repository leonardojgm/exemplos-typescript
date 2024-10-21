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
function funcaoPromessaAsync(status) {
    return new Promise((sucesso, erro) => {
        function aguarda() {
            for (let contador = 1; contador <= 10; contador++) {
                console.log("Contador: " + contador);
            }
            if (status == 1) {
                sucesso("Executado com sucesso!");
            }
            else {
                erro("Erro na execução!");
            }
        }
        setTimeout(aguarda, 2000);
    });
}
function executaPromessaAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Exemplo de função promise (promessa)");
        try {
            yield funcaoPromessaAsync(1); // 1 = sucesso, 2 = erro
        }
        catch (strMensagem) {
            console.log("Retorno em caso de erro: " + strMensagem);
        }
    });
}
console.log("Executando executarPromessaAsync()...");
executaPromessaAsync();
console.log("Fim da execução de executarPromessaAsync()...");
