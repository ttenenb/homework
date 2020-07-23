window.app = (function (app) {
    'use strict';


    app.globalIncrementer = 0;


    app.createCounter = function () {
      
        ++app.globalIncrementer;

        return {
            counter: 0,
            increment: function () {
                return ++this.counter;
            }
        };
       
};


return app;
}(window.app || {}));




