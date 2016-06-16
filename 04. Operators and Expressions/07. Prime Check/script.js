function solve(args) {
    var inputNumber = +args[0];

    if (inputNumber < 2) {
        console.log('false');
        return;
    }
    for (var i = 2; i <= Math.sqrt(inputNumber); i++) {
        if (inputNumber % i === 0) {
            console.log('false');
            return;
        }
    }
    console.log(true);
}
