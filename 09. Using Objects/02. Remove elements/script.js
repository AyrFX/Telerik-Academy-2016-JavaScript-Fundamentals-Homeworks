function solve(args) {
    function removeElement(value) {
        var result = [];

        for (var i = 0; i < this.length; i += 1) {
            if (this[i] !== value) {
                result.push(this[i]);
            }
        }

        return result;
    }

    Array.prototype.remove = removeElement;

    var input = args,
        forRemove = input.shift(),
        result;

    result = input.remove(forRemove + '');

    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

solve(['1', '2', '3', '2', '1', '2', '3', '2']);

solve([
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]);
