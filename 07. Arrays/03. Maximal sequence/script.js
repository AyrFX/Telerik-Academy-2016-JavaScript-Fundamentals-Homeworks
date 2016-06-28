function solve(args) {
    var array = args[0].split('\n'),
        currentSequence = 0,
        longestSequence = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] == array[i - 1]) {
            currentSequence += 1;
            if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
            }
        } else {
            currentSequence = 1;
        }
    }

    console.log(longestSequence);
}

solve(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']);
