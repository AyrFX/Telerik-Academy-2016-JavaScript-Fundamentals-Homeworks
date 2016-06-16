function solve(args) {
    var inputNumber = args[0] * 1;
    if (inputNumber % 5 === 0 && inputNumber % 7 === 0) {
        console.log('true ' + inputNumber);
    } else {
        console.log('false ' + inputNumber);
    }
}
