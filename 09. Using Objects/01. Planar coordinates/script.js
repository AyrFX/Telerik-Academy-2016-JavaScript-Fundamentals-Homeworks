function solve(args) {
    function createPoint(xValue, yValue) {
        return {
            xValue: xValue,
            yValue: yValue
        };
    }

    function createLine(aPoint, bPoint) {
        return {
            aPoint: aPoint,
            bPoint: bPoint,
            length: function () {
                return Math.sqrt((aPoint.xValue - bPoint.xValue) * (aPoint.xValue - bPoint.xValue) +
                    (aPoint.yValue - bPoint.yValue) * (aPoint.yValue - bPoint.yValue));
            }
        };
    }

    function canBuildTriangle(aLine, bLine, cLine) {
        if ((aLine.length() > bLine.length() + cLine.length()) ||
            (bLine.length() > aLine.length() + cLine.length()) ||
            (cLine.length() > aLine.length() + bLine.length())) {
            return false;
        } else {
            return true;
        }
    }

    var input = args.map(Number),
        lines = [];
    for (var i = 0; i < input.length - 3; i += 4) {
        var firstPoint = createPoint(input[i], input[i + 1]),
            secondPoint = createPoint(input[i + 2], input[i + 3]);
        lines.push(createLine(firstPoint, secondPoint));
    }

    for (var i = 0; i < lines.length; i += 1) {
        console.log(lines[i].length().toFixed(2));
    }

    if (canBuildTriangle(lines[0], lines[1], lines[2])) {
        console.log('Triangle can be built');
    } else {
        console.log('Triangle can not be built');
    }
}

solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]);

solve([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]);
