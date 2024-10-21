function Fatorial(numero: number): number {
    let resultado: number = 1;

    while(numero > 1) {
        resultado *= numero;

        //console.log(resultado);
        //console.log(numero);

        numero--;
    }

    return resultado;
}

console.log("Fatorial de 5 é: " + Fatorial(5));