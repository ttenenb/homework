(function () {
    'use strict';

    class Student {

        constructor(firstName, lastName, age, grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }

    }

    const students = [
        new Student('George', 'Fredrick', 22, 90.00),
        new Student('Harry', 'Poiter', 20, 87.50),
        new Student('Larry', 'Taylor', 21, 78.75),
        new Student('Eric', 'Gayer', 17, 70.50),
        new Student('Alex', 'Peif', 27, 99.50),
        new Student('Keth', 'Ulin', 18, 83.15)
    ];

    function printStudents(regOrder, ...args) {
        for (let index = 0; index < args.length; index++) {
            let { firstName, lastName, age, grade} = args[index];
            if (!regOrder) {
                let temporaryContainer = firstName;
                firstName = lastName; 
                lastName = temporaryContainer;
            } 
                console.log(firstName, lastName, age, grade);
        }
    }

    function copy(student) {
        let { firstName, lastName, ...rest } = student;
        const studentCopy = { firstName: lastName, lastName: firstName, ...rest };
        return studentCopy;
    }

    let [one, two, ...rest] = students;
    printStudents(true, one, two, ...rest);
    console.log(copy(two));
}());