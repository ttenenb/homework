(function () {
    'use strict';

    class Vehicle{
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now going at ${this.speed} mph`)
        }

        print() {
            console.log(`Color: ${this.color}, Speed: ${this.speed}`);
        }
    }

    class Plane extends Vehicle{
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now FLYING at ${this.speed} mph`);
        }
    }


    const v = new Vehicle('white');
    v.go(67);
    v.print();

    const p = new Plane('black');
    p.go(500);
    p.print();
}());