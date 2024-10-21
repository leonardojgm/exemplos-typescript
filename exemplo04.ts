function Potencia (base: number, expoente: number = 2): number {
    var resultado = 1;

    for (var contador: number = 1; contador <= expoente; contador++) {
        resultado = resultado * base;
    }

    return resultado;
}

console.log("4^2 = " + Potencia(4));
console.log("4^3 = " + Potencia(4, 3));
