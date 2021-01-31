'use strict';
const http = require('http');

http.get(process.argv[2], res => {
    res.setEncoding('utf8')
    res.on('data', data => console.log(data));
    res.on('error', err => console.error(err));
})