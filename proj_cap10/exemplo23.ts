function mensagemExemplo23(parametro: Function) {
    console.log("Decorator foi executado!" + "\n" +
                "Estrutura da classe: " + "\n" + 
                parametro);
}

@mensagemExemplo23
class exemplo23 {
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

var objeto23 = new exemplo23("Willian", 1234);

objeto23.exibe();