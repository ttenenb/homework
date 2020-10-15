(function () {
    'use strict';

    let time = $('#time');

    function updateClock() {
        time.text(`The time is now ${new Date().toLocaleTimeString()}`);
      }
      setInterval(updateClock, 1000);
      updateClock();
}());