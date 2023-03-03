const alunos = getAluno();
montarTabela();

function enviarAvaliacao() {
    const aluno = {
        nome: "",
        matricula: "",
        turma: "",
        avaliacao1: 0,
        avaliacao2: 0,
        media: 0,
        resultado: ""
    }

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

    addAluno(aluno);
    montarTabela();

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

function addAluno(aluno = {}) {
    alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

function getAluno() {
    let dadosAlunos = JSON.parse(localStorage.getItem("alunos"));
    let resultado = [];
    if (dadosAlunos != null) {
        for (let index = 0; index < dadosAlunos.length; index++) {
            let obj = dadosAlunos[index];
            resultado.push(obj);
        }
    }
    return resultado;
}

function montarTabela() {
    let dadosAlunos = getAluno();
    let saidaTexto = document.getElementById("saidaTexto");
    saidaTexto.innerHTML = "";
    for (let index = 0; index < dadosAlunos.length; index++) {
        saidaTexto.innerHTML += `<tr><td>${dadosAlunos[index].nome}</td><td>${dadosAlunos[index].resultado}</td><td>${dadosAlunos[index].media}</td><tr>`;
    }
}

//