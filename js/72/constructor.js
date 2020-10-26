(function () {
    'use strict';

    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }

    Vehicle.prototype.color = function (color) {
        this.color = color;
    };
 
    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`${this.make} ${this.model} is now going at ${speed} mph`);
    };


    Vehicle.prototype.print = function () {
        console.log(this.make, this.model, this.color, this.speed);
    };

    function Plane(make, model) {
        this.make = make;
        this.model = model;
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`${this.make} ${this.model} is now FLYING at ${speed} mph`);
    };

    const sienna = new Vehicle('Totyota', 'Sienna');
    sienna.color('Gold');

    const malibu = new Vehicle('Chevy', 'Malibu');
    malibu.color('White');
    
    const a220 = new Plane('Airbus', 'A220');
    a220.color('Yellow');

    sienna.go(47);
    malibu.go(34);
    a220.go(575);
    sienna.print();
    malibu.print();
    a220.print();
}());