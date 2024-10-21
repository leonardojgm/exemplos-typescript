function MediaNotas() {
    var notas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        notas[_i] = arguments[_i];
    }
    var soma = 0;
    for (var contador = 0; contador < notas.length; contador++) {
        soma += notas[contador];
    }
    return (soma / notas.length);
}
console.log("Nota 1. trimestre: 8");
console.log("Nota 2. trimestre: 7");
console.log("Média: " + MediaNotas(8, 7));
