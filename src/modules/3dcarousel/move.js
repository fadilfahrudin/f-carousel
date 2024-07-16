function moveToSelected(element) {
    let selected
    if (element == "next") {
        selected = $(".selected").next();
    } else if (element == "prev") {
        selected = $(".selected").prev();
    } else {
        selected = element;
    }

    let next = $(selected).next();
    let prev = $(selected).prev();
    let prevSecond = $(prev).prev();
    let nextSecond = $(next).next();

    $(selected).removeClass().addClass("slide selected");

    $(prev).removeClass().addClass("slide prev");
    $(next).removeClass().addClass("slide next");

    $(nextSecond).removeClass().addClass("slide nextRightSecond");
    $(prevSecond).removeClass().addClass("slide prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('slide hideRight');
    $(prevSecond).prevAll().removeClass().addClass('slide hideLeft');

}

let isTransitioning = false;
const actionObject = {
    next: () => {
        if (isTransitioning) return;
        isTransitioning = true;
        moveToSelected('next');
        if ($('.slide').eq($(".slide").length - 1).hasClass('nextRightSecond')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq(3));
                isTransitioning = false
            }, 500)
        } else {
            $('.slide').css('transition', 'transform 1s, left 1s, opacity 1s, z-index 0s')
            $('.slide img').css('transition', 'width 1s')

            setTimeout(() => {
                isTransitioning = false
            }, 300)
        }
    },
    prev: () => {
        if (isTransitioning) return;
        isTransitioning = true;
        moveToSelected('prev');
        if ($('.slide').eq(0).hasClass('prevLeftSecond')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq($(".slide").length - 4));
                isTransitioning = false
            }, 500)
        } else {
            $('.slide').css('transition', 'transform 1s, left 1s, opacity 1s, z-index 0s')
            $('.slide img').css('transition', 'width 1s')
            setTimeout(() => {
                isTransitioning = false
            }, 300)
        }
    },
    objectClick: (element) => {
        if (isTransitioning) return;
        isTransitioning = true;
        moveToSelected($(element).parent());
        if ($('.slide').eq($('.slide').length - 1).hasClass('selected')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq(5));
                isTransitioning = false;
            }, 500)
        } else if ($('.slide').eq($('.slide').length - 1).hasClass('next')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq(4));
                isTransitioning = false;
            }, 500)
        } else if ($('.slide').eq($('.slide').length - 1).hasClass('nextRightSecond')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq(3));
                isTransitioning = false;
            }, 500)
        } else if ($('.slide').eq(0).hasClass('prev')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq($('.slide').length - 5));
                isTransitioning = false;
            }, 500)
        } else if ($('.slide').eq(0).hasClass('prevLeftSecond')) {
            setTimeout(() => {
                $('.slide').css('transition', 'none')
                $('.slide img').css('transition', 'none')
                moveToSelected($('.slide').eq($('.slide').length - 4));
                isTransitioning = false;
            }, 500)
        } else {
            $('.slide').css('transition', 'transform 1s, left 1s, opacity 1s, z-index 0s')
            $('.slide img').css('transition', 'width 1s')
            setTimeout(() => {
                isTransitioning = false;
            }, 300)
        }
    }
}

const action = Object.freeze(actionObject)
export default action