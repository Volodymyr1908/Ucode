const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

function getFormattedDate(dateObject) {
    let res = "";
    let options = {
        weekday: "long"
    }
    let myDate = {
        date: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        weekday: dateObject.toLocaleString("en-US", options)
    }
    if (myDate.date < 10)
        myDate.date = "0" + myDate.date;
    if (myDate.month < 10)
        myDate.month = "0" + myDate.month;
    if (myDate.year < 10)
        myDate.year = "0" + myDate.year;
    if (myDate.hours < 10)
        myDate.hours = "0" + myDate.hours;
    if (myDate.minutes < 10)
        myDate.minutes = "0" + myDate.minutes;
    if (myDate.weekday < 10)
        myDate.weekday = "0" + myDate.weekday;
    res += myDate.date + "." + myDate.month + "." + myDate.year +
        " " + myDate.hours + ":" + myDate.minutes + " " + myDate.weekday;
    return res;
}