let tela = document.getElementById("tela");
let isPower = false;
let channel = 3;

function power() {
    if (!isPower) {
        tela.style.backgroundImage = "url('./img/tela.jpg')";
        isPower = true;
    } else {
        tela.style.backgroundImage = "";
        isPower = false;
    }
}

function channelUp() {
    tela.innerHTML = "Canal +";
}

function channelDown() {

}

function volumeUP() {

}

function volumeDown() {

}