function verfMaior() {
    //Entrada de dados
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);
    //Processamento
    let maiorValor = 0;
    if (valor1 > valor2 && valor1 > valor3) {
        maiorValor = valor1;
    } else if (valor2 > valor1 && valor2 > valor3) {
        maiorValor = valor2;
    } else if (valor3 > valor1 && valor3 > valor2) {
        maiorValor = valor3;
    }
    // Saida
    document.getElementById("saidaTexto").innerHTML = "O maior valor é <b>" + maiorValor + "</b>";
}