// function string() {
//     let x = '';
//     let str1 = 'You\'re catnip to a girl like me. Handsome, dazed, and to die for...';
//     let str1Length = str1.length;
//     let str1charAt = str1.charAt(1);
//     let str1Upper = str1.toUpperCase();
//     x = str1Length + '\n' + str1charAt + '\n' + str1Upper;
//     alert(x);
// }
// string();
let str1 = 'You\'re catnip to a girl like me. Handsome, dazed, and to die for...';
let str2 = "Batman: \"I tried to save you.\"";
let str3 = "Selina Kyle: catwoman \"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\""
let str4 = str3.replace(/catwoman/gi, " ")
alert("Just string: " + str1 +
    "\nLength: " + str1.length +
    "\nCharacter number 2 is: " + str1.charAt(2) +
    "\nTo uppercase " + str1.toUpperCase() +
    "\nConcatenation ia a phrase: " + str1 + " - Catwomen" +
    "\n[Batman Returns]" + str2 +
    "\n" + str4);