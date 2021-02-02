const lab = document.getElementById("lab");
const hero = document.getElementById("hero");
let flag = true;

function transformation() {

    if (flag === true) {
        lab.style.backgroundColor = "#ffb300";
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = "2px";
        hero.textContent = "Bruce Banner";
        flag = false;
    }else {
        lab.style.backgroundColor = "#70964b";
        hero.style.fontSize = "130px";
        hero.style.letterSpacing = "6px";
        hero.textContent = "Hulk";
        flag = true;
    }
}

// if (hero.innerHTML === "Bruce Banner") {
//
// }

console.log(hero.innerHTML); // -- Bruce Banner;