interface IImpressao {
    imprimir(valor: number) : void;
    imprimir(valor: string) : void;
    imprimir(valor: (string | number)) : void;
}

class ImpressaoValores implements IImpressao {
    private valorString: string;
    private valorNumber: number;

    imprimir(valor: number): void;
    imprimir(valor: string): void;
    imprimir(valor: string | number): void {
        switch (typeof valor) {
            case "string": console.log("Texto da mensagem: " + valor); 
                break;
            case "number": console.log("Código da mensagem: " + valor);
                break;
        }
    }
}

var imprimeValor = new ImpressaoValores;

imprimeValor.imprimir("William Pereira Alves");
imprimeValor.imprimir(1800);