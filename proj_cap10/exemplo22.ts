function mensagem22(texto: string) {
    return function (parametro: Function){
        console.log(texto);
    }
}

@mensagem22("Esta é a mensagem do decorator...")
class exemplo22 {
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

var objeto22 = new exemplo22("Willian", 1234);

objeto22.exibe();