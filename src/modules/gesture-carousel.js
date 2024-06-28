import action from "./action-carousel.js";
import slideShow from "./slide-carousel.js";
let startX, currentX, isDragging = false;

function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}

const slider3dShow = (i, slideRight) => {
    $('.slide__3d').css({
        'transform': 'scale(1)',
        'z-index': 0,
        'transition': 'none',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i).css({
        'transform': 'scale(1.2)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i - 1).css({
        'transform': 'scale(1.1)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i + 1).css({
        'transform': 'scale(1.1)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i - 2).css({
        'transform': 'scale(1.2 translateX(20%)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i + 2).css({
        'transform': 'scale(1.1) translateX(-20%)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(slideRight ? i - 1 : i + 1).css({
        'transform': 'scale(1.3)',
        'z-index': 2,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
    })
}

function handleGesture(e) {
    if (currentX - startX > slideShow.getSlideWidth() / 2) {
        action.prevSlide();

    } else if (startX - currentX > slideShow.getSlideWidth() / 2) {
        action.nextSlide();

    } else {
        action.reset();
    }
}

const gestureSlider = () => {
    $('.slide__carousel').each((i, el) => {
        let offsetX, initialTranslateX, newX;
        if (isTouchDevice()) {

            $(el).on('touchstart', (e) => {
                e.preventDefault();
                startX = e.touches[0].pageX;
                isDragging = true;
                const transformMatrix = $('#slider__carousel').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                initialTranslateX = transformMatrix[4] ? parseFloat(transformMatrix[4]) : 0;
                offsetX = e.touches[0].clientX - initialTranslateX;
            })

            $(el).on('touchmove', (e) => {
                if (!isDragging) return;
                newX = e.touches[0].clientX - offsetX;
                currentX = e.touches[0].pageX;

                if ($('.slider__3d').length > 0) {
                    slider3dShow(i)
                }

                $('#slider__carousel').css('transition', `transform 0s ease-in-out`)
                $('#slider__carousel').css('transform', `translateX(${newX}px)`)
            })

            $(el).on('touchend', (e) => {
                if (!isDragging) return;
                isDragging = false;
                handleGesture();
            })
        } else {
            $(el).mousedown((e) => {
                e.preventDefault();
                startX = e.pageX;
                isDragging = true;
                const transformMatrix = $('#slider__carousel').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                initialTranslateX = transformMatrix[4] ? parseFloat(transformMatrix[4]) : 0;
                offsetX = startX - initialTranslateX;
            })

            $(el).mousemove((e) => {
                if (!isDragging) return;
                currentX = e.pageX;
                newX = e.clientX - offsetX;

                if ($('.slider__3d').length > 0) {
                    let move = currentX - startX
                    if (i - 2 === slideShow.getIndex()) {
                        slider3dShow(i, move > 10)
                    }
                }

                $('#slider__carousel').css('transition', 'none');
                $('#slider__carousel').css('transform', `translateX(${newX}px)`);
            })

            $(document).mouseup((e) => {
                if (!isDragging) return;
                isDragging = false;

                handleGesture();
            })
        }
    })
}

export default gestureSlider;

