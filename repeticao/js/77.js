let mediaIdade = 0;
let somaIdade = 0;
let quantidadeIdade = 0;

function grupoController() {
    let idade = parseInt(document.querySelector("#idade").value);
    if (idade != 0) {
        // somaIdade = somaIdade + idade;
        // quantidadeIdade++;
        // mediaIdade = somaIdade / quantidadeIdade;
        // saida("Quant. Idades: " + quantidadeIdade + "<br>" + "Média idade: " + mediaIdade);
        contadorIdade();
    }
}

function grupoControllerAuto() {
    for (let index = 1; index <= 100; index++) {
        let idade = Math.floor(Math.random() * 100);
        if (idade == 0) {
            break;
        }
        // somaIdade = somaIdade + idade;
        // quantidadeIdade++;
        // mediaIdade = somaIdade / quantidadeIdade;
        // saida("Quant. Idades: " + quantidadeIdade + "<br>" + "Média idade: " + mediaIdade);
        contadorIdade();
    }
}

function saida(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}

function contadorIdade() {
    somaIdade = somaIdade + idade;
    quantidadeIdade++;
    mediaIdade = somaIdade / quantidadeIdade;
    saida("Quant. Idades: " + quantidadeIdade + "<br>" + "Média idade: " + mediaIdade);
}