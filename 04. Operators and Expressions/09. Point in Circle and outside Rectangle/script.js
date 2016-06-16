function solve(args) {
    var pointXCoordinate = args[0],
        pointYCoordinate = args[1],
        distanceToCenter,
        isInCircle,
        isInRect,
        outputString;
    const circleCenterX = 1,
        circleCenterY = 1,
        circleRadius = 1.5,
        rectTop = 1,
        rectLeft = -1,
        rectWidth = 6,
        rectHeight = 2;

    distanceToCenter = Math.sqrt((pointXCoordinate - circleCenterX) * (pointXCoordinate - circleCenterX) + (
        pointYCoordinate - circleCenterY) * (pointYCoordinate - circleCenterY));
    isInCircle = distanceToCenter <= circleRadius;
    isInRect = (pointXCoordinate >= rectLeft &&
        pointXCoordinate <= rectWidth + rectLeft &&
        pointYCoordinate <= rectTop &&
        pointYCoordinate >= rectTop - rectHeight);
    if (isInCircle) {
        outputString = "inside circle ";
    } else {
        outputString = "outside circle ";
    }
    if (isInRect) {
        outputString = outputString + "inside rectangle";
    } else {
        outputString = outputString + "outside rectangle";
    }
    console.log(outputString);
}
