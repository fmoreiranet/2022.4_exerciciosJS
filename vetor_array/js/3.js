function montarVetor() {
    const B = [];
    for (let index = 0; index < 10; index++) { //index++ <=> index=index+1
        let valor = Math.floor(Math.random() * 100) + 1;
        if (index % 2 === 0) {
            //B[index] = 0;
            if (valor % 2 != 0) {
                valor++
            }
            B[index] = valor;
        } else {
            //B[index] = 1;
            if (valor % 2 == 0) {
                valor++
            }
            B[index] = valor;
        }
    }
    document.querySelector("#saidaTexto").innerHTML = B;
}