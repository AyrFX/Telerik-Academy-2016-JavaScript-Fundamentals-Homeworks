function solve(args) {
    var hexNumber = args[0],
        decNumber = 0,
        currentPower = -1;

    for (var i = hexNumber.length - 1; i >= 0; i--) {
        currentPower += 1;
        switch (hexNumber[i]) {
        case '0':
            decNumber += 0 * Math.pow(16, currentPower);
            break;
        case '1':
            decNumber += 1 * Math.pow(16, currentPower);
            break;
        case '2':
            decNumber += 2 * Math.pow(16, currentPower);
            break;
        case '3':
            decNumber += 3 * Math.pow(16, currentPower);
            break;
        case '4':
            decNumber += 4 * Math.pow(16, currentPower);
            break;
        case '5':
            decNumber += 5 * Math.pow(16, currentPower);
            break;
        case '6':
            decNumber += 6 * Math.pow(16, currentPower);
            break;
        case '7':
            decNumber += 7 * Math.pow(16, currentPower);
            break;
        case '8':
            decNumber += 8 * Math.pow(16, currentPower);
            break;
        case '9':
            decNumber += 9 * Math.pow(16, currentPower);
            break;
        case 'A':
            decNumber += 10 * Math.pow(16, currentPower);
            break;
        case 'B':
            decNumber += 11 * Math.pow(16, currentPower);
            break;
        case 'C':
            decNumber += 12 * Math.pow(16, currentPower);
            break;
        case 'D':
            decNumber += 13 * Math.pow(16, currentPower);
            break;
        case 'E':
            decNumber += 14 * Math.pow(16, currentPower);
            break;
        case 'F':
            decNumber += 15 * Math.pow(16, currentPower);
            break;
        }
    }
    console.log(decNumber);
}

solve(['FE']);
solve(['1AE3']);
solve(['4ED528CBB4']);
