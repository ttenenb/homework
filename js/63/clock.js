(function () {
    'use strict';

    const clockDiv = document.createElement('div');
    const clockSpan = document.createElement('span');
    clockDiv.style.border = 'solid black 1px';
    clockDiv.style.width = '5.5em';
    clockDiv.style.margin = '1em';
    clockDiv.style.padding = '.25em';
    clockDiv.appendChild(clockSpan);
    document.body.appendChild(clockDiv);

    function clock() {
        let time = new Date();
        const actualTime = time.toLocaleTimeString();      
        clockSpan.innerHTML = actualTime;

    }

    return {
        clock: setInterval(clock, 1000)
    };

}());