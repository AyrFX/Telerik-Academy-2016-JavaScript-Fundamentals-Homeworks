function solve(args) {
    var array = args[0].split('\n').map(Number),
        arrayLength = array.shift(),
        number = array.pop(),
        firstSearchIndex = 0,
        lastSearchIndex = array.length,
        middle = -1;

    while (middle !== 0) {
        middle = Math.round((lastSearchIndex - firstSearchIndex) / 2);
        if (array[middle + firstSearchIndex] == number) {
            console.log(middle + firstSearchIndex);
            return;
        } else if (number < array[middle + firstSearchIndex]) {
            lastSearchIndex -= middle;
        } else {
            firstSearchIndex += middle;
        }
    }
    console.log(-1);
}

solve(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']);
