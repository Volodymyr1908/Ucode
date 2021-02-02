// the first
// loop
// var i = 6;
// var res1 = ' '  ;
// do {
//     res1+= i + ' '  ;i++;
// } while(i < 5);
//
// // the second loop
// i = 6;
// var res2= ' '  ;
// while(i < 5)
// {
//     res2+= i + ' '  ;i++;
// } alert('do while:' + res1+ 'while:' + res2 + typeof (res2))


    let x = prompt("Enter a number:");
    let alertBody = " ";
    let i = 0;
    while (i < 10)
    {
        i++;
        alertBody += x + "*" + i + "=" + x * i + '\n';
    }
    alert(alertBody);
