(function () {
    'use strict';

    function myMap(theArray, callback) {
        const newArr = [];
        let newIndex;
        theArray.forEach(function (elem) {
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