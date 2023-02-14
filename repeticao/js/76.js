let maiorValor = 0;

function numeroController() {
    //let maior = 0;
    let numAleatorio = 0;
    for (let index = 1; index <= 5; index = index + 1) {
        numAleatorio = Math.floor(Math.random() * 1000) + 200;
        if (numAleatorio > maiorValor) {
            maiorValor = numAleatorio;
        }
    }
    saida("Maior: " + maiorValor);
}

function numeroControllerManual() {
    let valor = parseInt(document.getElementById("valor").value);
    if (valor > maiorValor) {
        maiorValor = valor;
    }
    saida("Maior: " + maiorValor);
}

function saida(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}