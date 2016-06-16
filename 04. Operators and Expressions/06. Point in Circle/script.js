function solve(args) {
    var xCoordinate = +args[0],
        yCoordinate = +args[1];
    const radius = 2;
    var distance = Math.sqrt(xCoordinate * xCoordinate + yCoordinate * yCoordinate);
    if (distance <= radius) {
        console.log('yes ' + distance.toFixed(2));
    } else {
        console.log('no ' + distance.toFixed(2));
    }
}
