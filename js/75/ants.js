(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let anumber = 0;

  class Ant {

    static SIZE = 2; // jshint ignore:line

    constructor(context, color) {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;

      this.context = context;
      this.color = color;
      this.number = anumber++;
      this.power = 0;
    }

    draw() {
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.fillRect(this.x, this.y, Ant.SIZE, Ant.SIZE);
    }

    move() {

      const savedXDirection = Ant.directionNumber(-1, 1);
      const savedYDirection = Ant.directionNumber(-1, 1);

      for (let index = 0; index < Ant.amountOfTimesToMove(); index++) {
        this.x += savedXDirection;
        this.y += savedYDirection;

        if (this.x < Ant.SIZE) {
          this.x = Ant.SIZE;
        } else if (this.x > canvas.width - Ant.SIZE) {
          this.x = canvas.width - Ant.SIZE;
        }

        if (this.y < Ant.SIZE) {
          this.y = Ant.SIZE;
        } else if (this.y > canvas.height - Ant.SIZE) {
          this.y = canvas.height - Ant.SIZE;
        }

        this.draw();
      }
    }

    static directionNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static amountOfTimesToMove() {
      return Math.ceil(Math.random() * 5);
    }
  }

  class Food {

    static SIZE = 10;// jshint ignore:line

    constructor(context) {
      this.context = context;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.color = 'brown';
    }
    draw() {
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.fillRect(this.x, this.y, Food.SIZE, Food.SIZE);
    }
  }

  const context = canvas.getContext('2d');
  const ants = [];
  const foods = [];
  const foodAmount = 100;

  for (let i = 0; i < foodAmount; i++) {
    foods.push(new Food(context));
  }
  let highScore = 0;
  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ants.forEach(ant => ant.move());
    foods.forEach(food => food.draw());
    ants.forEach(a => {
      for (let index = 0; index < foods.length; index++) {
        if (isWithinRange(a.x, foods[index].x) && isWithinRange(a.y, foods[index].y)) {
          foods.splice(index, 1);
          a.power++;
          console.log(a.number, a.power);
        }
      }

      if (highScore < a.power) {
        highScore = a.power;
      }

      if (!foods[0]) {
        if (a.power === highScore) {
          window.location.reload();
          alert(`The ant with the most foods is ${a.number} and he collected ${highScore} foods`);
        }
      }
    });
  }, 17);

  const color = document.getElementById('color');
  const number = document.getElementById('number');
  const add = document.getElementById('add');
  add.addEventListener('click', e => {
    e.preventDefault();
    for (let i = 0; i < number.value; i++) {
      ants.push(new Ant(context, color.value));
    }
  });

  function isWithinRange(antXOrY, FoodXOrY) {
    if (antXOrY <= FoodXOrY + Food.SIZE && antXOrY >= FoodXOrY - Food.SIZE) {
      return true;
    }
  }

}());