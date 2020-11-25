import './css/style.css';
import $ from 'jquery';
import snakehead from './images/snakehead.png';
import apple from './images/redapple.png';

// (function () {
//     'use strict';

$(document.body).append(`
    <ul>
        <li>
            One
        </li>
        <li>
            Two
        </li> 
        <li>
            Three
        </li>
    </ul>
    `);

const i = new Image();
i.src = snakehead;
const j = new Image();
j.src = apple;
$(document.body).append(i, j
);

// }());
// f