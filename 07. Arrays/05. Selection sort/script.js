function solve(args) {
    var array = args[0].split('\n').map(Number);
    array.shift();

    function Swap(array, aIndex, bIndex) {
        var tempNumber = array[aIndex];

        array[aIndex] = array[bIndex];
        array[bIndex] = tempNumber;
    }

    function FindMinIndex(array, startIndex) {
        var minElement = array[startIndex],
            minIndex = startIndex;
        for (var i = startIndex; i < array.length; i += 1) {
            if (array[i] < minElement) {
                minElement = array[i];
                minIndex = i;
            }
        }
        return minIndex;
    }

    for (var i = 0; i < array.length - 1; i += 1) {
        var minIndex = FindMinIndex(array, i);
        if (array[minIndex] < array[i]) {
            Swap(array, minIndex, i);
        }
    }

    console.log(array.join('\n'));
}

solve(['6\n3\n4\n1\n5\n2\n6']);
solve(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']);
