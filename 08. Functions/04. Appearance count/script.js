function solve(args) {
    var input = args[0],
        lines = input.split('\n'),
        arrayLenght = +lines[0],
        numbers = lines[1].split(' ').map(Number),
        numberForCount = +lines[2],
        CountAppearances = function (array, number) {
            var count = 0;

            for (var i = 0; i < array.length; i++) {
                if (array[i] === number) {
                    count += 1;
                }
            }
            return count;
        };

    console.log(CountAppearances(numbers, numberForCount));
}

solve(['8', '28 6 21 6 -7856 73 73 -56', '73']);
