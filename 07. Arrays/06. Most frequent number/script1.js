function solve(args) {
    var array = args[0].split('\n').map(Number),
        maxRepetitions = 0,
        currentRepetitions = 1,
        maxRepetitionsNumber = 0;

    //array.shift();

    for (var i = 0; i < array.length; i += 1) {
        currentRepetitions = 1;
        for (var j = i + 1; j < array.length; j += 1) {
            if (array[i] === array[j]) {
                currentRepetitions += 1;
            }
        }
        if (currentRepetitions > maxRepetitions) {
            maxRepetitions = currentRepetitions;
            maxRepetitionsNumber = array[i];
        }
    }

    console.log(maxRepetitionsNumber + ' (' + maxRepetitions + ' times)');
}

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
