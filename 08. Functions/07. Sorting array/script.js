function solve(args) {
    function GetMaximalElement(array, startIndex) {
        var maximalElement = {};
        maximalElement.value = array[startIndex];
        maximalElement.index = startIndex;
        for (var i = startIndex + 1; i < array.length; i++) {
            if (maximalElement.value < array[i]) {
                maximalElement.value = array[i];
                maximalElement.index = i;
            }
        }
        return maximalElement;
    }

    function SortArrayDescending(array) {
        var maxElement, temp;
        for (var i = 0; i < array.length; i += 1) {
            maxElement = GetMaximalElement(array, i);
            temp = maxElement.value;
            array[maxElement.index] = array[i];
            array[i] = temp;
        }
        return array;
    }

    function SortArrayAscending(array) {
        return SortArrayDescending(array).reverse();
    }

    var arrayLength = +args[0],
        array = args[1].split(' ').map(Number),
        sortedArray = SortArrayAscending(array);

    console.log(array.join(' '));
}

solve(['6', '-26 -25 -28 31 2 27']);
