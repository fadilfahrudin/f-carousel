import action from "./action-carousel.js";
let startX, currentX, isDragging = false;

function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}

const slider3dShow = (i) => {
    $('.slide__3d').eq(i).css({
        'transform': 'scale(1)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
}

function handleGesture(e) {
    if (currentX - startX > 250) {
        action.prevSlide();
    } else if (startX - currentX > 250) {
        action.nextSlide();
    } else {
        action.reset();
    }
}

const gestureSlider = () => {
    $('.slide__carousel').each((i, el) => {
        let offsetX;
        let newX;
        if (isTouchDevice()) {

            $(el).on('touchstart', (e) => {
                e.preventDefault();
                startX = e.touches[0].pageX;
                isDragging = true;
                offsetX = e.touches[0].clientX - $('#slider__carousel').offset().left;
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
                offsetX = e.clientX - $('#slider__carousel').offset().left;
            })

            $(el).mousemove((e) => {
                if (!isDragging) return;
                newX = e.clientX - offsetX;
                currentX = e.pageX;

                if ($('.slider__3d').length > 0) {
                    slider3dShow(i)
                }

                $('#slider__carousel').css('transition', `transform 0s ease-in-out`)
                $('#slider__carousel').css('transform', `translateX(${newX}px)`)
            })

            $(el).mouseup((e) => {
                if (!isDragging) return;
                isDragging = false;
                handleGesture();
            })
        }
    })
}

export default gestureSlider;

