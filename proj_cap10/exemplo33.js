"use strict";
class UnirValores2 {
    concatenar(valores) {
        var retorno = "";
        var soma = 0;
        for (var contador = 0; contador < valores.length; contador++) {
            if ((contador > 0) && (contador < valores.length)) {
                retorno += ", ";
            }
            if (typeof valores[contador] === "string") {
                soma += parseInt(valores[contador].toString());
            }
            else if (typeof valores[contador] === "number") {
                soma += parseInt(valores[contador].toString());
            }
        }
        if (soma != 0) {
            retorno = soma.toString();
        }
        return retorno;
    }
}
var unirString2 = new UnirValores2();
var unirNumero2 = new UnirValores2();
var matrizString = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
var matrizNumero = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var valorString = unirString2.concatenar(matrizString);
var valorNumero = unirNumero2.concatenar(matrizNumero);
console.log("valorString: " + valorString);
console.log("valorNumero: " + valorNumero);
