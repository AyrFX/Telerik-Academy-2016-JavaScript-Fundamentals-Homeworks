function solve(args) {
    var input = args[0].split('\n'),
        arrayLength = +input[0],
        array = input[1].split(' ').map(Number),
        counter = 0;

    function FirstLarger(array) {
        for (var i = 1; i < array.length - 1; i++) {
            if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
                return i;
            }
        }
        return -1;
    }

    console.log(FirstLarger(array));
}

solve(['6\n-26 -25 -28 31 2 27']);
