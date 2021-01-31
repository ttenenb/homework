'use strict';

const http = require('http'); 

let str = '';

http.get(process.argv[2], res => {
    res.setEncoding('utf8');
    res.on('data', data => {
        str += data;
    })
    res.on('end', () => {
        console.log(str.length);
        console.log(str);
    })
   
})

// const bl = require('bl');

// http.get(process.argv[2], res => {
//     res.pipe(bl((err,data) => {
//         if (err) {
//             return console.error(err);
//         }
//         data = data.toString();
//         console.log(data.length);
//         console.log(data);
//     }))
// });