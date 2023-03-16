let media = 0;

//Bloco de controladores
function alunoMediaController() {
    //Entrada de dados
    //querySelector -> pagar os elementos como seletores do css;
    let nota1 = parseFloat(document.querySelector("#nota1").value);
    let nota2 = parseFloat(document.querySelector("#nota2").value);
    let nota3 = parseFloat(document.querySelector("#nota3").value);
    let nota4 = parseFloat(document.querySelector("#nota4").value);
    let resultado = calculoMedia(nota1, nota2, nota3, nota4);
    //Saida de dados
    document.querySelector("#saidaTexto").innerHTML = resultado;
}

function montraExame() {
    let formExame = document.querySelector("#form-exame");
    formExame.style.display = "block";
}

function alunoExameController() {
    // Entrada de Dados
    let exame = parseFloat(document.querySelector("#exame").value);
    let resultado = calculoNovaMedia(exame);
    // Saida de dados
    document.querySelector("#saidaTexto").innerHTML = resultado;
}


//Bloco de processamento
function calculoMedia(n1 = 0, n2 = 0, n3 = 0, n4 = 0) {
    let resultado = 0;
    media = (n1 + n2 + n3 + n4) / 4;
    if (media >= 7) {
        resultado = "Aprovado - Media: " + media;
    } else {
        resultado = "Exame - Media: " + media;
        montraExame();
    }
    return resultado;
}

function calculoNovaMedia(exame = 0) {
    let resultado = "";
    let novaMedia = (media + exame) / 2;
    if (novaMedia >= 5) {
        resultado = "Aprovado em Exame - Media: " + novaMedia;
    } else {
        resultado = "Reprovado em Exame - Media: " + novaMedia;
    }
    return resultado;
}

