(function () {
    'use strict';

    let part;
    let offset;
    const originalPeices = $('.part');
    let originalPlacement = [];
    let movements = [];
    let zindex = 1;
    const soundEffects = document.getElementById('sound');
    const originalSound = document.getElementById('orig');

    $(document).on('mousedown', '.float', e => {
        part = $(e.target);
        offset = { y: e.offsetY, x: e.offsetX };
        part.css("z-index", zindex);
        zindex++;
    });

    $(document).mousemove(e => {
        e.preventDefault();
        if (part) {
            part.css(getPlacement(e));
            originalSound.pause();
            soundEffects.play();
            soundEffects.playbackRate = 2;
        }

    });

    $(document).mouseup(e => {
        if (part) {
            movements.push({ part: part[0].id, placement: getPlacement(e), zindex: part.css("z-index") });
            localStorage.movements = JSON.stringify(movements);
            part = null;
            soundEffects.pause();
            originalSound.play();
        }
    });

    function getPlacement(e) {
        return { top: e.pageY - offset.y, left: e.pageX - offset.x };
    }

    if (localStorage.movements) {
        movements = JSON.parse(localStorage.movements);

        movements.forEach(e => {
            const images = $('#' + e.part);
            images.css({ top: e.placement.top, left: e.placement.left, zIndex: e.zindex });
            zindex++;
        });
    } else {
        for (let index = 0; index < originalPeices.length; index++) {

            const indivdualPlace = { partIndex: index, top: originalPeices[index].offsetTop, left: originalPeices[index].offsetLeft };
            originalPlacement.push(indivdualPlace);
            localStorage.originalPlacement = JSON.stringify(originalPlacement);
        }
    }

    $('button').click(() => {
        localStorage.removeItem('movements');
        const applyingPlacement = JSON.parse(localStorage.originalPlacement);
        applyingPlacement.forEach(e => {
            const individualPlacement = $(originalPeices[e.partIndex]);
            individualPlacement.css({ top: e.top, left: e.left });
        });
    });

    //  $('img').resizable();
    // $('.part').draggable();

}());