function solve(args) {
    var toNumber = +args[0],
        sieve = [],
        checkTo = Math.ceil(Math.sqrt(toNumber)) + 1,
        i;

    // for (i = 0; i <= toNumber; i += 1) {
    //     sieve.push(true);
    // }

    for (i = 2; i <= checkTo; i += 1) {
        if (sieve[i] === false) {
            continue;
        }
        for (var j = i; j <= toNumber; j += i) {
            if (j % i === 0 && j != i) {
                sieve[j] = false;
            }
        }
    }

    for (i = toNumber; i > 0; i -= 1) {
        if (sieve[i] === undefined) {
            console.log(i);
            return;
        }
    }
}

solve(['13']);
solve(['126']);
