// SL - ok - but app.counter is public, not private. Anyone can change the count without using the incrementCounter function
// by just writing app.counter = x...
// coumter should be a "parent environment" variable kept alive by the closures returned to user (and another one should be returned that "gets" current value of counter)
window.app = (function (app) {
    'use strict';


    app.counter = 0;
    app.incrementCounter = function () {
        return ++this.counter;
    };

    return app;

}(window.app || {}));

