let game = document.querySelector(".game"),
    res = document.querySelector(".res"),
    btnGame = document.querySelector(".new-game"),
    fields = document.querySelectorAll(".field"),
    step = false,
    count = 0,
    circle = `<div class="circle"></div>`,
    cross = `<div class="cross"></div>`;

function stepCross(target) {
    // if(target.className === "circle" || target.className === "cross"){
    //     return;
    // }
    target.removeEventListener("click", init);
    target.innerHTML = cross;
    target.classList.add("x");
    count++;
}

function stepZero(target) {
    //     return;
    // if(target.className === "circle" || target.className === "cross"){
    // }
    target.removeEventListener("click", init);
    target.innerHTML = circle;
    target.classList.add("o");
    count++;
    
}

function init(e) {
    if(!step) stepCross(e.target);
    else stepZero(e.target);
    step = !step;
    win();
}

function newGame() {
    step = false;
    count = 0;
    res.innerText = "";
    fields.forEach(item => {
        item.innerHTML = "";
        item.classList.remove("x", "o", "active");
    });
    fields.forEach(e => e.addEventListener("click", init));
}

function win() {
    let comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let hasWinner = false;
    for (let i = 0; i < comb.length; i++) {

        if (fields[comb[i][0]].classList.contains("x") &&
            fields[comb[i][1]].classList.contains("x") &&
            fields[comb[i][2]].classList.contains("x")) {
            // setTimeout(() => {
            fields[comb[i][0]].classList.add("active");
            fields[comb[i][1]].classList.add("active");
            fields[comb[i][2]].classList.add("active");

            res.innerText = "Won player X";
            // },500);
            game.removeEventListener("click", init)
            hasWinner = true;
        } else if (fields[comb[i][0]].classList.contains("o") &&
                fields[comb[i][1]].classList.contains("o") &&
                fields[comb[i][2]].classList.contains("o")) {
                // setTimeout(() => {
                fields[comb[i][0]].classList.add("active");
                fields[comb[i][1]].classList.add("active");
                fields[comb[i][2]].classList.add("active");

                res.innerText = "Won player O";

            // },500);
            game.removeEventListener("click", init)
            hasWinner = true;
        }
    }
    if (hasWinner) {
        fields.forEach(e => e.removeEventListener("click", init))

    } else if (count === 9) {
        res.innerText = "It's a draw";
        game.removeEventListener("click", init);
    }
}

btnGame.addEventListener("click", newGame);
// game.addEventListener("click", init);
fields.forEach(e => e.addEventListener("click", init));
