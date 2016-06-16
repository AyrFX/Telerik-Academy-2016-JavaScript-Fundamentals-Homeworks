function solve(args) {
    var inputNumber = +args[0],
        mask = 1;

    mask = mask << 3;
    mask = mask & inputNumber;
    mask = mask >> 3;
    console.log(mask);
}
