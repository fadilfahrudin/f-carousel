import slideShow from "./slide-carousel.js";
export default function setDot() {
    let dots = $(".dot__carousel");
    dots.each((i, dot) => {
        if ($('#slider__carousel').attr('data-3d') === 'true' && slideShow.getIndex() - 1 === i) {
            dots.removeClass('active');
            dot.classList.add('active');
        } else if ($('#slider__carousel').attr('data-3d') === 'false' && slideShow.getIndex() === i) {
            dots.removeClass('active');
            dot.classList.add('active');
        }
    });
}