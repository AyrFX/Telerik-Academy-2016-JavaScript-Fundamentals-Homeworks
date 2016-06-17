function solve() {
    var smallest = '~',
        largest = '';
    for (var prop in document) {
        if (smallest > prop) {
            smallest = prop;
        }
        if (largest < prop) {
            largest = prop;
        }
    }
    console.log('Smallest in Document: ' + smallest);
    console.log('Largest in Document: ' + largest);

    smallest = '~';
    largest = '';
    for (prop in window) {
        if (smallest > prop) {
            smallest = prop;
        }
        if (largest < prop) {
            largest = prop;
        }
    }
    console.log('Smallest in Window: ' + smallest);
    console.log('Largest in Window: ' + largest);

    smallest = '~';
    largest = '';
    for (prop in navigator) {
        if (smallest > prop) {
            smallest = prop;
        }
        if (largest < prop) {
            largest = prop;
        }
    }
    console.log('Smallest in Navigator: ' + smallest);
    console.log('Largest in Navigator: ' + largest);
}

solve();
