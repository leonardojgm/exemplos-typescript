class Veiculo {
    private marcaVeiculo: string;
    private modeloVeiculo: string;
    private placaVeiculo: string;
    private tipoVeiculo: string;
    private corVeiculo: string;
    private anoVeiculo: number;
    private combustivelVeiculo: string;
    private dataInclusao: string;
    private valorDiaria: number;

    constructor(marcaVeiculo: string, modeloVeiculo: string, placaVeiculo: string, tipoVeiculo: string, corVeiculo: string, anoVeiculo: number, combustivelVeiculo: string, 
        dataInclusao: string, valorDiaria: number) {
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

    validaPlaca(placa: string): boolean {
        var expresaoRegular = /^[A-Z, a-z]{3}-\d{4}$/;

        if (expresaoRegular.test(placa)) {
            return true;
        } else {
            return false;
        }
    }

    validaData(data: string): boolean {
        var expresaoRegular = /^[0-9]{2}[-\/][0-9]{2}[-\/][0-9]{4}$/;

        if (expresaoRegular.test(data)) {
            return true;
        } else {
            return false;
        }
    }

    validaDiaria(valor: number): boolean {
        if (valor > 0) {
            return true;
        } else {
            return false;
        }
    }
}

var veiculo = new Veiculo ("Mercedes-Benz",
"C-180",
"MBZ-0123",
"Sedã",
"Prata",
2017,
"Diesel",
"15/05/2018",
180);

console.log(veiculo);