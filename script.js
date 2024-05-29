import carousel from "./modules/slider-carousel.js";

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        carousel.nextSlide();
    }, 3000)
    console.log(carousel.getSlideIndex(), 'belmu di tekan')
    // $("#next__carousel").click(() => {
    //     carousel.nextSlide();
    //     console.log(carousel.getSlideIndex())
    // })
})