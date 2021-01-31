'use strict';
const http = require('http');
const allUrls = [];
let count = 0;

// for (let index = 2; index < process.argv.length; index++) {
//     http.get(process.argv[index], res => {
//             res.setEncoding('utf8');
//             let str = '';
//             res.on('data', data => str += data);
//         res.on('end', () => {
//             allUrls[index - 2] = str;
//                count++;         
       
//             if (count === 3) {
//                 for (let index = 0; index < 3; index++) {
//                     console.log(allUrls[index]);
//                 }
//             }
//         });
//     })
// }

const bl = require('bl');

for (let index = 2; index < process.argv.length; index++) {
    http.get(process.argv[index], res => {
        res.pipe(bl((err, data) => {
            if (err) {
                return console.error(err);
            }
            allUrls[index - 2] = data.toString();
            count++;
       
            if (count === 3) {
                for (let index = 0; index < 3; index++) {
                    console.log(allUrls[index]);
                }
            }
        }))
    })
}
