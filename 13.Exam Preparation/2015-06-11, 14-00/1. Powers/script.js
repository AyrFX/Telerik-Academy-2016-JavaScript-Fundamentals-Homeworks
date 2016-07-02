function solve(params) {
    let k = params[0].split(' ').map(Number)[1],
        numbers = params[1].split(' ').map(Number),
        i,
        j,
        prevIndex,
        currentIndex,
        nextIndex,
        resultArray = [],
        result;

    function Transform(numbers) {
        resultArray = [];
        for (i = 0; i < numbers.length; i += 1) {
            currentIndex = i;
            if (i === 0) {
                prevIndex = numbers.length - 1;
                nextIndex = i + 1;
            } else if (i === numbers.length - 1) {
                prevIndex = i - 1;
                nextIndex = 0;
            } else {
                prevIndex = i - 1;
                nextIndex = i + 1;
            }

            switch (numbers[currentIndex]) {
            case 0:
                resultArray[currentIndex] = Math.abs(numbers[prevIndex] - numbers[nextIndex]);
                break;
            case 1:
                resultArray[currentIndex] = numbers[prevIndex] + numbers[nextIndex];
                break;
            default:
                if (isEven(numbers[currentIndex])) {
                    resultArray[currentIndex] = Math.max(numbers[prevIndex], numbers[nextIndex]);
                } else {
                    resultArray[currentIndex] = Math.min(numbers[prevIndex], numbers[nextIndex]);
                }
            }
        }
        return resultArray;
    }

    function isEven(number) {
        if (number % 2) {
            return false;
        } else {
            return true;
        }
    }

    for (j = 0; j < k; j += 1) {
        numbers = Transform(numbers);
    }

    result = numbers.reduce(function (sum, el) {
        return sum + el;
    });
    console.log(result);
}

solve(['5 1', '9 0 2 4 1']);
solve(['10 3', '1 9 1 9 1 9 1 9 1 9']);
solve(['10 10', '0 1 2 3 4 5 6 7 8 9']);
