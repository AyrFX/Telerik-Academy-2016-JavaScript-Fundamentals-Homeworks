function solve(args) {
    var aNumber = +args[0],
        bNumber = +args[1],
        cNumber = +args[2];
    if (aNumber > bNumber) {
        if (aNumber > cNumber) {
            if (bNumber > cNumber) {
                console.log(aNumber + ' ' + bNumber + ' ' + cNumber);
            } else {
                console.log(aNumber + ' ' + cNumber + ' ' + bNumber);
            }
        } else {
            console.log(cNumber + ' ' + aNumber + ' ' + bNumber);
        }
    } else {
        if (bNumber > cNumber) {
            if (aNumber > cNumber) {
                console.log(bNumber + ' ' + aNumber + ' ' + cNumber);
            } else {
                console.log(bNumber + ' ' + cNumber + ' ' + aNumber);
            }
        } else {
            console.log(cNumber + ' ' + bNumber + ' ' + aNumber);
        }
    }
}
