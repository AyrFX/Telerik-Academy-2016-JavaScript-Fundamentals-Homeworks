function solve(args) {
    let text = args,
        inTag,
        result = [],
        currentLine;

    for (let i = 0; i < text.length; i += 1) {
        currentLine = text[i].trim();

        for (j = 0; j < currentLine.length; j += 1) {
            if (currentLine[j] === '<') {
                inTag = true;
            } else if (currentLine[j] === '>' && inTag) {
                inTag = false;
            } else if (!inTag) {
                result.push(currentLine[j]);
            }
        }
    }

    console.log(result.join(''));
}

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);
