function solve(args) {
    var aNumber = +args[0],
        bNumber = +args[1],
        cNumber = +args[2];
    if (aNumber == 0 || bNumber == 0 || cNumber == 0) {
        console.log('0');
        return;
    }
    if (aNumber * bNumber * cNumber > 0) {
        console.log('+');
    } else {
        console.log('-');
    }
}
