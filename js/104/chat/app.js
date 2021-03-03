const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketIo = require("socket.io")(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const chatters = [];
const chatterServers = new Map();
socketIo.on("connection", socket => {
  console.log('server got a connection');

  let name;
  socket.on('login', (loginName, callback) => {
    const n = loginName.trim();
    if (!n) {
      callback(`Username is required.`);
    }
    //socket.broadcast.to(socketid).emit('message', 'for your eyes only');

    if (chatters.find(c => c === n)) {
      callback(`Username ${n} already used. Please choose another.`);
    } else {
      name = n;
      chatters.push(name);
      chatterServers.set(name, socket)
      callback();

      socketIo.emit('chatters', chatters);

      socket.on('typing', t => {
        socketIo.emit('typing', { author: name, typing: t})
      });

      socket.on('message', msg => {
        const m = msg.trim();
        if (m.charAt(0) === '@') {
          let requestedchatter;
          chatterServers.forEach((socket, name) => {
            if (m.split(' ')[1] === name) {
              socketIo.to(socket.id).emit('message', { author: name, msg: m });
            }
          });
        } else {
          if (m) {
            socketIo.emit('message', { author: name, msg: msg });
          }
        }
      });
    }
  });
});

app.use('/', (req, res, next) => {
  res.send('Hello World!');
});

server.listen(80);