let sliderElement = document.querySelector("#slider__carousel")
let index = 1
let slide3d = $(".slide__carousel");
let slideSize = $(".slide__carousel").css('width').replace('px', '');

const slider3dShow = (i, transition) => {
    if (transition) {
        slide3d.css({
            'transform': 'scale(1)',
            'z-index': 1,
            'transition': 'transform 0.5s ease-in-out',
            'box-shadow': 'none'
        })
        slide3d.eq(i - 1).css({
            'transform': 'scale(1.3)',
            'z-index': 2,
            'transition': 'transform 0.3s ease-in-out',
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
    } else {
        slide3d.css({
            'transform': 'scale(1)',
            'z-index': 1,
            'transition': 'none',
            'box-shadow': 'none'
        })
        setTimeout(() => {
            slide3d.eq(i - 1).css({
                'transform': 'scale(1.3)',
                'z-index': 2,
                'transition': 'transform 0.3s ease-in-out',
                'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
            })
        }, 20)
    }
}

const slideShowObject = {
    move: (i, transition = true) => {

        if (transition) {
            sliderElement.style.transition = 'transform 0.3s ease-in-out';
        } else {
            sliderElement.style.transition = 'none';
        }
        sliderElement.style.transform = `translateX( -${i * slideSize}px)`;
        if ($('.slider__3d').length > 0) {
            slider3dShow(i, transition)
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
}

const slideShow = Object.freeze(slideShowObject)
export default slideShow;