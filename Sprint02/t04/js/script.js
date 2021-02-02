function solver(a, b, c, d, e) {
    if (!(Number(a) &&
    Number(b) &&
    Number(c) &&
    Number(d) &&
    Number(e))) {
        return 'Wrong input';
    }
    return a ** 2 - 5 * b * c + d /3 + e;
}