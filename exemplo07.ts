function MediaNotas(...notas: number[]): number {
    var soma: number = 0;

    for(var contador = 0; contador < notas.length; contador++) {
        soma += notas[contador];
    }

    return (soma / notas.length);
}

console.log("Nota 1. trimestre: 8");
console.log("Nota 2. trimestre: 7");
console.log("Média: " + MediaNotas(8, 7));