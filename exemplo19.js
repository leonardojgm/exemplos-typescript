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
var Contas = /** @class */ (function () {
    function Contas() {
    }
    Object.defineProperty(Contas.prototype, "DataLancamento", {
        get: function () {
            return this.dataLancamento;
        },
        set: function (data) {
            this.dataLancamento = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contas.prototype, "ValorLancamento", {
        get: function () {
            return this.valorLancamento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contas.prototype, "VlorLancamento", {
        set: function (valor) {
            this.valorLancamento = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contas.prototype, "NumeroDocumento", {
        get: function () {
            return this.numeroDocumento;
        },
        set: function (numero) {
            this.numeroDocumento = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contas.prototype, "DataVencimento", {
        get: function () {
            return this.dataVencimento;
        },
        set: function (data) {
            this.dataVencimento = data;
        },
        enumerable: false,
        configurable: true
    });
    return Contas;
}());
var ContasPagar = /** @class */ (function (_super) {
    __extends(ContasPagar, _super);
    function ContasPagar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ContasPagar.prototype, "NomeFavorecido", {
        get: function () {
            return this.nomeFavorecido;
        },
        set: function (nome) {
            this.nomeFavorecido = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContasPagar.prototype, "DataPagamento", {
        get: function () {
            return this.dataPagamento;
        },
        set: function (data) {
            this.dataPagamento = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContasPagar.prototype, "ValorPago", {
        get: function () {
            return this.valorPago;
        },
        set: function (valor) {
            this.valorPago = valor;
        },
        enumerable: false,
        configurable: true
    });
    return ContasPagar;
}(Contas));
var ContasReceber = /** @class */ (function (_super) {
    __extends(ContasReceber, _super);
    function ContasReceber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ContasReceber.prototype, "NomeCliente", {
        get: function () {
            return this.nomeCliente;
        },
        set: function (nome) {
            this.nomeCliente = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContasReceber.prototype, "DataRecebimento", {
        get: function () {
            return this.dataRecebimento;
        },
        set: function (data) {
            this.dataRecebimento = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContasReceber.prototype, "ValorRecebido", {
        get: function () {
            return this.valorRecebido;
        },
        set: function (valor) {
            this.valorRecebido = valor;
        },
        enumerable: false,
        configurable: true
    });
    return ContasReceber;
}(Contas));
