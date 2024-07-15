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

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

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


$('#carousel div').click(function () {
    moveToSelected($(this));
});

$('#prev').click(function () {
    moveToSelected('prev');
});

$('#next').click(function () {
    moveToSelected('next');
});


const initSlide = () => {
    $('.slide').not(".hideLeft, .hideRight, .prev, .next, .prevLeftSecond, .nextRightSecond, .selected").addClass("hideRight")

    $(".slide").eq(0).addClass("hideLeft")
    $(".slide").eq(1).addClass("prevLeftSecond")
    $(".slide").eq(2).addClass("prev")
    $(".slide").eq(3).addClass("selected")
    $(".slide").eq(4).addClass("next")
    $(".slide").eq(5).addClass("nextRightSecond")
    $(".slide").eq(6).addClass("hideRight")

}

$(document).ready(function () {
    $(".slide").each(function (i, element) {
        $('#carousel').append($(element).clone());
    })
    initSlide()
})