function solve(args) {
    var aNumber = +args[0],
        bNumber = +args[1];
    if (aNumber > bNumber) {
        var tempNumber = aNumber;
        aNumber = bNumber;
        bNumber = tempNumber;
    }

    console.log(aNumber + ' ' + bNumber);
}
