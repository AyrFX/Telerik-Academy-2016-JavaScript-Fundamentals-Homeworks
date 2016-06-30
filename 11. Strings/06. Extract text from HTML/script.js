function solve(args) {
    let text = args,
        inTag,
        result = [];
    //matchTags = /<.*?>/ig;

    for (let i = 0; i < text.length; i += 1) {
        text[i] = text[i].trim();
    }
    text = text.join('');

    for (i = 0; i < text.length; i += 1) {
        if (text[i] === '<') {
            inTag = true;
        } else if (text[i] === '>' && inTag) {
            inTag = false;
        } else if (!inTag) {
            result.push(text[i]);
        }
    }
    /*for (let i = 0; i < text.length; i += 1) {
        result.push(text[i].trim().replace(matchTags, ''));
    }*/

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
