'use strict';
const net = require('net');

net.createServer(socket => {
    const date = new Date();
    socket.write(`${date.getFullYear()}-${date.getMonth() < 10?'0'+ (date.getMonth()+1):date.getMonth() + 1}-${date.getDate()<10?'0'+date.getDate():date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
    socket.end('\n');// + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes());
}).listen(process.argv[2]);