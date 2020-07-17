window.myApp = window.myApp || {};

window.myApp.dayUtils = (function (dayUtils) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    dayUtils.getDayName = (index => days[index - 1]);
    dayUtils.getDayNumber = function (name) {
        return days.findIndex(elem => elem === name) + 1;
    };
    return dayUtils;

}(window.myApp.dayUtils || {}));

console.log(window.myApp.dayUtils.getDayName(6), window.myApp.dayUtils.getDayNumber('Shabbos'));