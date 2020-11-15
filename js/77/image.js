(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');

  const appleCrunch = new Audio();
  appleCrunch.src = 'audio/Biting Apple-SoundBible.com-415478302.mp3';
  appleCrunch.preload = 'auto';

  const crashSound = new Audio();
  crashSound.src = 'audio/crash-sound.mp3';
  crashSound.preload = 'auto';

  const tileSize = 64;//for enforcing canvas to be proportionate to snake size
  function resizeCanvas() {
    canvas.width = window.innerWidth - (window.innerWidth % tileSize);
    canvas.height = window.innerHeight - (window.innerHeight % tileSize);

  }

  context.lineWidth = 2;
  context.strokeStyle = "black";

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Snake {
    static SNAKE_SIZE = 64; //jshint ignore:line

    constructor() {
      this.img = new Image();
      this.img.src = 'images/snakehead.png';

      this.x = 0;
      this.y = 0;
      this.score = localStorage.score || 0;
      this.direction = 'ArrowRight';
    }

    draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(this.img, this.x, this.y, Snake.SNAKE_SIZE, Snake.SNAKE_SIZE);
      context.strokeRect(0, 0, canvas.width, canvas.height);//to create border when the page is not proportionate 
    }

    stop() {

      if (this.x < 0) {
        this.x = 0;
      } else if (this.x + Snake.SNAKE_SIZE > canvas.width) {
        this.x = canvas.width - Snake.SNAKE_SIZE;
      }
      if (this.y < 0) {
        this.y = 0;
      } else if (this.y + Snake.SNAKE_SIZE > canvas.height) {
        this.y = canvas.height - Snake.SNAKE_SIZE;
      }
      this.draw();
    }

    move() {

      switch (this.direction) {
        case 'ArrowLeft':
          this.x -= Snake.SNAKE_SIZE;
          break;
        case 'ArrowRight':
          this.x += Snake.SNAKE_SIZE;
          break;
        case 'ArrowUp':
          this.y -= Snake.SNAKE_SIZE;
          break;
        case 'ArrowDown':
          this.y += Snake.SNAKE_SIZE;
          break;
      }
      this.draw();
    }

  }

  class SnakePart {
    static SNAKE_SIZE = 64; //jshint ignore:line

    constructor() {
      this.img = new Image();
      this.img.src = 'images/snakehead.png';

      this.x = 0;
      this.y = 0;
      this.direction = snakehead.direction;
      this.color = 'green';
    }

    move() {
      context.beginPath();
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, Apple.APPLE_SIZE, Apple.APPLE_SIZE);
    }

    stop() {
      this.move();
    }



  }

  class Apple {

    static APPLE_SIZE = 64; //jshint ignore:line

    constructor() {
      let numberOfWidthTiles = canvas.width / Apple.APPLE_SIZE;
      let numberOfHeightTiles = canvas.height / Apple.APPLE_SIZE;
      this.x = Math.floor(Math.random() * numberOfWidthTiles) * Apple.APPLE_SIZE;
      this.y = Math.floor(Math.random() * numberOfHeightTiles) * Apple.APPLE_SIZE;
      this.color = 'brown';
    }

    draw() {
      context.beginPath();
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, Apple.APPLE_SIZE, Apple.APPLE_SIZE);
    }

  }

  const snakehead = new Snake();
  let apple = new Apple();

  const coordinates = [];
  const body = [];
  body.push(snakehead);

  snakehead.img.addEventListener('load', () => {

    let handle = setInterval(game, 500);

    document.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          body.forEach(s => s.direction = e.key);
      }
    });

    function game() {
      coordinates.unshift({ x: snakehead.x, y: snakehead.y });
      for (let index = 0; index < body.length - 1; index++) {
        body[index + 1].x = coordinates[index].x;
        body[index + 1].y = coordinates[index].y;
      }
      body.forEach(s => s.move());

      context.font = 'bold 48px serif';
      if (snakehead.x < 0 || snakehead.x > canvas.width - Snake.SNAKE_SIZE || snakehead.y < 0 || snakehead.y > canvas.height - Snake.SNAKE_SIZE) {

        stopGame();

      }

      if (snakehead.x === apple.x && snakehead.y === apple.y) {

        body.push(new SnakePart());
        console.log(body);
        appleCrunch.play();
        snakehead.score++;
        apple = new Apple();
        apple.draw();

      }
      for (let index = 1; index < body.length; index++) {
        if (snakehead.x === body[index].x && snakehead.y === body[index].y) {
          stopGame();
        }

  }

      apple.draw();
      context.fillText(snakehead.score, canvas.width - 120, 50);

    }

    function stopGame() {
      crashSound.play();
      body.forEach(s => s.stop());
      snakehead.score--;
      clearInterval(handle);
      localStorage.score = snakehead.score;

    }
  });

}());