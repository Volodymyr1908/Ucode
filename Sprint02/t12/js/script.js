function triangle(length) {

    let x = "*";
    let text = "";
    let i = 1;
    for (; i <= length; i++) {
        text += x.repeat(i) + "\n";
    }
    alert(text);


}


