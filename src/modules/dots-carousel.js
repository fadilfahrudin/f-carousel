import slideShow from "./slide-carousel.js";
export default function setDot() {
    let dots = $(".dot__carousel");
    dots.each((i, dot) => {
        if (slideShow.getIndex() - 1 === i) {
            dots.removeClass('active');
            dot.classList.add('active');
        }
    });
}