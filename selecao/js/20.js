function ordemInversa() {
    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);
    let c = parseInt(document.getElementById("valor3").value);

    let resposta = "";
    if (a > b && b > c) {
        resposta = a + ", " + b + ", " + c;
    } else if (a > c && c > b) {
        resposta = a + ", " + c + ", " + b;
    } else if (b > a && a > c) {
        resposta = b + ", " + a + ", " + c;
    } else if (b > c && c > a) {
        resposta = b + ", " + c + ", " + a;
    } else if (c > a && a > b) {
        resposta = c + ", " + a + ", " + b;
    } else
    //if (c > b && b > a)
    {
        resposta = c + ", " + b + ", " + a;
    }

    document.getElementById("saidaTexto").innerHTML = resposta;

}