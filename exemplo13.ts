class Placa {
    private numeroPlaca: string;

    constructor(numeroPlaca: string) {
        this.numeroPlaca = numeroPlaca;
        
        if (!this.validaPlaca(numeroPlaca)) {
            throw new Error("Placa do veículo inválida");
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

    getPlaca(): string {
        return this.numeroPlaca;
    }
}

class Data {
    private dataInclusao: string;

    constructor(dataInclusao: string) {
        this.dataInclusao = dataInclusao;

        if (!this.validaData(dataInclusao)) {
            throw new Error("Data de inclusão inválida");
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

    getData(): string {
        return this.dataInclusao;
    }
}

class Diaria {
    private valorDiaria: number;

    constructor(valorDiaria: number) {
        this.valorDiaria = valorDiaria;

        if (!this.validaDiaria(valorDiaria)) {
            throw new Error("Valor da diária inválido");
        }
    }

    validaDiaria(valor: number): boolean {
        if (valor > 0) {
            return true;
        } else {
            return false;
        }
    }

    getDiaria(): number {
        return this.valorDiaria;
    }
}

class Veiculo {
    private marcaVeiculo: string;
    private modeloVeiculo: string;
    private placaVeiculo: Placa;
    private tipoVeiculo: string;
    private corVeiculo: string;
    private anoVeiculo: number;
    private combustivelVeiculo: string;
    private dataInclusao: Data;
    private valorDiaria: Diaria;

    constructor(marcaVeiculo: string, modeloVeiculo: string, placaVeiculo: Placa, tipoVeiculo: string, corVeiculo: string, anoVeiculo: number, combustivelVeiculo: string, 
        dataInclusao: Data, valorDiaria: Diaria) {
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

    getMarcaVeiculo(): string {
        return this.marcaVeiculo;
    }

    getModeloVeiculo(): string {
        return this.modeloVeiculo;
    }

    getPlacaVeiculo(): string {
        return this.placaVeiculo.getPlaca();  
    }

    getTipoVeiculo(): string {
        return this.tipoVeiculo;
    }

    getCorVeiculo(): string {
        return this.corVeiculo;
    }

    getAnoVeiculo(): number {
        return this.anoVeiculo;
    }

    getCombustivelVeiculo(): string {
        return this.combustivelVeiculo;
    }

    getDataInclusao(): string {
        return this.dataInclusao.getData();
    }

    getValorDiaria(): number {
        return this.valorDiaria.getDiaria();
    }
}

var veiculo = new Veiculo ("Mercedes-Benz",
"C-180",
new Placa("MBZ-0123"),
"Sedã",
"Prata",
2017,
"Diesel",
new Data("15/05/2018"),
new Diaria(180)
);

console.log(veiculo.getMarcaVeiculo() + "\n" +
            veiculo.getModeloVeiculo() + "\n" +
            veiculo.getPlacaVeiculo() + "\n" +
            veiculo.getTipoVeiculo() + "\n" +
            veiculo.getCorVeiculo() + "\n" +
            veiculo.getAnoVeiculo() + "\n" +
            veiculo.getCombustivelVeiculo() + "\n" +
            veiculo.getDataInclusao() + "\n" +
            veiculo.getValorDiaria());