const dayOfWeek = (function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    return {
        getDayName: function (index) {
            return days[index - 1];
        },
        getDayNumber: function (name) {
            return days.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        }
    };
}());

console.log(dayOfWeek.getDayName(7));
console.log(dayOfWeek.getDayNumber('sunday'));

///////////////////////////////////////////////

const interestCalculator = (function () {
    'use strict';

    let interestRate;

    let years;

    return {
        setRate: function (interest) {
            /*jshint -W093*/
            return interestRate = interest;
            /*jshint +W093*/
        },
        setNumberOfYears: function (NumberYears) {
            /*jshint -W093*/
            return years = NumberYears;
            /*jshint +W093*/
        },
        calculateInterest: function (principal) {
            return principal * interestRate * years;
        }

    };
    
}());

interestCalculator.setRate(0.02);
interestCalculator.setNumberOfYears(5);
console.log(interestCalculator.calculateInterest(1000));
