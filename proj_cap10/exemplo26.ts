function classe26(constructor: Function) {
    console.log("Nome da classe: " + constructor.name);
    console.log("Estrutura da classe: " + constructor);
}

function propriedade26(idClasse: any, idPropriedade: any) {
    console.log("Nome da propriedade: " + idPropriedade);
}

function metodo26(idClasse: any, idMetodo: any, descritortodo?: PropertyDescriptor) {
    console.log("Nome do método: " + idMetodo);
}

@classe26
class exemplo26 {
    @propriedade26
    private codigo: number;
    private nome:string;

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

    @metodo26
    exibir(texto: string) {
        console.log(texto + "!\n" + this.codigo + " - " + this.nome);
    }
}

var objeto26 = new exemplo26("Willian", 1234);

objeto26.exibir("Olá, bom dia");

console.log("Código: " + objeto26.Codigo + "\n" +
            "Nome: " + objeto26.Nome);