function solve(args) {
    function GetMaximalElement(array, startIndex) {
        var maximalElement = array[startIndex];
        for (var i = startIndex + 1; i < array.length; i++) {
            if (maximalElement < array[i]) {
                maximalElement = array[i];
            }
        }
        return maximalElement;
    }

    function SortArray(array) {
        var sordetArray;
        for (var i = array.length - 1; i >= 0; i += 1) {

        }
    }
}

solve(['6\n-26 -25 -28 31 2 27']);
