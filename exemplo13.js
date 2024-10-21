var Placa = /** @class */ (function () {
    function Placa(numeroPlaca) {
        this.numeroPlaca = numeroPlaca;
        if (!this.validaPlaca(numeroPlaca)) {
            throw new Error("Placa do veículo inválida");
        }
    }
    Placa.prototype.validaPlaca = function (placa) {
        var expresaoRegular = /^[A-Z, a-z]{3}-\d{4}$/;
        if (expresaoRegular.test(placa)) {
            return true;
        }
        else {
            return false;
        }
    };
    Placa.prototype.getPlaca = function () {
        return this.numeroPlaca;
    };
    return Placa;
}());
var Data = /** @class */ (function () {
    function Data(dataInclusao) {
        this.dataInclusao = dataInclusao;
        if (!this.validaData(dataInclusao)) {
            throw new Error("Data de inclusão inválida");
        }
    }
    Data.prototype.validaData = function (data) {
        var expresaoRegular = /^[0-9]{2}[-\/][0-9]{2}[-\/][0-9]{4}$/;
        if (expresaoRegular.test(data)) {
            return true;
        }
        else {
            return false;
        }
    };
    Data.prototype.getData = function () {
        return this.dataInclusao;
    };
    return Data;
}());
var Diaria = /** @class */ (function () {
    function Diaria(valorDiaria) {
        this.valorDiaria = valorDiaria;
        if (!this.validaDiaria(valorDiaria)) {
            throw new Error("Valor da diária inválido");
        }
    }
    Diaria.prototype.validaDiaria = function (valor) {
        if (valor > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Diaria.prototype.getDiaria = function () {
        return this.valorDiaria;
    };
    return Diaria;
}());
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
    }
    Veiculo.prototype.getMarcaVeiculo = function () {
        return this.marcaVeiculo;
    };
    Veiculo.prototype.getModeloVeiculo = function () {
        return this.modeloVeiculo;
    };
    Veiculo.prototype.getPlacaVeiculo = function () {
        return this.placaVeiculo.getPlaca();
    };
    Veiculo.prototype.getTipoVeiculo = function () {
        return this.tipoVeiculo;
    };
    Veiculo.prototype.getCorVeiculo = function () {
        return this.corVeiculo;
    };
    Veiculo.prototype.getAnoVeiculo = function () {
        return this.anoVeiculo;
    };
    Veiculo.prototype.getCombustivelVeiculo = function () {
        return this.combustivelVeiculo;
    };
    Veiculo.prototype.getDataInclusao = function () {
        return this.dataInclusao.getData();
    };
    Veiculo.prototype.getValorDiaria = function () {
        return this.valorDiaria.getDiaria();
    };
    return Veiculo;
}());
var veiculo = new Veiculo("Mercedes-Benz", "C-180", new Placa("MBZ-0123"), "Sedã", "Prata", 2017, "Diesel", new Data("15/05/2018"), new Diaria(180));
console.log(veiculo.getMarcaVeiculo() + "\n" +
    veiculo.getModeloVeiculo() + "\n" +
    veiculo.getPlacaVeiculo() + "\n" +
    veiculo.getTipoVeiculo() + "\n" +
    veiculo.getCorVeiculo() + "\n" +
    veiculo.getAnoVeiculo() + "\n" +
    veiculo.getCombustivelVeiculo() + "\n" +
    veiculo.getDataInclusao() + "\n" +
    veiculo.getValorDiaria());
