let sliderElement = document.querySelector("#slider__carousel")
let slide = document.querySelectorAll(".slide__carousel")
let index = 1

const slideShowObject = {
    move: (i, transition = true) => {
        let width = slide[0].getBoundingClientRect().width;
        if (transition) {
            sliderElement.style.transition = 'transform 0.3s ease-in-out';
        } else {
            sliderElement.style.transition = 'none';
        }
        sliderElement.style.transform = `translateX( -${i * width}px)`;
        index = i
    },
    getIndex: () => {
        return index
    },
}

const slideShow = Object.freeze(slideShowObject)
export default slideShow;