function funcaoPromessa(status: number): Promise<string> {
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

function executaPromessa() {
    console.log("Exemplo de função promise (promessa)");

    funcaoPromessa(1) // 1 = sucesso, 2 = erro
        .then((strMensagem: string) => { console.log("Retorno em caso de sucesso: " + strMensagem); })
        .catch((strMensagem: string) => { console.log("Retorno em caso de erro: " + strMensagem); }
    );
}

console.log("Executando executarPromessa()...");
executaPromessa();
console.log("Fim da execução de executarPromessa()...");