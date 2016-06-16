function solve(args) {
    var aNumber = +args[0],
        bNumber = +args[1],
        cNumber = +args[2],
        dValue = bNumber * bNumber - (4 * aNumber * cNumber);
    if (dValue < 0) {
        console.log('no real roots');
    } else if (dValue == 0) {
        var root = (bNumber * -1) / (2 * aNumber);
        console.log('x1=x2=' + root.toFixed(2));
    } else {
        var root1 = ((bNumber * -1) + Math.sqrt(dValue)) / (2 * aNumber),
            root2 = ((bNumber * -1) - Math.sqrt(dValue)) / (2 * aNumber);
        if (root1 < root2) {
            console.log('x1=' + root1.toFixed(2) + '; x2=' + root2.toFixed(2));
        } else {
            console.log('x1=' + root2.toFixed(2) + '; x2=' + root1.toFixed(2));
        }
    }
}
