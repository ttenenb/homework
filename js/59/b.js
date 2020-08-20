window.app = (function (app) {
    'use strict';

    // SL - ok - but as counter in Part A, not private... this can be changed by anybody by writing app.globalIncrementer = x
    // should be local variable kept alive by closures
    app.globalIncrementer = 0;


    app.createCounter = function () {

        ++app.globalIncrementer;

        return {
            // SL - and again, counter is not private. Users can change it...
            counter: 0,
            increment: function () {
                return ++this.counter;
            }
        };

};


return app;
}(window.app || {}));




