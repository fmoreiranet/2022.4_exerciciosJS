function poligonoController() {
    let lado = parseFloat(document.getElementById("quantLado").value);
    let medida = parseFloat(document.getElementById("medidaLado").value);
    let respostaTela = document.getElementById("saidaTexto");

    if (lado == 3) {
        let perimetro = medida * lado; //medida + medida + medida;
        respostaTela.innerHTML = "Triangulo - Perímetro: " + perimetro;
    } else if (lado == 4) {
        let area = medida * medida;
        respostaTela.innerHTML = "Quadrado - Area: " + area;
    } else if (lado == 5) {
        respostaTela.innerHTML = "Pentágono";
    } else {
        respostaTela.innerHTML = "O numero de lados e invalido!";
    }
}