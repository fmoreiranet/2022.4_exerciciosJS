const alunos = getAllAluno();
montarTabela();

function enviarAvaliacao(update = false) {
    const aluno = montAluno();

    //let errosEncontrados = validarDados(aluno);  
    if (validarDados(aluno) != "") {
        alert(errosEncontrados);
        return
    }

    let media = calculoMedia(aluno);
    aluno.media = media;
    let resultado = montarResultado(media);
    aluno.resultado = resultado;

    if (Number.isNaN(aluno.id_aluno)) {
        addAluno(aluno);
    } else {
        updateAluno(aluno);
    }

    montarTabela();
    limparForm();
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

function montarTabela() {
    let dadosAlunos = getAllAluno();
    let saidaTexto = document.getElementById("saidaTexto");
    saidaTexto.innerHTML = "";
    for (let index = 0; index < dadosAlunos.length; index++) {
        saidaTexto.innerHTML += `
        <tr>
            <td>${dadosAlunos[index].id_aluno}</td>
            <td>${dadosAlunos[index].nome}</td>
            <td>${dadosAlunos[index].resultado}</td>
            <td>${dadosAlunos[index].media}</td>
            <td><img src="./img/trash-can-regular.svg" alt="" class="icon" onclick="deleteAluno(${index})"></td>
            <td><img src="./img/pen-to-square-regular.svg" alt="" class="icon" onclick="getAluno(${index})"></td>
        <tr>`;
    }
}

function limparForm() {
    document.getElementById("formCadadastro").reset()
}

function montAluno() {
    let alunoTemp = { //objetos ficam em chaves; Ex. const endereco = {}
        id_aluno: 0,
        nome: "",
        matricula: "",
        turma: "",
        avaliacao1: 0,
        avaliacao2: 0,
        media: 0,
        resultado: ""
    }
    alunoTemp.nome = document.getElementById("nome").value;
    //alunoTemp.matricula = document.getElementById("matricula").value;
    //alunoTemp.turma = document.getElementById("turma").value;
    alunoTemp.avaliacao1 = parseFloat(document.getElementById("avaliacao1").value);
    alunoTemp.avaliacao2 = parseFloat(document.getElementById("avaliacao2").value);
    alunoTemp.id_aluno = parseInt(document.getElementById("id_aluno").value);
    return alunoTemp;
}

//CRUD ----------------------
function addAluno(aluno = {}) {
    aluno.id_aluno = new Date().getTime();
    alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

function getAllAluno() { //listAluno()
    let dadosAlunos = JSON.parse(localStorage.getItem("alunos"));
    if (dadosAlunos == null) {
        dadosAlunos = [];
    }
    return dadosAlunos;
}

function getAluno(index = 0) {
    let dadosAlunos = getAllAluno();
    //pegar e mostrar dadas Aluno
    let aluno = dadosAlunos[index];
    document.getElementById("nome").value = aluno.nome;
    //document.getElementById("matricula").value = aluno.matricula;
    //document.getElementById("turma").value aluno.turma;
    document.getElementById("avaliacao1").value = aluno.avaliacao1;
    document.getElementById("avaliacao2").value = aluno.avaliacao2;
    document.getElementById("id_aluno").value = aluno.id_aluno;
    return aluno;
}

function deleteAluno(index = 0) {
    let dadosAlunos = getAllAluno();
    let novoVetor = [];
    let pergunta = `Deseja remover o aluno ${dadosAlunos[index].nome}?`;
    if (confirm(pergunta)) {
        //dadosAlunos.splice(index, 1);
        let cont = 0;
        for (let atual = 0; atual < (dadosAlunos.length - 1); atual++) {
            if (atual != index) {
                novoVetor[cont] = dadosAlunos[atual];
                cont++;
            }
        }
        // localStorage.clear();
        localStorage.setItem("alunos", JSON.stringify(novoVetor));
        montarTabela();
    }
    return novoVetor;
}

function updateAluno(aluno) {
    let dadosAlunos = getAllAluno();
    for (let index = 0; index < dadosAlunos.length; index++) {
        if (dadosAlunos[index].id_aluno == aluno.id_aluno) {
            dadosAlunos[index] = aluno;
        }
    }
    localStorage.setItem("alunos", JSON.stringify(dadosAlunos));
    document.getElementById("id_aluno").value = "";
}

//Busca CEP -------------------

function verificaCEP() {
    let cep = document.getElementById("cep").value;
    let mostrarEndereco = document.getElementById("mostrarEndereco");
    buscaCEP(cep, function (res) {
        mostrarEndereco.innerHTML = res.logradouro;
    });
}

function buscaCEP(cep = "", callback) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    const http = new XMLHttpRequest();
    http.onload = function (res) {
        let endereco = JSON.parse(res.target.response);
        return callback(endereco);
    };
    http.open("GET", url);
    http.send();
}
