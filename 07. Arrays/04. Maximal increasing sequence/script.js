function solve(args) {
    var array = args[0].split('\n').map(Number),
        currentLength = 1,
        maximalLength = 1;

    for (var i = 0; i < array.length; i += 1) {
        for (var j = i + 1; j < array.length; j += 1) {
            if (array[j] === array[j - 1] + 1) {
                currentLength += 1;
            } else {
                if (maximalLength < currentLength) {
                    maximalLength = currentLength;
                }
                currentLength = 1;
                break;
            }
        }
    }

    console.log(maximalLength);
}

solve(['8\n7\n3\n2\n3\n4\n2\n2\n4']);
solve(['8\n1\n2\n3\n4\n4\n2\n2\n4']);
solve(['8\n7\n3\n2\n3\n4\n5\n3\n7']);
solve(['8\n7\n6\n5\n4\n3\n2\n1\n0']);
