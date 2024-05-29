let slider = $("#slider__carousel")
let slide = $(".slide__carousel")
let index = 0;
let isTransitioning = false;


const moveSlide = (i, transition = true) => {
    let width = slide.css('width').replace('px', '');
    if (transition) {
        slider.css('transition', 'transform 0.3s ease-in-out');
    } else {
        slider.css('transition', 'none');
    }
    slider.css('transform', `translateX(-${i * width}px)`);
    index = i
}

// step 1
const carouselObjects = {
    nextSlide: () => {
        if (isTransitioning) return;
        isTransitioning = true;
        // step 3
        moveSlide(index + 1);
        // step 4
        if (index === slide.length) {
            slider.append(slide[0].cloneNode(true));
            setTimeout(() => {
                moveSlide(0, false)
                isTransitioning = false
            }, 500)
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    },
    prevSlide: () => {

    },
    getSlideIndex: () => {
        return index;
    },
    reset: () => {
        index = 0;
    }
}

const carousel = Object.freeze(carouselObjects)

export default carousel;