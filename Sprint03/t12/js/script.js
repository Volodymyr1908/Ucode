let buttonAdd = document.querySelector(".add-cookies"),
    buttonClear = document.querySelector(".clear-cookies"),
    textInput = document.querySelector("#text-input"),
    textArchive = document.querySelector("#text-archive"),
    countKeys = 0;


textArchive.value = "[Empty]";
let getInfo = () => {
    buttonAdd.addEventListener("click", setInfo);
}

let setInfo = () => {
    let resultStr = "";
    let arrovStr = "--> ";

    if (!textInput.value)
        alert("It's empty. Try to input something in \"Text input\".");
    else {
        if (textArchive.value == "[Empty]")
            textArchive.value = "";
        resultStr += arrovStr + textInput.value + ' [' + getFormattedDate(new Date()) + ']' + "\n";
        textArchive.value += resultStr;
        localStorage.setItem("name" + countKeys, textInput.value);
        countKeys++;
        resultStr = "";
        textInput.value = "";
    }
    // console.log(localStorage);
}

let resetInfo = () => {
    buttonClear.addEventListener("click", resetCookie);
}

let resetCookie = () => {
    let conf = confirm("Are you sure?");
    if (conf) {
        localStorage.clear();
        // console.log(localStorage);
        textArchive.value = "[Empty]";
    }
}

function getFormattedDate(dateObject) {
    let res = '';

    res +=      new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getDate()) + '.'
        +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format((dateObject.getMonth() + 1)) + '.'
        +   (dateObject.getFullYear() - 2000) + ', '
        +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getHours()) + ':'
        +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getMinutes()) + ':'
        +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getSeconds());
    return res;
}

getInfo();
resetInfo();
