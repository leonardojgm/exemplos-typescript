function mensagemExemplo21(parametro: Function) {
    console.log("Decorator foi executado!");
}

@mensagemExemplo21
class exemplo21 {
    private nome : string;
    private codigo: number;

    constructor(nome: string, codigo: number) {
        this.nome = nome;
        this.codigo = codigo;
    }

    exibe() {
        console.log("Nome: " + this.nome + "\n" +
                    "Código: " + this.codigo);
    }
}

var objeto21 = new exemplo21("Willian", 1234);

objeto21.exibe();