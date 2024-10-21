var CoversaoUnidade = /** @class */ (function () {
    function CoversaoUnidade() {
    }
    CoversaoUnidade.polegada_centimetro = function (valor) {
        return valor * 2.54;
    };
    CoversaoUnidade.centimetro_polegada = function (valor) {
        return valor * 0.3937;
    };
    CoversaoUnidade.milha_quilometro = function (valor) {
        return valor * 1.609;
    };
    CoversaoUnidade.quilometro_milha = function (valor) {
        return valor * 0.6214;
    };
    CoversaoUnidade.galao_litro = function (valor) {
        return valor * 3.7854117;
    };
    CoversaoUnidade.litro_galao = function (valor) {
        return valor * 0.2642;
    };
    CoversaoUnidade.libra_quilograma = function (valor) {
        return valor * 0.4536;
    };
    CoversaoUnidade.quilograma_libra = function (valor) {
        return valor * 2.205;
    };
    CoversaoUnidade.acre_hectare = function (valor) {
        return valor * 0.4047;
    };
    CoversaoUnidade.hectare_acre = function (valor) {
        return valor * 2.471;
    };
    return CoversaoUnidade;
}());
console.log("5 pol. equivalem a " + CoversaoUnidade.polegada_centimetro(5) + " cm");
