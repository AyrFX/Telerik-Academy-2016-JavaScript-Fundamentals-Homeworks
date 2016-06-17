function solve(args) {
    var dimensions = +args[0],
        currentLine = "";

    for (var i = 1; i <= dimensions; i++) {
        currentLine = "";
        for (var j = i; j < dimensions + i; j++) {
            currentLine += " " + j;
        }
        console.log(currentLine);
    }
}
