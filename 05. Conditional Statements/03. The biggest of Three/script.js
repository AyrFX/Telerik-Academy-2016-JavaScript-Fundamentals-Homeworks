function solve(args) {
    var aNumber = +args[0],
        bNumber = +args[1],
        cNumber = +args[2];
    if (aNumber > bNumber) {
        if (aNumber > cNumber) {
            console.log(aNumber);
        } else {
            console.log(cNumber);
        }
    } else {
        if (bNumber > cNumber) {
            console.log(bNumber);
        } else {
            console.log(cNumber);
        }
    }
}
