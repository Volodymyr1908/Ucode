function concat(string1, string2) {
    if (string1 && string2) {
        return string1 + " " + string2;
    }
    functionCount.count = 0;
    function functionCount() {
    string2 = prompt("Enter again:");
    functionCount.count++;
    return string1 + " " + string2;
    }
    return functionCount;
}

// test ------------->

// let phrase1 = concat("Hulk", "smash!");
// let output = phrase1;
// console.log(output); // Hulk smash!
//
// let phrase2 = concat("Leave");
// output = phrase2();
// console.log(output);
// console.log(phrase2.count);
// output = phrase2();
// console.log(output);
// output = phrase2();
// console.log(output);
// console.log(phrase2.count);
