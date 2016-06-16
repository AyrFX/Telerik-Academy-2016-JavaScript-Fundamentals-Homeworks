function solve(args) {
    var inputNumber = +args[0],
        thirdDigit;
    thirdDigit = ((inputNumber / 100) | 0) % 10;
    if (thirdDigit == 7) {
        console.log('true');
    } else {
        console.log('false ' + thirdDigit);
    }
}
