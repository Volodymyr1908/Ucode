function checkDivision(beginRange, endRange) {
    if (beginRange === undefined) {
        beginRange = 1;
    }
    if (endRange === undefined) {
        endRange = 100;
    }
    for (i = beginRange; i <= endRange; i++) {
        let res = [];
        let text = "";
        if (i % 2 === 0) {
            res.push("even");
        }
        if (i % 3 === 0) {
            res.push(" a multiple of 3");
        }
        if (i % 10 === 0) {
            res.push(" a multiple of 10");
        }
        if (res.length === 0) {
            text = i + " -";
        } else {
            text = i + " is " + res.join(",");
        }
        console.log(text);
    }
}