"use strict";
function funcaoSecundaria(funcaoAuxiliar) {
    function gastaTempo() {
        console.log("Início da execução da função gastaTempo()...");
        funcaoAuxiliar();
        console.log("Fim da execução da função gastaTempo()...");
    }
    console.log("Execução de funcaoSecundaria...");
    setTimeout(gastaTempo, 2000);
}
function funcaoPrimaria() {
    function espera() {
        console.log("Execução da função espera()...");
        for (let contador = 1; contador <= 10; contador++) {
            console.log("Contador: " + contador);
        }
    }
    console.log("Execução de funções assincronas.\n\n");
    console.log("Execução de função funcaoPrimaria()...");
    funcaoSecundaria(espera);
    console.log("Fim do processamento...");
}
funcaoPrimaria();
