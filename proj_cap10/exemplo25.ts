function classe25(constructor: Function) {
    console.log("Nome da classe: " + constructor.name);
    console.log("Estrutura da classe: " + constructor);
}

function propriedade25(idClasse: any, idPropriedade: any) {
    console.log("Nome da propriedade: " + idPropriedade);
}

@classe25
class exemplo25 {
    @propriedade25
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
}

var objeto25 = new exemplo25("Willian", 1234);

console.log("Código: " + objeto25.Codigo + "\n" +
            "Nome: " + objeto25.Nome);