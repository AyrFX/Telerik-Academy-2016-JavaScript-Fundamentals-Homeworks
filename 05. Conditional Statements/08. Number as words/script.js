function solve(args) {
    var inputNumber = +args[0],
        outputString = '';
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        tillTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteent', 'sixteen', 'seventeen',
            'eighteen', 'nineteen'
        ],
        tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (inputNumber < 10) {
        outputString = digits[inputNumber];
    } else if (inputNumber < 20) {
        outputString = tillTwenty[inputNumber % 10];
    } else if (inputNumber < 100) {
        var secondDigit = inputNumber % 10,
            firstDigit = Math.floor(inputNumber / 10);
        outputString = tens[firstDigit - 2] + ' ' + digits[secondDigit];
    } else {
        var thirdDigit = inputNumber % 10,
            secondDigit = Math.floor((inputNumber % 100) / 10),
            firstDigit = Math.floor(inputNumber / 100);
        if (secondDigit == 0 && thirdDigit == 0) {
            outputString = digits[firstDigit] + ' hundred';
        } else if (secondDigit == 0 && thirdDigit != 0) {
            outputString = digits[firstDigit] + ' hundred and ' + digits[thirdDigit];
        } else if (secondDigit == 1) {
            outputString = digits[firstDigit] + ' hundred and ' + tillTwenty[thirdDigit];
        } else if (thirdDigit !== 0) {
            outputString = digits[firstDigit] + ' hundred and ' + tens[secondDigit - 2] + ' ' + digits[thirdDigit];
        } else {
            outputString = digits[firstDigit] + ' hundred and ' + tens[secondDigit - 2];
        }
    }
    console.log(outputString.charAt(0).toUpperCase() + outputString.slice(1));
}
