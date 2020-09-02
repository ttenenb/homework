(function () {
    'use strict';

    function buttonForClock() {
        const addClock = document.createElement('button');
        addClock.innerText = 'add clock';
        document.body.appendChild(addClock);
        addClock.addEventListener('click', () => {
            let clockDiv = document.createElement('div');
            document.body.appendChild(clockDiv);
            clockDiv.style.border = 'solid red 1px';
            clockDiv.style.width = '6em';
            clockDiv.style.margin = '1em';
            clockDiv.style.padding = '.25em';
            setInterval(() => {
                let time = new Date();
                clockDiv.innerHTML = time.toLocaleTimeString();
            }, 1000);
        });
    }


    return {
        addButton: buttonForClock()
    };

}());