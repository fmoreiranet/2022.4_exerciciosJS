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
}

//Busca CEP ------------------
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