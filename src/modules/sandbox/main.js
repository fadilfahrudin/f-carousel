import action from "./action.js";
let windowWidth = $(window).outerWidth();

const positionInit = () => {
    $('.carousel-wrapper').css({
        'transform': `translate3d(-${windowWidth}px, 0, 0)`,
    })

    $(".carousel-slide").css({
        'transform': 'translate3d(0px, 0px, -50px)',
        'z-index': -100
    })

    $(".carousel-slide").eq(2).css({
        'transform': 'translate3d(0px, 0px, -50px)',
        'z-index': 0
    })

    $(".carousel-slide").eq(3).css({
        'transform': 'translate3d(0px, 0px, 130px)',
        'z-index': 1
    })

    $(".carousel-slide").eq(4).css({
        'transform': 'translate3d(0px, 0px, 250px)',
        'z-index': 2
    })

    $(".carousel-slide").eq(5).css({
        'transform': 'translate3d(0px, 0px, 130px)',
        'z-index': 1
    })

    $(".carousel-slide").eq(6).css({
        'transform': 'translate3d(0px, 0px, -50px)',
        'z-index': 0
    })
    $(".carousel-slide").eq(7).css({
        'transform': 'translate3d(0px, 0px, -150px)',
        'z-index': -1
    })
}

document.addEventListener('DOMContentLoaded', () => {
    if ($(".container--3d").length > 0) {
        $('.carousel-wrapper').append($(".carousel-slide")[0].cloneNode(true));
        $('.carousel-wrapper').append($(".carousel-slide")[1].cloneNode(true));
        $('.carousel-wrapper').prepend($(".carousel-slide")[($(".carousel-slide").length - 3)].cloneNode(true));
        $('.carousel-wrapper').prepend($(".carousel-slide")[($(".carousel-slide").length - 4)].cloneNode(true));
        positionInit()
    }


    $("#next").on('click', () => {
        action.nextSlide();
    });

    // setInterval(() => {
    //     action.nextSlide();
    // }, 5000)
});