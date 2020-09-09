(function () {
    'use strict';
    
    const inputFile= $('#getFileName');
    const display = $('#loadSpace'); 
    const button = $('#loadButton');
    display.css('white-space', 'pre');

    //not exactly what the hw asked to do 
    function spinner() {
        if (document.readyState === 'complete'){
            document.body.style.cursor = 'wait';
            setTimeout(() => document.body.style.cursor = 'auto', 3000);
        }
    }

    button.click(function () {
        fetch(inputFile.val())
            .then(response => response.text())
            .then(text => {
                spinner();
                display.append(text);    
            })
            .catch(error =>  display.append(error));
            });
            
}());


  