function solve(args) {
    let text = args[0],
        currentTagPositions,
        link,
        description;

    function getFirstAnchor(text) {
        let openTagStart = text.indexOf('<a'),
            openTagEnd,
            closeTagStart,
            closeTagEnd;

        if (openTagStart === -1) {
            openTagEnd = -1;
            closeTagStart = -1;
            closeTagEnd = -1;
        } else {
            openTagEnd = text.indexOf('>', openTagStart + 1);
            closeTagStart = text.indexOf('</a>', openTagEnd + 1);
            closeTagEnd = text.indexOf('>', closeTagStart);
        }

        return {
            openTagStart: openTagStart,
            openTagEnd: openTagEnd,
            closeTagStart: closeTagStart,
            closeTagEnd: closeTagEnd
        };
    }

    currentTagPositions = getFirstAnchor(text);
    while (currentTagPositions.openTagStart !== -1) {
        link = text.slice(currentTagPositions.openTagStart + 9, currentTagPositions.openTagEnd - 1);
        description = text.slice(currentTagPositions.openTagEnd + 1, currentTagPositions.closeTagStart);
        text = text.replace(text.substring(currentTagPositions.openTagStart, currentTagPositions.closeTagEnd + 1),
            '[' + description + '](' + link + ')');
        currentTagPositions = getFirstAnchor(text);
    }

    console.log(text);
}

solve([
    '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'
]);
