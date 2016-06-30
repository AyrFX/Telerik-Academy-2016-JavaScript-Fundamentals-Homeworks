function solve(args) {
    let text = args[0],
        inTag = false,
        readTag,
        currentTag = '',
        tags = [],
        result = [];

    for (var i = 0; i < text.length; i++) {
        if (text[i] === '<') {
            inTag = true;
            readTag = true;
        } else if (text[i] === '>' && inTag) {
            inTag = false;
            readTag = false;
            currentTag += text[i];
            tags.push(currentTag);
            currentTag = '';
        } else if (!inTag) {
            if (tags.length === 0) {
                result.push(text[i]);
            } else if (tags[tags.length - 1].indexOf('upcase') !== -1) {
                result.push(text[i].toUpperCase());
            } else if (tags[tags.length - 1].indexOf('lowcase') !== -1) {
                result.push(text[i].toLowerCase());
            } else {
                result.push(text[i]);
            }
        }

        if (readTag || text[i] === '>') {
            currentTag += text[i];
        }

        if (tags.length !== 0 && tags[tags.length - 1].indexOf('</') !== -1) {
            tags.pop();
            tags.pop();
        }
    }

    console.log(result.join(''));
    //console.log(tags);
}

solve([
    'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'
]);
solve([
    'We are <orgcase>liViNg</orgcase> in a <upcase>yellow <orgcase>sub<upcase>mar</upcase>ine</orgcase></upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'
]);
