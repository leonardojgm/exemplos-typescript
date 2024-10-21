var Quadrado = /** @class */ (function () {
    function Quadrado(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    Quadrado.prototype.calculaArea = function () {
        return this.altura * this.largura;
    };
    return Quadrado;
}());
var Trapezio = /** @class */ (function () {
    function Trapezio(altura, largura, baseMaior) {
        this.altura = altura;
        this.largura = largura + baseMaior;
    }
    Trapezio.prototype.calculaArea = function () {
        return (this.altura * this.largura) / 2;
    };
    return Trapezio;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    Triangulo.prototype.calculaArea = function () {
        return (this.altura * this.largura) / 2;
    };
    return Triangulo;
}());
var quadrado = new Quadrado(5, 5);
var retangulo = new Quadrado(5, 3);
var triangulo = new Triangulo(3, 6);
var trapezio = new Trapezio(4, 3, 5);
console.log("Área do quadrado: " + quadrado.calculaArea());
console.log("Área do retângulo: " + retangulo.calculaArea());
console.log("Área do triângulo: " + triangulo.calculaArea());
console.log("Área do trapézio: " + trapezio.calculaArea());
