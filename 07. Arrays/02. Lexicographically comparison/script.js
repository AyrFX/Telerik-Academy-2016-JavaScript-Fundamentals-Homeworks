function solve(args) {
    var input = args[0].split('\n'),
        firstArray = input[0].split(''),
        secondArray = input[1].split('');

    if (firstArray.length > secondArray.length) {
        var difference = firstArray.length - secondArray.length;
        for (var i = 0; i < difference; i += 1) {
            secondArray.push('');
        }
    } else if (secondArray.length > firstArray.length) {
        var difference = secondArray.length - firstArray.length;
        for (var i = 0; i < difference; i += 1) {
            firstArray.push('');
        }
    }

    for (var i = 0; i < firstArray.length; i++) {
        if (firstArray[i] < secondArray[i]) {
            console.log('<');
            return;
        } else if (firstArray[i] > secondArray[i]) {
            console.log('>');
            return;
        }
    }

    console.log('=');
    return;
}

solve(['hello\nhalo']);
