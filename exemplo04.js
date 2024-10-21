function Potencia(base, expoente) {
    if (expoente === void 0) { expoente = 2; }
    var resultado = 1;
    for (var contador = 1; contador <= expoente; contador++) {
        resultado = resultado * base;
    }
    return resultado;
}
console.log("4^2 = " + Potencia(4));
console.log("4^3 = " + Potencia(4, 3));
