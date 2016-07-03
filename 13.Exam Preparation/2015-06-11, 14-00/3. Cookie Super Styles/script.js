function solve(args) {
    let result = '',
        i, j, k,
        selectors;
    for (i = 0; i < args.length; i += 1) {
        result += args[i].replace(/\s+/igm, '');
    }
    result = result.replace(/;}/igm, '}');
    selectors = result.match(/}.+?{/igm);

    for (i = 0; i < selectors.length; i += 1) {
        for (j = i + 1; j < selectors.length; j += 1) {
            if (selectors[i] === selectors[j]) {
                let firstSelectorStart = result.indexOf(selectors[i]),
                    firstSelectorEnd = result.indexOf('}', firstSelectorStart + 1),
                    secondSelectorStart = result.indexOf(selectors[j], firstSelectorEnd),
                    secondSelectorEnd = result.indexOf('}', secondSelectorStart + 1),
                    secondProperties = '',
                    newResult = '';

                for (k = 0; k <= result.length; k += 1) {
                    if (k < secondSelectorStart + 1 || k > secondSelectorEnd) {
                        newResult += result[k];
                    } else {
                        secondProperties += result[k];
                    }
                }

                firstSelectorStart += selectors[i].length;
                firstSelectorEnd -= 1;
                result = '';
                for (k = 0; k <= newResult.length; k += 1) {
                    if (k === firstSelectorEnd - 1) {
                        result += secondProperties + result[k];
                    } else {
                        result += newResult[k];
                    }
                }

                console.log(firstSelectorStart);
                console.log(firstSelectorEnd);
                console.log(secondSelectorStart);
                console.log(secondSelectorEnd);

            }
        }
    }

    console.log(result);
}

solve([
    '#the-big-b{',
    '  color: yellow;',
    '  size: big;',
    '}',
    '.muppet{',
    '  powers: all;',
    '  skin: fluffy;',
    '}',
    '     .water-spirit         {',
    '  powers: water;',
    '             alignment    : not-good;',
    '				}',
    'all{',
    '  meant-for: nerdy-children;',
    '}',
    '.muppet      {',
    '	powers: everything;',
    '}',
    'all              .muppet {',
    '	alignment             :             good                             ;',
    '}',
    '   .muppet+             .water-spirit{',
    '   power: everything-a-muppet-can-do-and-water;',
    '}'
]);
