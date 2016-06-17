function solve(args) {
    var min = args[0],
        max = args[0],
        sum = args[0];

    for (var i = 1; i < args.length; i++) {
        if (min > +args[i]) {
            min = args[i];
        }
        if (max < +args[i]) {
            max = args[i];
        }
        sum += args[i];
    }
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + (sum / args.length).toFixed(2));
}
