function mensagemExemplo24(valor: string) {
    return function(parametro: Function) {
        parametro.prototype.propriedade = valor;

        console.log("Nome da classe: " + parametro.name);
    }
}

@mensagemExemplo24("ativar_log")
class exemplo24 {
    private nome : string;
    private codigo: number;

    constructor(nome: string, codigo: number) {
        this.nome = nome;
        this.codigo = codigo;
    }

    get Nome() {
        return this.nome;
    }

    get Codigo() {
        return this.codigo;
    }
}

var objeto24 = new exemplo24("Willian", 1234);

console.log("Nome: " + objeto24.Nome + "\n" +
            "Código: " + objeto24.Codigo + "\n" +
            "Valor propriedade: " + (<any>objeto24).propriedade);