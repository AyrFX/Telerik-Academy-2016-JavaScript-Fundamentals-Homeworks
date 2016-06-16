function solve(args) {
    var aNumber = +args[0],
        bNumber = +args[1],
        cNumber = +args[2],
        dNumber = +args[3],
        eNumber = +args[4];
    if (aNumber >= bNumber && aNumber >= cNumber &&
        aNumber >= dNumber && aNumber >= eNumber) {
        console.log(aNumber);
    } else if (bNumber >= aNumber && bNumber >= cNumber &&
        bNumber >= dNumber && bNumber >= eNumber) {
        console.log(bNumber);
    } else if (cNumber >= aNumber && cNumber >= bNumber &&
        cNumber >= dNumber && cNumber >= eNumber) {
        console.log(cNumber);
    } else if (dNumber >= aNumber && dNumber >= bNumber &&
        dNumber >= cNumber && dNumber >= eNumber) {
        console.log(dNumber);
    } else {
        console.log(eNumber);
    }
}
