window.pcs = function (id) {
    'use strict';
  
    function get(id) {
      return document.getElementById(id);
    }
  
    function setCss(element, property, value) {
      element.style[property] = value;
    }
  
    function getCss(element, property) {
      //return element.style[property];
      return getComputedStyle(element)[property];
    }
  
    function clearBackgroundToggle() {
        clearInterval(backgroundToggle);
        backgroundToggle = null;
    }

    const theElem = get(id);
    const colors = ["red", "blue", "green", "purple", "gray", "yellow"];
    let backgroundIndex = 0;
    let backgroundToggle;

    function changeBackgroundColor() {

        theElem.style.backgroundColor = colors[backgroundIndex];
        //if color isn't last in the array increment otherwise start from the beginning
        if (colors[backgroundIndex] < colors[colors.length - 1]) {
            backgroundIndex++;
        } else {
            backgroundIndex = 0;
        }
    }

  
    return {
      /*setCss: (property, value) => setCss(theElem, property, value),
      getCss: property => getCss(theElem, property),*/
      css: function (property, value) {
        if (arguments.length < 2) { // get
          return getCss(theElem, property);
        }
        setCss(theElem, property, value);
        return this;
      },
      click: function (callback) {
        theElem.addEventListener('click', callback);
        return this;
      },
      hide: function () {
        setCss(theElem, 'display', 'none');
        return this;
      },
      show: function () {
        setCss(theElem, 'display', 'block');
        return this;
        },
     changeBackgroundColor: function (length, speed = 1) {
            theElem.addEventListener('click', () => {
                if (backgroundToggle) {
                    clearBackgroundToggle();
                } else {
                    // backgroundToggle = setInterval(changeColor, 1000);
                    setTimeout(clearBackgroundToggle, length * 1000);
                    backgroundToggle = setInterval(changeBackgroundColor, speed * 1000);
                }
                //clearTimeout(timeoutId);
         });
         return this;
      }
    };
  };