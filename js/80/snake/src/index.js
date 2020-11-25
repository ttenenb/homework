// (function () {
//   'use strict';

import './css/style.css';
import music from './audio/Pim Poy Pocket.wav';
import crunch from './audio/Biting Apple-SoundBible.com-415478302.mp3';
import crash from './audio/crash-sound.mp3';
import snakehead from './images/snakehead.png';
import appleImage from './images/redapple.png';

const canvas = document.getElementById('theCanvas');
const context = canvas.getContext('2d');

const sound = new Audio();
sound.src = music;//'./audio/audio/Pim Poy Pocket.wav';
sound.setAttribute('loop', 'loop');

const appleCrunch = new Audio();
appleCrunch.src =crunch;// './audio/Biting Apple-SoundBible.com-415478302.mp3';
appleCrunch.preload = 'auto';

const crashSound = new Audio();
crashSound.src = crash;//'./audio/crash-sound.mp3';
crashSound.preload = 'auto';

const tileSize = 64;//for enforcing canvas to be proportionate to snake size

function resizeCanvas() {
  canvas.width = window.innerWidth - (window.innerWidth % tileSize);
  canvas.height = window.innerHeight - (window.innerHeight % tileSize);

}
//setting the border style
context.lineWidth = 2;
context.strokeStyle = "black";

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// document.getElementById('start').addEventListener('click', () => document.location.reload());
let gameOver = false;
let pause = false;
let score = 0;
if (!localStorage.highscore) {
  localStorage.highscore = 0;
}
let speed = 500;
let inTimeout = false;


class Snake {

  constructor() {
    this.img = new Image();
    this.img.src = snakehead;
    // this.img2 = new Image();
    // this.img2.src = 'images/snakebody.png';

    this.segments = [{ x: 0, y: 0 }];

    document.addEventListener('keydown', e => {
      if (!inTimeout) {
        switch (e.key) {
          case 'ArrowUp':
            if (this.segments.length === 1 || this.direction !== 'ArrowDown') {
              this.direction = e.key;
            }
            inTimeout = true;
            break;
          case 'ArrowDown':
            if (this.segments.length === 1 || this.direction !== 'ArrowUp') {
              this.direction = e.key;
            }
            inTimeout = true;
            break;
          case 'ArrowLeft':
            if (this.segments.length === 1 || this.direction !== 'ArrowRight') {
              this.direction = e.key;
            }
            inTimeout = true;
            break;
          case 'ArrowRight':
            if (this.segments.length === 1 || this.direction !== 'ArrowLeft') {
              this.direction = e.key;
            }
            inTimeout = true;
            break;
          case ' ':
            pause = !pause;
            break;
        }
      }
    });
  }

  draw() {
    context.strokeRect(0, 0, canvas.width, canvas.height);//to create border when the page is not proportionate 
    context.drawImage(this.img, this.segments[0].x, this.segments[0].y, tileSize, tileSize);
    context.fillStyle = 'green';
    for (let index = 1; index < this.segments.length; index++) {
      context.fillRect(this.segments[index].x, this.segments[index].y, tileSize, tileSize);
      // context.drawImage(this.img2, this.segments[index].x, this.segments[index].y, tileSize, tileSize);
    }
  }

  move() {
    if (!pause) {
      sound.play();
      let x = this.segments[0].x;
      let y = this.segments[0].y;
      let tail = this.segments.pop();
      switch (this.direction) {
        case 'ArrowLeft':
          x -= tileSize;
          break;
        case 'ArrowRight':
          x += tileSize;
          break;
        case 'ArrowUp':
          y -= tileSize;
          break;
        case 'ArrowDown':
          y += tileSize;
          break;
      }

      //checking if snake bumps into itself or if it bumps into a wall
      if (this.segments.some(e => e.x === x && e.y === y) || x < 0 || x > canvas.width - tileSize || y < 0 || y > canvas.height - tileSize) {
        gameOver = true;
        crashSound.play();
        clearTimeout(handle);
        handle = 0;
        speed = 500;
        this.segments.push(tail);
        sound.pause();
      } else {
        this.segments.unshift({ x: x, y: y });
      }

      //check to see if it eats the apple
      if (this.segments[0].x === apple.x && this.segments[0].y === apple.y) {
        appleCrunch.currentTime = 0;
        appleCrunch.play();
        this.segments.push(tail);
        apple.findSpot();
        speed *= 0.9;
        score++;
        if (score > localStorage.highscore ) {
          localStorage.highscore = score;
        }
      }

    } else {
      sound.pause();
    }
    this.draw();
  }
}


class Apple {

  constructor() {
    this.img = new Image();
    this.img.src = appleImage;
    this.findSpot();
  }
  findSpot() {
    do {
      let numberOfWidthTiles = canvas.width / tileSize;
      let numberOfHeightTiles = canvas.height / tileSize;
      this.x = Math.floor(Math.random() * numberOfWidthTiles) * tileSize;
      this.y = Math.floor(Math.random() * numberOfHeightTiles) * tileSize;
    } while (snake.segments.some(s => s.x === this.x && s.y === this.y));
  }
  draw() {
    context.beginPath();
    context.drawImage(this.img, this.x, this.y, tileSize, tileSize);
  }

}

const snake = new Snake();
let apple = new Apple();

let handle = setTimeout(game, speed);


function game() {
  handle = setTimeout(game, speed);
  if (!gameOver) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    snake.move();
    apple.draw();
    inTimeout = false;
  }
  document.getElementById('scoreSpan').innerText = score;
  document.getElementById('highscore').innerText = localStorage.highscore;

}

document.getElementById('start').addEventListener('click', () => {
  if (gameOver) {
    snake.segments = [{ x: 0, y: 0 }];
    score = 0;
    snake.direction = ' ';
    gameOver = !gameOver;
    apple.findSpot();
    setTimeout(game, speed);
  }

});
//}());