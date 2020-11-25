
// const canvas = document.getElementById('theCanvas');
// const context = canvas.getContext('2d');
// const tileSize = 64;//for enforcing canvas to be proportionate to snake size
// const crashSound = new Audio();
//   crashSound.src = 'audio/crash-sound.mp3';
//   crashSound.preload = 'auto';
// let inTimeout = false;
// let pause = false;

// const music = new Audio();
// music.src = 'audio/Pim Poy Pocket.wav';
// music.setAttribute('loop', 'loop');
// const appleCrunch = new Audio();
//   appleCrunch.src = 'audio/Biting Apple-SoundBible.com-415478302.mp3';
//   appleCrunch.preload = 'auto';
// let gameOver = false;
// let speed = 500;
// let score = 0;
// let apple, handle;

// class Snake {

//     constructor() {
//         this.img = new Image();
//         this.img.src = 'images/snakehead.png';
//         this.img2 = new Image();
//         this.img2.src = 'images/snakebody.png';

//         this.segments = [{ x: 0, y: 0 }];

//         document.addEventListener('keydown', e => {
//             if (!inTimeout) {
//                 switch (e.key) {
//                     case 'ArrowUp':
//                         if (this.segments.length === 1 || this.direction !== 'ArrowDown') {
//                             this.direction = e.key;
//                         }
//                         inTimeout = true;
//                         break;
//                     case 'ArrowDown':
//                         if (this.segments.length === 1 || this.direction !== 'ArrowUp') {
//                             this.direction = e.key;
//                         }
//                         inTimeout = true;
//                         break;
//                     case 'ArrowLeft':
//                         if (this.segments.length === 1 || this.direction !== 'ArrowRight') {
//                             this.direction = e.key;
//                         }
//                         inTimeout = true;
//                         break;
//                     case 'ArrowRight':
//                         if (this.segments.length === 1 || this.direction !== 'ArrowLeft') {
//                             this.direction = e.key;
//                         }
//                         inTimeout = true;
//                         break;
//                     case ' ':
//                         pause = !pause;
//                         break;
//                 }
//             }
//         });
//     }

//     draw() {
//         context.strokeRect(0, 0, canvas.width, canvas.height);//to create border when the page is not proportionate 
//         context.drawImage(this.img, this.segments[0].x, this.segments[0].y, tileSize, tileSize);
//         context.fillStyle = 'green';
//         for (let index = 1; index < this.segments.length; index++) {
//             context.fillRect(this.segments[index].x, this.segments[index].y, tileSize, tileSize)
//             // context.drawImage(this.img2, this.segments[index].x, this.segments[index].y, tileSize, tileSize);
//         }
//     }

//     move() {
//         if (!pause) {
//             music.play();
//             let x = this.segments[0].x;
//             let y = this.segments[0].y;
//             let tail = this.segments.pop();
//             switch (this.direction) {
//                 case 'ArrowLeft':
//                     x -= tileSize;
//                     break;
//                 case 'ArrowRight':
//                     x += tileSize;
//                     break;
//                 case 'ArrowUp':
//                     y -= tileSize;
//                     break;
//                 case 'ArrowDown':
//                     y += tileSize;
//                     break;
//             }

//             //checking if snake bumps into itself or if it bumps into a wall
//             if (this.segments.some(e => e.x === x && e.y === y) || x < 0 || x > canvas.width - tileSize || y < 0 || y > canvas.height - tileSize) {
//                 gameOver = true;
//                 crashSound.play();
//                 clearTimeout(handle);
//                 handle = 0;
//                 speed = 500;
//                 this.segments.push(tail);
//                 music.pause();
//             } else {
//                 this.segments.unshift({ x: x, y: y });
//             }

//             //check to see if it eats the apple
//             if (this.segments[0].x === apple.x && this.segments[0].y === apple.y) {
//                 appleCrunch.currentTime = 0;
//                 appleCrunch.play();
//                 this.segments.push(tail);
//                 apple.findSpot();
//                 speed *= 0.9;
//                 score++;
//                 if (score > localStorage.highscore) {
//                     localStorage.highscore = score;
//                 }
//             }

//         } else {
//             music.pause();
//         }
//         this.draw();
//     }
// }