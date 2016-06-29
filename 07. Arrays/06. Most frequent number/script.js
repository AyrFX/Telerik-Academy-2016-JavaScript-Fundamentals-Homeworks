function solve(args) {
    var array = args[0].split('\n').map(Number),
        appearances = new Array(10000),
        maxRepetitions = 0,
        maxRepetitionsNumber = 0;

    array.shift();

    for (var i = 0; i < array.length; i += 1) {
        var appearanceIndex = array[i];
        if (isNaN(appearances[appearanceIndex])) {
            appearances[appearanceIndex] = 1;
        } else {
            appearances[appearanceIndex] += 1;
        }

    }

    for (var i = 0; i < appearances.length; i += 1) {
        if (!isNaN(appearances[i]) && appearances[i] > maxRepetitions) {
            maxRepetitions = appearances[i];
            maxRepetitionsNumber = i;
        }
    }

    console.log(maxRepetitionsNumber + ' (' + maxRepetitions + ' times)');
}

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
