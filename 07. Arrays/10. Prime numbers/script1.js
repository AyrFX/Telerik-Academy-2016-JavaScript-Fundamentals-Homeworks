function solve(args) {
    var toNumber = +args[0],
        i;

    for (i = toNumber; i > 0; i -= 1) {
        for (var j = Math.ceil(Math.sqrt(i)); j >= 1; j -= 1) {
            if (i % j === 0) {
                break;
            }
        }

        if (i % j === 0) {
            continue;
        }

        console.log(i);
        return;
    }
}

solve(['13']);
solve(['126']);
