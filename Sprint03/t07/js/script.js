const getSuki = document.querySelectorAll("li");                        //  отримуємо всі li з html

for (let i = 0; getSuki[i]; i++) {                                               // створюємо цикл, що перебирає всі li
    let getClass = getSuki[i].className;                                         // присвоюємо змінній значення класу кожного елементу li
    let getDataAtr = getSuki[i].getAttribute("data-element");       // присвоюємо змінній значення data атрибуту кожної li
    if (getClass === "" || (getClass !== "good" && getClass !== "evil"))
        getSuki[i].setAttribute("class", "unknown");         // добавляємо class = "unknown" до деяких li
        getSuki[i].insertAdjacentHTML("beforeend", `<br>`);
    if (getDataAtr) {                                                            // getDataAtr = true(має якесь значення)
        let getSplitedDataAtr = getDataAtr.split(" ");                 // розбиваємо всі значення data атрибутів на окремі елементи (по пробілу)
        for (let j = 0; getSplitedDataAtr[j]; j++) {                            // створюємо цикл, що перебирає всі значення data атрибутів
            switch (getSplitedDataAtr[j]) {                                     // добавляємо нові блоки в li
                case "air" :
                    getSuki[i].insertAdjacentHTML("beforeend", `<div class="elem air"></div>`)
                    break;
                case "water" :
                    getSuki[i].insertAdjacentHTML("beforeend", `<div class="elem water"></div>`)
                    break;
                case "earth" :
                    getSuki[i].insertAdjacentHTML("beforeend", `<div class="elem earth"></div>`)
                    break;
                case "fire" :
                    getSuki[i].insertAdjacentHTML("beforeend", `<div class="elem fire"></div>`)
                    break;
            }
        }
    } else // якщо none
        getSuki[i].insertAdjacentHTML("beforeend", `<div class="elem"><div class="line"></div></div>`)
}