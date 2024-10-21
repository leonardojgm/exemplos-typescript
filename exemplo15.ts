interface ICalculoAreaPoligono {
    calculaArea(): number;
}

class Quadrado implements ICalculoAreaPoligono {
    private altura: number;
    private largura: number;

    constructor(altura: number, largura: number) {
        this.altura = altura;
        this.largura = largura;
    }

    calculaArea(): number {
        return this.altura * this.largura;
    }
}

class Trapezio implements ICalculoAreaPoligono {
    private altura: number;
    private largura: number;

    constructor(altura: number, largura: number, baseMaior: number) {
        this.altura = altura;
        this.largura = largura + baseMaior;
    }

    calculaArea(): number {
        return (this.altura * this.largura) / 2;
    }
}

class Triangulo implements ICalculoAreaPoligono {
    private altura: number;
    private largura: number;

    constructor(altura: number, largura: number) {
        this.altura = altura;
        this.largura = largura;
    }

    calculaArea(): number {
        return (this.altura * this.largura) / 2;
    }
}

var quadrado = new Quadrado(5, 5);
var retangulo = new Quadrado(5, 3);
var triangulo = new Triangulo(3, 6);
var trapezio = new Trapezio(4, 3, 5);

console.log("Área do quadrado: " + quadrado.calculaArea());
console.log("Área do retângulo: " + retangulo.calculaArea());
console.log("Área do triângulo: " + triangulo.calculaArea());
console.log("Área do trapézio: " + trapezio.calculaArea());
