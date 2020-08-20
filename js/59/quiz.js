// SL - Nice
(function () {
    'use strict';

    function myMap(theArray, callback) {
        const newArr = [];
        // SL - why is this declared outside the forEach? A more logical place for this would be in the forEach
        // its not really needed at all, but even if we had a reason to use it, we almost certainly wouldnt want the cope to be larger then the forEach
        let newIndex;
        theArray.forEach(function (elem) {
            // SL - not at all a problem, but why not just one line
            // newArr.push(callback(elem))?
            newIndex = callback(elem);
            newArr.push(newIndex);
        });
        return newArr;
    }

    const arr = [2, 4, 6];
    const arr2 = ['a', 'b', 'c'];

    console.log('map',arr, myMap(arr,(x => x * 2)));
    console.log('map',arr2, myMap(arr2, (x => x.toUpperCase())));

}());