function solve(args) {
    let text = args,
        inTag,
        result = [],
        currentLine,
        i;

    for (i = 0; i < text.length; i += 1) {
        currentLine = text[i].trim();

        if (currentLine.indexOf('<') !== -1) {
            for (j = 0; j < currentLine.length; j += 1) {
                if (currentLine[j] === '<') {
                    inTag = true;
                } else if (currentLine[j] === '>' && inTag) {
                    inTag = false;
                } else if (!inTag) {
                    result.push(currentLine[j]);
                }
            }
        } else {
            result.push(currentLine);
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
