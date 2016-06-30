function solve(args) {
    let text = args[0],
        openBrackets = 0,
        closeBrackets = 0;

    for (var i = 0; i < text.length; i++) {
        if (text[i] === '(') {
            openBrackets += 1;
        } else if (text[i] === ')') {
            closeBrackets += 1;
        }

        if (openBrackets < closeBrackets) {
            console.log('Incorrect');
            return;
        }
    }

    if (openBrackets === closeBrackets) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}

solve(['((a+b)/5-d)']);
solve([')(a+b))']);
