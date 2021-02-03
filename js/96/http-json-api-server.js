'use strict';
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const parsedUrl = url.parse(req.url, true);
        const time = new Date(parsedUrl.query.iso)
        if (parsedUrl.pathname === '/api/parsetime') {
            res.end(JSON.stringify({
                hour: time.getHours(),
            minute: time.getMinutes(),
                second: time.getSeconds()
            }))
        }
        if (parsedUrl.pathname === '/api/unixtime') {
            res.end(JSON.stringify({ unixtime: time.getTime() }))
        }
        res.end();
    }
}).listen(process.argv[2]);