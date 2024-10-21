function fncPromessa() : Promise<void> {
    return new Promise<void> ((sucesso : () => void, erro : () => void) => {
        function processar() {
            for (let contador = 1; contador <= 10; contador++) {
                console.log("Contador: " + contador);
            }

            console.log("Função processar() em execução...");
            sucesso();
        }

        setTimeout(processar, 2000);
    });
}

async function invocaPromessa() {
    console.log("Invocando fncPromessa()...");
    await fncPromessa();
    await fncPromessa();
    console.log("Execução de fncPromessa() finalizada...");
}

async function executar() {
    console.log("Início da execução do programa...");
    await invocaPromessa();
    console.log("Fim da execução do programa...");
}

executar();