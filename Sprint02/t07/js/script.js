
function getAnswer(question, wrongAnswer, correctAnswer) {
    return (`${question}\nwrong: ${wrongAnswer}\ncorrect: ${correctAnswer}\n\n`);
}
const a = '15';
const b = 4;
const c = true;
const d = 'a';
const e = 'B';
const f = '';
let answer = 'Not my type\n\n';
answer += getAnswer('a+b=?', a + b, +a + b);
answer += getAnswer('a+c=?', a + c, !!a + c);
answer += getAnswer('e+d+e+d=?', e + d + e + d, e + d + parseInt(e) + d);
answer += getAnswer('c+f=?', c + f, (+c).toString() + (+!!f).toString());
alert(answer);