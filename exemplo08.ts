function ImprimirMensagem(textoMensagem: string): boolean;
function ImprimirMensagem(codigoMensagem: number): boolean;
function ImprimirMensagem(valor: (string | number)): boolean {
    var retorno: boolean = true;

    switch(typeof valor) {
        case "string": console.log(valor);
            break;
        case "number": switch(valor) {
            case 1: console.log("Natureza de operação inválida!");
                break;
            case 2: console.log("Classificação fiscal inválida!");
                break;
            case 3: console.log("Código de munincípio inválido!");
                break;
            case 4: console.log("CPF inválido!");	
                break;
            case 5: console.log("CNPJ inválido!");
                break;
            case 6: console.log("I.E. inválido!");
                break;
            default: console.log("Parâmetro inválido!");
                return false;
        }
            break;
        default: console.log("Parâmetro inválido!");
            return false;
    }

    return retorno;
}

ImprimirMensagem(4);
ImprimirMensagem("Usuário não autorizado!");