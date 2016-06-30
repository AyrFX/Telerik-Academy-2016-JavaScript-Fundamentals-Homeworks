function solve(args) {
    let text = args[0],
        result = text;

    do {
        text = result;
        result = text.replace(' ', '&nbsp;');
    } while (result !== text);

    console.log(result);
}

solve(['hello world']);
solve(['This text contains 4 spaces!!']);
