function checkBrackets(str) {
    let check_regular = new RegExp("[(|)]");
    let count_all_brack = 0;
    let count_pair = 0;
    let buffer = [];

    if (!str || !check_regular.test(str))
        return -1;
    let len = str.length;
    for (let i = 0; i < len; i++)
        buffer.push(str[i]);
    for (let i = 0; i < len; i++)
        if (str[i] == ')' || str[i] == '(')
            count_all_brack++;
    for (let i = 0; i < len; i++) {
        if (buffer[i] == '(') {
            buffer[i] = '0';
            for (let j = i + 1; j < len; j++)
                if (buffer[j] == ')') {
                    buffer[j] = '0';
                    count_pair++;
                    break;
                }
        }
    }
    return count_all_brack - count_pair * 2;
}
