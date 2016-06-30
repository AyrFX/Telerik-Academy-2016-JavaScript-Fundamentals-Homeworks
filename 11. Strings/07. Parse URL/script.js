function solve(args) {
    let address = args[0],
        protocol = address.split('://')[0],
        slashSplitted = address.split('://')[1].split('/'),
        server = slashSplitted[0],
        resource = '',
        i;

    for (i = 1; i < slashSplitted.length; i += 1) {
        resource += '/' + slashSplitted[i];
    }

    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resource);
}

solve(['http://telerikacademy.com/Courses/Courses/Details/239']);
