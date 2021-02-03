'use strict';
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        const map = require('through2-map')
        // fs.createReadStream(process.argv[3])
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    }
}).listen(process.argv[2]);