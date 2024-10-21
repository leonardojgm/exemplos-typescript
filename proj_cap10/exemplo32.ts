function fncPromessa3() : Promise<void> {
    return new Promise<void> ((sucesso : () => void, erro : () => void) => {
        function processar() {
            console.log("Função processar() em execução...");
            sucesso();
        }

        setTimeout(processar, 2000);
    });
}

async function invocaPromessa3() {
    console.log("Invocando fncPromessa()...");
    await fncPromessa();
    console.log("Execução de fncPromessa() finalizada...");
}

async function executar3() {
    console.log("Início da execução do programa...");
    await invocaPromessa();
    console.log("Fim da execução do programa...");
}

executar();