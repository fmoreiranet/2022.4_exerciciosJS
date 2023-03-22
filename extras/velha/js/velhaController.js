(() => {
    let vez = "X";
    let pos = document.querySelectorAll(".col-4");

    for (let index = 0; index < pos.length; index++) {
        pos[index].addEventListener("click", (e) => {
            console.log(e.target.dataset.pos);
            if (vez == "X") {
                e.target.classList.add("cruz");
                e.target.classList.remove("circulo");
                e.target.innerHTML = "X";
                vez = "O"
            } else {
                e.target.classList.add("circulo");
                e.target.classList.remove("cruz");
                e.target.innerHTML = "O";
                vez = "X"
            }
        });
    }
})()