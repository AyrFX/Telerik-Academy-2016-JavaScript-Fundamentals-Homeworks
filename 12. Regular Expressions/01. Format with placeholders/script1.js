function solve(args) {
    let values = JSON.parse(args[0]),
        text = args[1];

    String.prototype.applyValues = function (values) {
        let result = this;
        for (let currentProperty in values) {
            result = result.replace('#{' + currentProperty + '}', values[currentProperty]);
        }
        return result;
    };

    console.log(text.applyValues(values));
    //console.log(matches);
}

solve([
    '{ "name": "John" }',
    'Hello, there! Are you #{name}?'
]);
solve([
    '{ "name": "John", "age": 13 }',
    'My name is #{name} and I am #{age}-years-old'
]);
