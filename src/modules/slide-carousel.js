let sliderElement = document.querySelector("#slider__carousel");
let index = 0;
let slideSize = $(".slide__carousel").css('width').replace('px', '');
let slide3d;

const slider3dShow = (i, transition) => {
    if (transition) {
        slide3d.css({
            'transform': 'scale(1)',
            'z-index': 0,
            'transition': 'transform 0.5s ease-in-out',
            'box-shadow': 'none'

        })
        slide3d.eq(i).css({
            'transform': 'scale(1.3)',
            'z-index': 2,
            'transition': 'transform 0.3s ease-in-out',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i - 1).css({
            'transform': 'scale(1.2) translateX(20%)',
            'z-index': 1,
            'transition': 'transform 0.3s ease-in-out',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i - 2).css({
            'transform': 'scale(1.1) translateX(100%)',
            'z-index': 0,
            'transition': 'transform 0.3s ease-in-out',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i + 1).css({
            'transform': 'scale(1.2) translateX(-20%)',
            'z-index': 1,
            'transition': 'transform 0.3s ease-in-out',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i + 2).css({
            'transform': 'scale(1.1) translateX(-100%)',
            'z-index': 0,
            'transition': 'transform 0.3s ease-in-out',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
    } else {
        slide3d.css({
            'transform': 'scale(1)',
            'z-index': 0,
            'transition': 'none',
            'box-shadow': 'none'
        })
        slide3d.eq(i).css({
            'transform': 'scale(1.3)',
            'z-index': 2,
            'transition': 'none',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i + 1).css({
            'transform': 'scale(1.2) translateX(-20%)',
            'z-index': 1,
            'transition': 'none',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i - 1).css({
            'transform': 'scale(1.2) translateX(20%)',
            'z-index': 1,
            'transition': 'none',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i + 2).css({
            'transform': 'scale(1.1) translateX(-100%)',
            'z-index': 0,
            'transition': 'none',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide3d.eq(i - 2).css({
            'transform': 'scale(1.1) translateX(100%)',
            'z-index': 0,
            'transition': 'none',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
    }
}

const slideShowObject = {
    move: (i, transition = true) => {
        slideSize = $('.slide__carousel').css('width').replace('px', '');
        if (transition) {
            sliderElement.style.transition = 'transform 0.3s ease-in-out';
        } else {
            sliderElement.style.transition = 'none';
        }
        sliderElement.style.transform = `translateX( -${slideSize * (i + 1)}px)`;
        if ($('.slider__3d').length > 0) {
            slider3dShow(i + 2, transition)
        }
        index = i
    },
    getIndex: () => {
        return index
    },
    setIndex: (i) => {
        index = i
    },
    setWidth: (width) => {
        slideSize = width
    },
    getSlideWidth: () => {
        return slideSize
    },
    setSlide: (slide) => {
        slide3d = slide
    },
}

const slideShow = Object.freeze(slideShowObject)
export default slideShow;