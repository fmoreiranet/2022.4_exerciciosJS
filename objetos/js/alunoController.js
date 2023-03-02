const aluno = {
    nome: "",
    matricula: "",
    turma: "",
    avaliacao1: 0,
    avaliacao2: 0,
    media: 0,
    resultado: ""
}

function enviarAvaliacao() {
    aluno.nome = document.getElementById("nome").value;
    //aluno.matricula = document.getElementById("matricula").value;
    //aluno.turma = document.getElementById("turma").value;
    aluno.avaliacao1 = parseFloat(document.getElementById("avaliacao1").value);
    aluno.avaliacao2 = parseFloat(document.getElementById("avaliacao2").value);

    let errosEncontrados = validarDados(aluno);
    if (errosEncontrados != "") {
        alert(errosEncontrados);
        return
    }

    let media = calculoMedia(aluno);
    aluno.media = media;
    let resultado = montarResultado(media);
    aluno.resultado = resultado;

    //document.getElementById("saidaTexto").innerHTML += "<tr><td>" + nome + "</td><td>" + resultado + "</td><td>" + media + "</td><tr>";
    document.getElementById("saidaTexto").innerHTML += `<tr><td>${aluno.nome}</td><td>${aluno.resultado}</td><td>${aluno.media}</td><tr>`;

    // document.cookie = "aluno=" + JSON.stringify(aluno);
    // document.cookie = "busca=" + aluno.nome;
    // let dadoscookie = document.cookie;

    localStorage.setItem("aluno", JSON.stringify(aluno));
    let dadosAluno = JSON.parse(localStorage.getItem("aluno"));
    console.log(dadosAluno);
}

function validarDados(aluno = {}) {
    let erros = "";
    if (aluno.none) {
        erros += "Nome em branco.\n";
    }

    if (aluno.avaliacao1 < 0 || aluno.avaliacao1 > 10 || Number.isNaN(aluno.avaliacao1)) {
        erros += "Valor da Avaliação 1 esta fora do padrão (0,0 a 10,0).\n";
    }

    if (aluno.avaliacao2 < 0 || aluno.avaliacao2 > 10 || Number.isNaN(aluno.avaliacao2)) {
        erros += "Valor da Avaliação 2 esta fora do padrão (0,0 a 10,0).\n";
    }

    return erros;
}

function calculoMedia(aluno) {
    return (aluno.avaliacao1 + aluno.avaliacao2) / 2;
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