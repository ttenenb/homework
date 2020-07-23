window.app = (function (app) {
    'use strict';


    app.counter = 0;
    app.incrementCounter = function () {
        return ++this.counter;
    };

    return app;

}(window.app || {}));

