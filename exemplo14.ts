class CEP {
    private cep: string;

    constructor(cep: string) {
        this.cep = cep;

        if (!this.validarCEP(cep)) {
            throw new Error("CEP inválido");
        }
    }

    validarCEP(cep: string): boolean {
        var expressaoRegular = /^\d{5}-\d{3}$/;

        return expressaoRegular.test(cep);
    }

    getCEP(): string {
        return this.cep;
    }
}

class Endereco {
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private bairro: string;
    private cidade: string;
    private estado: string;
    private cep: CEP;

    constructor(logradouro: string, numero: string, complemento: string, bairro: string, cidade: string, estado: string, cep: CEP) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
}

class Pessoa {
    private nome: string;
    private endereco: Endereco;
    private telefone: string;
    private email: string;

    constructor(nome: string, endereco: Endereco, telefone: string, email: string) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
    }
}

class Sexo {
    private sexo: string;

    constructor(sexo: string) {
        this.sexo = sexo;

        if (!this.validarSexo(sexo)) {
            throw new Error("Sexo inválido");
        }
    }

    validarSexo(sexo: string): boolean {
        return ((sexo.toUpperCase() == "M") || (sexo.toUpperCase() == "F"));
    }

    getSexo(): string {
        return this.sexo;
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

class PessoaFisica extends Pessoa {
    private numeroRG: string;
    private numeroCPF: string;
    private sexo: Sexo;
    private dataNascimento: Data;

    constructor(nome: string, endereco: Endereco, telefone: string, email: string, numeroRG: string, numeroCPF: string, sexo: Sexo, dataNascimento: Data) {
        super(nome, endereco, telefone, email);
        this.numeroRG = numeroRG;
        this.numeroCPF = numeroCPF;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
    }
}

class PessoaJuridica extends Pessoa {
    private cnpj: string;
    private inscricaoEstadual: string;
    private inscricaoMunicipal: string;
    private cnae: string;

    constructor(nome: string, endereco: Endereco, telefone: string, email: string, cnpj: string, inscricaoEstadual: string, inscricaoMunicipal: string, cnae: string) {
        super(nome, endereco, telefone, email);
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.inscricaoMunicipal = inscricaoMunicipal;
        this.cnae = cnae;
    }
}

var cliente = new PessoaFisica("Willian Pereira Alves", 
new Endereco("R. Alfa",
"205", 
"", 
"Centro", 
"São Paulo", 
"SP", 
new CEP("01000-001")), 
"(11) 9999-9999", 
"meuemail@meuprovedor.com.br", 
"10.200.300", 
"111.222.333-44", 
new Sexo("M"), 
new Data("16/07/1967"));

var fornecedor = new PessoaJuridica("Distribuidora de Livros BookNews",
new Endereco("Av. da Saudade",
"100",
"",
"Jd. Aclimação",
"Atibaia",
"SP",
new CEP("12940-000")),
"(99) 1234-4567",
"contatos@sitebooknews.com.br",
"11.222.333/4444-55",
"111.222.333.444",
"",
"1000-00-0");

console.log(cliente);
console.log(fornecedor);