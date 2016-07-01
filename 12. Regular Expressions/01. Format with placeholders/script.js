function solve(args) {
    let values = JSON.parse(args[0]),
        text = args[1],
        matches = text.match(/#{(.*?)}/g),
        currentProperty;

    for (var i = 0; i < matches.length; i += 1) {
        currentProperty = matches[i].match(/(\w+)/g)[0];
        text = text.replace('#{' + currentProperty + '}', values[currentProperty]);
    }

    console.log(text);
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
