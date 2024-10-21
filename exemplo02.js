function CalcularJuros(capital, taxa, tempo) {
    var juros = (capital * taxa * tempo) / 100;
    return juros.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}
console.log("R$ 2500,00, a 2% ao ano, durante 5 anos => R$ " + CalcularJuros(2500, 2, 5));
var calcularJuros = function (capital, taxa, tempo) {
    var juros = (capital * taxa * tempo) / 100;
    return juros.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};
console.log("R$ 2500,00, a 2% ao ano, durante 5 anos => R$ " + calcularJuros(2500, 2, 5));
var calcularJuros = function (capital, taxa, tempo) {
    var juros = (capital * taxa * tempo) / 100;
    return juros.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};
console.log("R$ 2500,00, a 2% ao ano, durante 5 anos => R$ " + calcularJuros(2500, 2, 5));
