function solve(args) {
    var input = args[0].split('\n'),
        arrayLength = +input[0],
        array = input[1].split(' ').map(Number),
        counter = 0;

    function Larger(array, index) {
        if (index === 0 && array[index] > array[index + 1]) {
            return false;
        } else if (index === array.length && array[index] > array[index - 1]) {
            return false;
        } else if (array[index] > array[index - 1] && array[index] > array[index + 1]) {
            return true;
        } else {
            return false;
        }
    }

    for (var i = 0; i < array.length; i += 1) {
        if (Larger(array, i)) {
            counter += 1;
        }
    }
    console.log(counter);
}

solve(['6', '-26 -25 -28 31 2 27']);
