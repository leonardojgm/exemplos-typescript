var Veiculo = /** @class */ (function () {
    function Veiculo(marcaVeiculo, modeloVeiculo, placaVeiculo, tipoVeiculo, corVeiculo, anoVeiculo, combustivelVeiculo, dataInclusao, valorDiaria) {
        this.marcaVeiculo = marcaVeiculo;
        this.modeloVeiculo = modeloVeiculo;
        this.placaVeiculo = placaVeiculo;
        this.tipoVeiculo = tipoVeiculo;
        this.corVeiculo = corVeiculo;
        this.anoVeiculo = anoVeiculo;
        this.combustivelVeiculo = combustivelVeiculo;
        this.dataInclusao = dataInclusao;
        this.valorDiaria = valorDiaria;
        if (!this.validaPlaca(placaVeiculo)) {
            throw new Error("Placa do veículo inválida");
        }
        if (!this.validaData(dataInclusao)) {
            throw new Error("Data de inclusão inválida");
        }
        if (!this.validaDiaria(valorDiaria)) {
            throw new Error("Valor da diária inválido");
        }
    }
    Veiculo.prototype.validaPlaca = function (placa) {
        var expresaoRegular = /^[A-Z, a-z]{3}-\d{4}$/;
        if (expresaoRegular.test(placa)) {
            return true;
        }
        else {
            return false;
        }
    };
    Veiculo.prototype.validaData = function (data) {
        var expresaoRegular = /^[0-9]{2}[-\/][0-9]{2}[-\/][0-9]{4}$/;
        if (expresaoRegular.test(data)) {
            return true;
        }
        else {
            return false;
        }
    };
    Veiculo.prototype.validaDiaria = function (valor) {
        if (valor > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Veiculo;
}());
var veiculo = new Veiculo("Mercedes-Benz", "C-180", "MBZ-0123", "Sedã", "Prata", 2017, "Diesel", "15/05/2018", 180);
console.log(veiculo);
