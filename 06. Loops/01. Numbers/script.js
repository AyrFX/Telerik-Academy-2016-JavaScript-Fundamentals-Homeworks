function solve(args) {
    var inputNumber = +args[0],
        outputString = "";
    for (var i = 1; i <= inputNumber; i++) {
        if (i != 1) {
            outputString = outputString + ' ';
        }
        outputString = outputString + (i + '');
    }
    console.log(outputString);
}
