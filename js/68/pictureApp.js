(function () {
    'use strict';
    const initialCarouselItem = '0';
    $('button').click(() => {
        let userChoice = $('input').val();

        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${userChoice}&format=json&jsoncallback=?`)
            .then(p => {
                console.log(p);
                $('input').val('');
                $('.active').empty();
                $(`<div class="carousel-item active data-interval="false""><img src=${p.items[initialCarouselItem].media.m} height=800px alt=${p.items[initialCarouselItem].title} class="d-block w-100">
                </img><div class="carousel-caption d-none d-md-block"><h3>${p.items[0].title}</h3></div></div>`).appendTo($('.carousel-inner'));
                for (let index = 1; index < p.items.length; index++) {
                    $(`<div class="carousel-item data-interval="false""><img src=${p.items[index].media.m} height=800px alt=${p.items[index].title} class="d-block w-100">
                     </img><div class="carousel-caption d-none d-md-block"><h3>${p.items[index].title}</h3></div></div>`).appendTo($('.carousel-inner'));                                   
                }
                $('<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>').appendTo($('.carousel-inner'));
            })
            .catch(e => console.error(e));
    });
}());