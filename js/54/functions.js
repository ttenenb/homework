'use strict';

//Number 1

function multiply(a, b) {
    return a * b;
}

console.log(`multiply(2, 2)${multiply(2, 2)}`);

console.log(`multiply(5, 4)${multiply(5, 4)}`);

console.log(`multiply(9, 8)${multiply(9, 8)}`);

//////////////////////////////
//Number 2

function getMultiplier() {
    return function (x, y) {
        return x * y;
    };
}

const getTheMultiplier = getMultiplier();

console.log(`getTheMultiplier(2, 2)${getTheMultiplier(2, 2)}`);

const getTheMultiplier2 = getMultiplier();

console.log(`getTheMultiplier(5, 4)${getTheMultiplier2(5, 4)}`);

const getTheMultiplier3 = getMultiplier();

console.log(`getTheMultiplier(9, 8)${getTheMultiplier3(9, 8)}`);

//////////////////////////
//Number 3

function outerMultiplier(m) {
    return function (n) {
        return m * n;
    };
}

const multiplyByFive = outerMultiplier(5);

console.log(`multiplyByFive(2)${multiplyByFive(2)}`);

const multiplyBySix = outerMultiplier(6);

console.log(`multiplyBySix(2)${multiplyBySix(2)}`);

const multiplyBySeven = outerMultiplier(7);

console.log(`multiplyBySeven(2)${multiplyBySeven(2)}`);