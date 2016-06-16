function solve(args) {
    var width = args[0] * 1,
        height = args[1] * 1,
        perimeter = 2 * (width + height),
        area = width * height;
    console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));
}
