function solve(args) {
    function GetMax(aNumber, bNumber) {
        return Math.max(+aNumber, +bNumber);
    }

    var numbers = args[0].split(" ").map(Number),
        max = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        max = GetMax(max, numbers[i]);
    }
    console.log(max);
}

solve("8 3 6");
solve("7 19 19");
