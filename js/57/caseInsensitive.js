window.myApp = window.myApp || {};

window.myApp.caseUtils = (function (caseUtils) {
    'use strict';
    caseUtils.stringCaseInsensitiveEquals = function (elem, compareTo) {
        if (elem.localeCompare(compareTo, 'en', { sensitivity: 'base' }) !== 0) {
            return false;
        }
        return true;
    };

    return caseUtils;
}(window.myApp.caseUtils || {}));

console.log(window.myApp.caseUtils.stringCaseInsensitiveEquals('POP', 'pop'));