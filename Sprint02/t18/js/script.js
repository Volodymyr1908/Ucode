function sortEvenOdd(arr) {
    arr.sort(function(a, b) {
        return Math.abs(a % 2) - Math.abs(b % 2) || a - b;
    });
    return arr;
}