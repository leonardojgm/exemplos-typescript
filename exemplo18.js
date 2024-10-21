var ImpressaoValores = /** @class */ (function () {
    function ImpressaoValores() {
    }
    ImpressaoValores.prototype.imprimir = function (valor) {
        switch (typeof valor) {
            case "string":
                console.log("Texto da mensagem: " + valor);
                break;
            case "number":
                console.log("Código da mensagem: " + valor);
                break;
        }
    };
    return ImpressaoValores;
}());
var imprimeValor = new ImpressaoValores;
imprimeValor.imprimir("William Pereira Alves");
imprimeValor.imprimir(1800);
