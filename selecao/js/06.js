
function verificar() {
    let valor = parseFloat((document.getElementById("valor")).value);
    let abobrinha = document.getElementById("saidaTexto");

    if (valor == 0) {
        abobrinha.innerHTML = "Zero";
    } else if (valor > 0) {
        abobrinha.innerHTML = "positivo";
    } else {
        abobrinha.innerHTML = "negativo";
    }
}

function verificarNova() {
    entrada();
}

function entrada() {
    let valor = parseFloat((document.getElementById("valor")).value);
    let abobrinha = document.getElementById("saidaTexto");
    let resposta = processamento(valor);
    saida(abobrinha, resposta);
}

function processamento(numero) {
    if (numero == 0) {
        return "Zero";
    } else if (numero > 0) {
        return "Positivo";
    } else {
        return "Negativo";
    }
}

function saida(elemento, texto) {
    elemento.innerHTML = texto;
}