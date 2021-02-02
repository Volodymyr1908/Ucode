const x = {
    words: "newspapers newspapers books magazines"
};

//concat
 function addWords(obj, wrds) {
    obj.words = obj.words + " " + wrds.trim();
    obj.words = Array.from(new Set(obj.words.split(" "))).toString();
    obj.words =  obj.words.replace(/,/g, ' ')
     obj.words = obj.words.trim();
 }
  addWords(x, "radio newspapers   ");
  // console.log(x);

//delete

function removeWords(obj, wrds) {
    let buff = Array.from(new Set(wrds.trim().split(" "))).filter(Boolean);
    for (let i = 0; buff[i]; i++)
        obj.words = obj.words.replace(buff[i], "");
        obj.words = obj.words.trim();
}
removeWords(x, 'newspapers  radio');
// console.log(x.words)

//change

function changeWords(obj, ollWrds, newWrds) {
    removeWords(obj, ollWrds);
    addWords(obj, newWrds);
}
changeWords(x, 'books radio  magazines', 'tv internet');
// console.log(x)