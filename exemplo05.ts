function MediaNotas(nota1:number, nota2:number, nota3:number, nota4:number): number {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

console.log("Nota 1. trimestre: 8");
console.log("Nota 2. trimestre: 7");
console.log("Nota 3. trimestre: 9.5");
console.log("Nota 4. trimestre: 8.5");
console.log("Média: " + MediaNotas(8, 7, 9.5, 8.5));