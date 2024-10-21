function funcaoPromessaAsync(status: number): Promise<string> {
    return new Promise(
        (sucesso: (strMensagem: string) => void, 
        erro: (strMensagem: string) => void) => {
            function aguarda() {
                for (let contador = 1; contador <= 10; contador++) {
                    console.log("Contador: " + contador);
                }

                if (status == 1) {
                    sucesso("Executado com sucesso!");
                }
                else {
                    erro("Erro na execução!");
                }
            }

            setTimeout(aguarda, 2000);
        }    
    );
}

async function executaPromessaAsync() {
    console.log("Exemplo de função promise (promessa)");

    try {
        await funcaoPromessaAsync(1); // 1 = sucesso, 2 = erro
    }
    catch(strMensagem)
    {
        console.log("Retorno em caso de erro: " + strMensagem);
    }
}

console.log("Executando executarPromessaAsync()...");
executaPromessaAsync();
console.log("Fim da execução de executarPromessaAsync()...");