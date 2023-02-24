function montarVetor() {
    const B = [];
    for (let index = 0; index < 1000; index++) {
        let valor = Math.floor(Math.random() * 100) + 1;
        if (index % 2 == 0) {
            if (valor % 2 != 0) {
                valor++
            }
            B[index] = valor;
        } else {
            if (valor % 2 == 0) {
                valor++
            }
            B[index] = valor;
        }
    }
    document.querySelector("#saidaTexto").innerHTML = B;
}