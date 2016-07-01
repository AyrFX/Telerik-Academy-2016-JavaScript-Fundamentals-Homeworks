function solve(args) {
    let values = JSON.parse(args[0]),
        text = args[1],
        matches = text.match(/#{(.*?)}/g),
        currentProperty;

    String.prototype.applyValues = function (matches) {
        let result = this;
        for (let i = 0; i < matches.length; i += 1) {
            currentProperty = matches[i].match(/([^#|^{|^}]+)/g);
            result = result.replace('#{' + currentProperty + '}', values[currentProperty]);
        }
        return result;
    };

    console.log(text.applyValues(matches));
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
