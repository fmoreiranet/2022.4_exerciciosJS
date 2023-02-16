let media = 0;

function alunoController() {
    //Entrada de dados
    //querySelector -> pagar os elementos como seletores do css;
    let nota1 = parseFloat(document.querySelector("#nota1").value);
    let nota2 = parseFloat(document.querySelector("#nota2").value);
    let nota3 = parseFloat(document.querySelector("#nota3").value);
    let nota4 = parseFloat(document.querySelector("#nota4").value);

    media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        document.querySelector("#saidaTexto").innerHTML = "Aprovado - Media: " + media;
    } else {
        document.querySelector("#saidaTexto").innerHTML = "Exame - Media: " + media;
        let formExame = document.querySelector("#form-exame");
        formExame.style.display = "block";
    }
}

function calculoNovaMedia() {
    let exame = parseFloat(document.querySelector("#exame").value);
    let novaMedia = (media + exame) / 2;
    if (novaMedia >= 5) {
        document.querySelector("#saidaTexto").innerHTML = "Aprovado em Exame - Media: " + novaMedia;
    } else {
        document.querySelector("#saidaTexto").innerHTML = "Reprovado em Exame - Media: " + novaMedia;
    }
}