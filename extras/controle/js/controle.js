let tela = document.querySelector("#tela");
let isPower = false;
let channel = 3;

function power() {
    if (!isPower) {
        //tela.style.backgroundImage = "url('./img/tela.jpg')";
        tela.classList.add("tv-on");
        isPower = true;
    } else {
        //tela.style.backgroundImage = "";
        tela.classList.remove("tv-on")
        isPower = false;
    }
}

function channelUp() {
    let titulo = tela.querySelector("h2");
    titulo.innerHTML = "Canal +";
    // titulo.style.fontSize = "15px";
    // titulo.style.color = "#f00";
    titulo.classList.add("format-text");
    // setTimeout(function () {
    //         titulo.innerHTML = "";
    //         titulo.classList.remove("format-text");
    //     } , 5000)
    setTimeout(apagarInfo, 5000);
}

function channelDown() {
    let titulo = tela.querySelector("h2");
    titulo.innerHTML = "Canal -";
    titulo.classList.add("format-text");
    setTimeout(apagarInfo, 5000);
}

function volumeUP() {

}

function volumeDown() {

}

function apagarInfo() {
    let titulo = tela.querySelector("h2");
    titulo.innerHTML = "";
    titulo.classList.remove("format-text");
}