function enviarAvaliacao() {
    let nome = document.getElementById("nome").value;
    let avaliacao1 = parseFloat(document.getElementById("avaliacao1").value);
    let avaliacao2 = parseFloat(document.getElementById("avaliacao2").value);

    let errosEncontrados = validarDados(nome, avaliacao1, avaliacao2);
    if (errosEncontrados != "") {
        alert(errosEncontrados);
        return
    }

    let media = calculoMedia(avaliacao1, avaliacao2);
    let resultado = montarResultado(media);

    document.getElementById("saidaTexto").innerHTML = "Resultado: " + resultado + " - Media: " + media;
}

function validarDados(nomeAluno = "", avalicao1Aluno = 0, avalicao2Aluno = 0) {
    let erros = "";
    if (!nomeAluno) {
        erros += "Nome em branco.\n";
    }

    if (avalicao1Aluno < 0 || avalicao1Aluno > 10 || Number.isNaN(avalicao1Aluno)) {
        erros += "Valor da Avaliação 1 esta fora do padrão (0,0 a 10,0).\n";
    }

    if (avalicao2Aluno < 0 || avalicao2Aluno > 10 || Number.isNaN(avalicao2Aluno)) {
        erros += "Valor da Avaliação 2 esta fora do padrão (0,0 a 10,0).\n";
    }

    return erros;
}

function calculoMedia(avaliacao1Aluno = 0, avaliacao2Aluno = 0) {
    return (avaliacao1Aluno + avaliacao2Aluno) / 2;
}

function montarResultado(mediaAluno = 0) {
    if (mediaAluno >= 6) {
        return "Aprovado";
    } else if (mediaAluno >= 3 && mediaAluno < 6) {
        return "Exame";
    } else {
        return "Reprovado";
    }

}