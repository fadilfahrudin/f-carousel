function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("slide selected");

    $(prev).removeClass().addClass("slide prev");
    $(next).removeClass().addClass("slide next");

    $(nextSecond).removeClass().addClass("slide nextRightSecond");
    $(prevSecond).removeClass().addClass("slide prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('slide hideRight');
    $(prevSecond).prevAll().removeClass().addClass('slide hideLeft');

}

// Keyboard navigation
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left keyboard
            moveToSelected('prev');
            break;

        case 39: // right keyboard
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});





const initSlide = () => {
    $(".slide").eq(3).addClass("prevLeftSecond")
    $(".slide").eq(4).addClass("prev")
    $(".slide").eq(5).addClass("selected")
    $(".slide").eq(6).addClass("next")
    $(".slide").eq(7).addClass("nextRightSecond")

}

const slide = $(".slide")

$(document).ready(function () {
    $('#carousel').append($(slide).eq(0).clone().addClass("hideRight"));
    $('#carousel').append($(slide).eq(1).clone().addClass("hideRight"));
    $('#carousel').append($(slide).eq(2).clone().addClass("hideRight"));
    $('#carousel').prepend($(slide).eq(slide.length - 1).clone().addClass("hideLeft"));
    $('#carousel').prepend($(slide).eq(slide.length - 2).clone().addClass("hideLeft"));
    $('#carousel').prepend($(slide).eq(slide.length - 3).clone().addClass("hideLeft"));
    initSlide()

    $('.slide').each((i, el) => {
        if (!$(el).hasClass("nextRightSecond") && !$(el).hasClass("prevLeftSecond") &&  !$(el).hasClass("prev") &&  !$(el).hasClass("next") &&  !$(el).hasClass("hideLeft") &&  !$(el).hasClass("hideRight") &&  !$(el).hasClass("selected")) {
            $(el).addClass("hideRight")
        }
    })



    $('#carousel .slide').click(function () {
        moveToSelected($(this));

    });

    $('#prev').click(function () {
        moveToSelected('prev');
        if ($('.slide').eq(0).hasClass('prevLeftSecond')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq($(".slide").length - 4));
            }, 500)
        }
        $('.slide').css('transition', 'transform 1s, left 1s, opacity 1s, z-index 0s')
        $('.slide img').css('transition', 'width 1s')
    });

    $('#next').click(function () {
        moveToSelected('next');
        if ($('.slide').eq($(".slide").length - 1).hasClass('nextRightSecond')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq(3));
            }, 500)
        }
        $('.slide').css('transition', 'transform 1s, left 1s, opacity 1s, z-index 0s')
        $('.slide img').css('transition', 'width 1s')
    });
})