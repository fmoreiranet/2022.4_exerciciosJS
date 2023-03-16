let media = 0;

function alunoMediaController() {
    //Entrada de dados
    //querySelector -> pagar os elementos como seletores do css;
    let nota1 = parseFloat(document.querySelector("#nota1").value);
    let nota2 = parseFloat(document.querySelector("#nota2").value);
    let nota3 = parseFloat(document.querySelector("#nota3").value);
    let nota4 = parseFloat(document.querySelector("#nota4").value);
    let resultado = "";
    // Processamento
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media >= 7) {
        resultado = "Aprovado - Media: " + media;
    } else {
        resultado = "Exame - Media: " + media;
        let formExame = document.querySelector("#form-exame");
        formExame.style.display = "block";
    }
    //Saida de dados
    document.querySelector("#saidaTexto").innerHTML = resultado;
}

function alunoExameController() {
    // Entrada de Dados
    let exame = parseFloat(document.querySelector("#exame").value);
    let resultado = "";
    // Processamento
    let novaMedia = (media + exame) / 2;
    if (novaMedia >= 5) {
        resultado = "Aprovado em Exame - Media: " + novaMedia;
    } else {
        resultado = "Reprovado em Exame - Media: " + novaMedia;
    }
    // Saida de dados
    document.querySelector("#saidaTexto").innerHTML = resultado;
}