var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CEP = /** @class */ (function () {
    function CEP(cep) {
        this.cep = cep;
        if (!this.validarCEP(cep)) {
            throw new Error("CEP inválido");
        }
    }
    CEP.prototype.validarCEP = function (cep) {
        var expressaoRegular = /^\d{5}-\d{3}$/;
        return expressaoRegular.test(cep);
    };
    CEP.prototype.getCEP = function () {
        return this.cep;
    };
    return CEP;
}());
var Endereco = /** @class */ (function () {
    function Endereco(logradouro, numero, complemento, bairro, cidade, estado, cep) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
    return Endereco;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, endereco, telefone, email) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
    }
    return Pessoa;
}());
var Sexo = /** @class */ (function () {
    function Sexo(sexo) {
        this.sexo = sexo;
        if (!this.validarSexo(sexo)) {
            throw new Error("Sexo inválido");
        }
    }
    Sexo.prototype.validarSexo = function (sexo) {
        return ((sexo.toUpperCase() == "M") || (sexo.toUpperCase() == "F"));
    };
    Sexo.prototype.getSexo = function () {
        return this.sexo;
    };
    return Sexo;
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
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, endereco, telefone, email, numeroRG, numeroCPF, sexo, dataNascimento) {
        var _this = _super.call(this, nome, endereco, telefone, email) || this;
        _this.numeroRG = numeroRG;
        _this.numeroCPF = numeroCPF;
        _this.sexo = sexo;
        _this.dataNascimento = dataNascimento;
        return _this;
    }
    return PessoaFisica;
}(Pessoa));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, endereco, telefone, email, cnpj, inscricaoEstadual, inscricaoMunicipal, cnae) {
        var _this = _super.call(this, nome, endereco, telefone, email) || this;
        _this.cnpj = cnpj;
        _this.inscricaoEstadual = inscricaoEstadual;
        _this.inscricaoMunicipal = inscricaoMunicipal;
        _this.cnae = cnae;
        return _this;
    }
    return PessoaJuridica;
}(Pessoa));
var cliente = new PessoaFisica("Willian Pereira Alves", new Endereco("R. Alfa", "205", "", "Centro", "São Paulo", "SP", new CEP("01000-001")), "(11) 9999-9999", "meuemail@meuprovedor.com.br", "10.200.300", "111.222.333-44", new Sexo("M"), new Data("16/07/1967"));
var fornecedor = new PessoaJuridica("Distribuidora de Livros BookNews", new Endereco("Av. da Saudade", "100", "", "Jd. Aclimação", "Atibaia", "SP", new CEP("12940-000")), "(99) 1234-4567", "contatos@sitebooknews.com.br", "11.222.333/4444-55", "111.222.333.444", "", "1000-00-0");
console.log(cliente);
console.log(fornecedor);
