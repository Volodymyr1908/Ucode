// const user = {
//     name: "Steve",
//     surname: "Rogers",
//     age: 101,
//     city: "New York"
// };

function copyObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}
