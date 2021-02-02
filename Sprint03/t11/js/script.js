let buttonAdd = document.querySelector(".add-cookies"),
    buttonClear = document.querySelector(".clear-cookies"),
    textInput = document.querySelector("#text-input"),
    textArchive = document.querySelector("#text-archive");



function addNotes() {

    if (textInput.value) {
        document.cookie = Date.now() + '=' + textInput.value + '; expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        textInput.value = "";
        fillNotesArchive();
    } else {
        alert("Empty. Try again")
    }
    //console.log(document.cookie);

}

function getCookies() {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie;
}

function fillNotesArchive() {
    let cookie = getCookies();
    let notes = "";
    for (const [key, value] of Object.entries(cookie)) {
        notes += "---> " + value + "\r\n";
    }
    textArchive.innerHTML = notes;
}

function clearCookies() {
    let cookies = document.cookie.split(";");
    textArchive.value = "";
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

}
// fillNotesArchive();

buttonAdd.addEventListener("click", () => addNotes());
buttonClear.addEventListener("click", () => clearCookies());


