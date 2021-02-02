// arr = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
function firstElements(arr, n) {
    if (n < 0) {
        n = 0;
    }
    return arr.slice(0, n);
}