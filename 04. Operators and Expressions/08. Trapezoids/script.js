function solve(args) {
    var aSide = +args[0],
        bSide = +args[1],
        height = +args[2],
        area = ((aSide + bSide) / 2) * height;
    console.log(area.toFixed(7));
}
