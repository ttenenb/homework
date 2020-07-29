(function () {
    'use strict';
    //setting r, g and b to different values so that colors are not just white, black and gray
    let r = 0;
    let g = 200;
    let b = 100;
    let backgroundIndex = 0;

    function changeColor() {
        
        document.body.style.color = `rgb(${r},${g},${b})`;
        //looping though r,g and b through big numbers because using small numbers doesn't produce varying colors very fast 
        //stopping looping when it gets to the end of rgb range 255 
        if (r < 155) {
            r += 100;
        } else {
            r = 0;
        }
        if (g < 205) {
            g += 50;
        } else {
            g = 0;
        }
        if (b < 235) {
            b += 20;
        } else {
            b = 0;
        }

    }

    const colors = ["red", "blue", "green", "purple", "black", "yellow"];

    function changeBackgroundColor() {

        document.body.style.backgroundColor = colors[backgroundIndex];
        //if color isn't last in the array increment otherwise start from the beginning
        if (colors[backgroundIndex] !== colors[colors.length - 1]) {
            backgroundIndex++;
        } else {
            backgroundIndex = 0;
        }
    }




    let colorToggle;
    let backgroundToggle;
    document.getElementById("button").addEventListener('click', () => {
        if (colorToggle) {
            clearInterval(colorToggle);
            clearInterval(backgroundToggle);
            colorToggle = null;
            document.getElementById("button").innerHTML = "Click to Start";
        } else {
            colorToggle = setInterval(changeColor, 1000);
            backgroundToggle = setInterval(changeBackgroundColor, 1000);
            //don't like that the button text changes before the color - looks weird
            document.getElementById("button").innerHTML = "Click to Stop";
        }
    }

    );

}());