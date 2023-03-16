function compararVetor() {
    const W = [];
    const V = [];
    for (let index = 0; index < 10; index++) {
        let numero = 0;
        numero = Math.floor(Math.random() * 10) + 1;
        W[index] = numero;

        numero = Math.floor(Math.random() * 10) + 1;
        V[index] = numero;
    }

    let resultado = "";
    resultado += "V = " + V + "<br>";
    resultado += "W = " + W + "<br>";

    for (let indexV = 0; indexV < 10; indexV++) {
        for (let indexW = 0; indexW < 10; indexW++) {
            if (V[indexV] == W[indexW]) {
                resultado += "Valor de V: " + V[indexV] + " - posição em W: " + indexW + "<br>";
            }
        }
    }

    document.getElementById("saidaTexto").innerHTML = resultado;
}