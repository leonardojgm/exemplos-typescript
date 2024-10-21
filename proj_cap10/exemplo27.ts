class UnirValores<T extends string | number>{
    concatenar(valores: Array<T>) : string {
        var retorno: string = "";
        var soma: number = 0;

        for (var contador = 0; contador < valores.length; contador++) {
            if ((contador > 0) && (contador < valores.length)) {
                retorno += ", ";
            }

            if (typeof valores[contador] === "string") {
                retorno += valores[contador];
            }
            else if (typeof valores[contador] === "number") {
                soma += parseInt(valores[contador].toString());
            }
        }

        if (soma != 0)
        {
            retorno = soma.toString();
        }

        return retorno;
    }
}

var unirString = new UnirValores<string>();
var unirNumero = new UnirValores<number>();
var matrizString: string[] = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
var matrizNumero: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var valorString = unirString.concatenar(matrizString);
var valorNumero = unirNumero.concatenar(matrizNumero);

console.log("valorString: " + valorString);
console.log("valorNumero: " + valorNumero);