//
/*
let animalName = prompt("What animal is the superhero most similar to?");
let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
let age = prompt("How old is the superhero?");


// проверка 1-го ввода
let regexName = /[a-zA-Z]+/g;

if (regexName.test(animalName) && animalName.length <= 20) {
    alert("Input is valid\n");
} else {
    alert("Input is invalid\n");
}

//проверка 2-го ввода
let regexGender = /^male$|^female$|^\s*$/g;
if (regexGender.test(gender)) {
    alert("valid\n");
} else {
    alert("invalid\n");
}

//проверка 3-го ввода
let regexAge = /[1-9]/g;
if (regexAge.test(age) && age.length <= 5) {
    alert("valid\n");
} else {
    alert("invalid\n");
}
*/
//
//
let animalName = prompt("What animal is the superhero most similar to?");
let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
let age = prompt("How old is the superhero?");


let regexName = /[a-zA-Z]+/g;
let regexValidName = regexName.test(animalName) && animalName.length <= 20;

let regexGender = /^male$|^female$|^\s*$/g;
let regexValidGender = regexGender.test(gender);

let regexAge = /[1-9]/g;
let regexValidAge = regexAge.test(age) && age.length <= 5;

if (regexValidName && regexValidGender && (gender === "male") && regexValidAge && (age <= 18)) {
    alert("The superhero name is: " + animalName + "-boy!");
} else if (regexValidName && regexValidGender && (gender === "male") && regexValidAge && (age > 18)) {
    alert("The superhero name is: " + animalName + "-man!");
} else if (regexValidName && regexValidGender && (gender === "female") && regexValidAge && (age > 18)) {
    alert("The superhero name is: " + animalName + "-woman!");
} else if (regexValidName && regexValidGender && (gender === "female") && regexValidAge && (age <= 18)) {
    alert("The superhero name is: " + animalName + "-girl!");
} else if (regexValidName && regexValidGender && (gender === "") && regexValidAge && (age > 18)) {
    alert("The superhero name is: " + animalName + "-hero!");
}else if (regexValidName && regexValidGender && (gender === "") && regexValidAge && (age <= 18)) {
    alert("The superhero name is: " + animalName + "-kid!");
} else {
    alert("error message")
}






