function mostrarMultiplos() {
    let saida = "";

    for (let numero = 1; numero <= 100; numero = numero + 1) {
        let resto = numero % 10; // numero % numero -> % modulo que retorno o resto da divisão
        if (resto == 0) {
            saida += numero + " (Múltiplo 10),<br>"
        } else {
            saida += numero + ", ";
        }
        console.log(numero);
    }

    document.querySelector("#saidaTexto").innerHTML = saida;
}