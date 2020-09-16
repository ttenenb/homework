(function () {
    'use strict';
    let i = 0;
    fetch('videos.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(r.status, r.statusText);
            }
            return r.json();
        })
        .then(vid => {
            vid.forEach(v => {
                fetch(`${v}.json`)
                    .then(r => r.json())
                    .then(v => {

                        $(`<h1>${v.title}</h1>`).appendTo('body');
                        $(`<video id=video${v.title} src=${v.video} poster=${v.picture}></video>`)
                            .click(function () {
                                $(`#video${v.title}`)[0].play();
                            })
                            .appendTo('body');
                        i++;

                    })
                    .catch(e => console.log(e));
            });
        })
        .catch(e => console.error(e));


}());