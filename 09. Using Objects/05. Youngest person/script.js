function solve(args) {
    function createPerson(firstName, lastName, age) {
        return {
            firstName: firstName,
            lastName: lastName,
            fullName: function () {
                return this.firstName + ' ' + this.lastName;
            },
            age: age,
        };
    }

    function findYoungest() {
        var youngest = this[0];
        for (var i = 0; i < this.length; i += 1) {
            if (youngest.age > this[i].age) {
                youngest = this[i];
            }
        }

        return youngest;
    }

    Array.prototype.findYoungest = findYoungest;

    var personstList = [];
    for (var i = 0; i < args.length - 2; i += 3) {
        var fName = args[i],
            lName = args[i + 1],
            age = args[i + 2];
        personstList.push(createPerson(fName, lName, age));
    }

    console.log(personstList.findYoungest().fullName());
}

solve([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]);

solve([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]);
