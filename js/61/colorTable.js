(function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }
  
    let interval;
    const theButton = get('start');
    const theTable = get('colorTable');

    function getColorPart() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();

        return `rgb(${r},${g},${b})`;
    }
    const colors = [];

    const colorTable = get('colorTable');

    function startColors() {
        interval = setInterval(() => {
            const backgroundColor = getRandomColor();
            const color = getRandomColor();
            setCss(document.body, 'backgroundColor', backgroundColor);
            setCss(document.body, 'color', color);
            if (!colors.length) {
               colorTable.deleteRow(1);
            }
            const newRow = theTable.insertRow();
            newRow.addEventListener('click', () => {
                setCss(document.body, 'background-color', backgroundColor);
                setCss(document.body, 'color', color);
            });
            const timeCell = newRow.insertCell();
            const backgroundColorCell = newRow.insertCell();
            const colorCell = newRow.insertCell();
            const now = new Date();
            timeCell.innerHTML = now.toLocaleTimeString();
            setCss(backgroundColorCell, 'background-color', backgroundColor);
            //need to to the background-color because there's no text
            setCss(colorCell, 'background-color', color); 
            colors.push(backgroundColor);
            theButton.innerHTML = 'stop';
        }, 1000);
    }

    function stopColors() {
        clearInterval(interval);
        interval = null;
        theButton.innerHTML = 'start';
    }

    get('start').addEventListener('click', function () {
        if (!interval) {
            startColors();
        } else {
            stopColors();
        }
    });
}());