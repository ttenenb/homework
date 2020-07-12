'use strict';

function myEvery(array, callback) {
    let ans;
    array.forEach(elem => {
        if (ans === false) {
            return;
        }
        if (callback(elem)) {
            ans = true;
        } else {
            ans = false;
        }

    });

    return ans;
}

const arr = ['a', 'b', 'c'];

const isUpp = arr.every(letter => letter === letter.toUpperCase());
console.log('every- ', isUpp);

const isUpp2 = myEvery(arr, letter => letter === letter.toUpperCase());
console.log('myEvery- ', isUpp2);

const isLower = arr.every(letter => letter === letter.toLowerCase());
console.log('every- ', isLower);

const isLower2 = myEvery(arr, letter => letter === letter.toLowerCase());
console.log('myEvery- ', isLower2);

///////////////////////////////////////////////////////////////////////////

function mySome(array, callback) {
    let ans;
    array.forEach(elem => {
        if (ans === true) {
            return;
        }
        if (callback(elem)) {
            ans = true;
        } else {
            ans = false;
        }

    });

    return ans;
}

const arr2 = ['a', 'b', 'c'];

const AreSomeUpp = arr2.some(letter => letter === letter.toUpperCase());
console.log('some- ', AreSomeUpp);

const AreSomeUpp2 = mySome(arr2, letter => letter === letter.toUpperCase());
console.log('mySome- ', AreSomeUpp2);

const areSomeLower = arr2.some(letter => letter === letter.toLowerCase());
console.log('some- ', areSomeLower);

const areSomeLower2 = mySome(arr2, letter => letter === letter.toLowerCase());
console.log('mySome- ', areSomeLower2);

//////////////////////////////////////////////////////

function onlyIf(array, test, action) {
    let newArray = [];
    array.forEach(elem => {

        if (!test(elem)) {
            newArray.push(elem);
        } else {
            newArray.push(action(elem));
        }
    });

    return newArray;

}

const arr3 = ['a', 'B', 'C'];

const AreSomeUpp3 = (letter => letter === letter.toUpperCase());

const turnIntoLowercase = (letter => letter = letter.toLowerCase());
const UseOnlyIf = onlyIf(arr3, AreSomeUpp3, turnIntoLowercase);

console.log(UseOnlyIf);

///////////////////////////////////////////

// Not sure why it's giving me an error that letter.toLowerCase on line 88 is not a function for use on line 99
let onlyIf2 = ((arr, callback) => {
    let newLetters = [];
    newLetters.push(arr.filter(AreSomeUpp3));
    newLetters.forEach(elem => callback(elem));
});

const useonlyIf2 = onlyIf2(arr3, turnIntoLowercase);

console.log(useonlyIf2);