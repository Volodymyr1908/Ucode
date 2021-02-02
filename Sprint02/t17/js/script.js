greeting(prompt("Enter your first name, please"), prompt("Enter your last name, please"));

function greeting(firstName, lastName) {
    let reg = /^[a-zA-Z]+$/;
    let regValid = reg.test(firstName) && reg.test(lastName);
    let message;
    if (regValid) {
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        message = "Hello " + firstName + " " + lastName + "!";
    } else {
        message = "Wrong input";
    }
    console.log(message);
    alert(message);
}