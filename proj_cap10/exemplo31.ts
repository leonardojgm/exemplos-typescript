function fncPromessa2() : Promise<void> {
    return new Promise<void> ((sucesso : () => void, erro : () => void) => {
        function processar() {
            console.log("Função processar() em execução...");
            sucesso();
        }

        setTimeout(processar, 2000);
    });
}

function invocaPromessa2() {
    console.log("Invocando fncPromessa()...");
    fncPromessa();
    console.log("Execução de fncPromessa() finalizada...");
}

function executar2() {
    console.log("Início da execução do programa...");
    invocaPromessa();
    console.log("Fim da execução do programa...");
}

executar();