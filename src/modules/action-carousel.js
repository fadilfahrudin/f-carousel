import slideShow from "./slide-carousel.js";
import setDot from "./dots-carousel.js";
let slider = document.querySelector("#slider__carousel");
let slide = document.querySelectorAll(".slide__carousel");
let isTransitioning = false;
slider.append(slide[0].cloneNode(true));
slider.prepend(slide[slide.length - 1].cloneNode(true));

const actionObject = {
    nextSlide: () => {
        if (isTransitioning) return;
        isTransitioning = true;
        slideShow.move(slideShow.getIndex() + 1);
        setDot();
        if (slideShow.getIndex() === slide.length + 1) {
            setTimeout(() => {
                slideShow.move(1, false)
                setDot();
                isTransitioning = false
            }, 300)
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        }

    },
    prevSlide: () => {
        if (isTransitioning) return;
        isTransitioning = true;

        slideShow.move(slideShow.getIndex() - 1);
        setDot();

        if (slideShow.getIndex() === 0) {
            setTimeout(() => {
                slideShow.move(slide.length, false)
                setDot();
                isTransitioning = false
            }, 300)
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    },
    dotClick: (i) => {
        slideShow.move(i + 1);
        setDot();
    },
    reset: () => {
        slideShow.move(slideShow.getIndex());
        setDot();
    }
}


const action = Object.freeze(actionObject)
export default action;