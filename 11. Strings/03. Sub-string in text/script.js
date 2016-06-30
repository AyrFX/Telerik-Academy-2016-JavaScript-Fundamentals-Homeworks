function solve(args) {
    let substring = args[0],
        text = args[1],
        tempArray = [];

    substring = substring.toUpperCase();
    text = text.toUpperCase();
    tempArray = text.split(substring);

    console.log(tempArray.length - 1);
}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);
