
const nextAction = () => {
    // $('.carousel-wrapper').css({
    //     'transform': `translate3d(-${50}px, 0, 0)`,
    // })

    $(".carousel-slide").eq(0).css({
        'transform': 'translate3d(300px, 0px, -100px)',
        'z-index': 0
    })

    $(".carousel-slide").eq(1).css({
        'transform': 'translate3d(-300px, 0px, -50px)',
        'z-index': 0
    })

    $(".carousel-slide").eq(2).css({
        'transform': 'translate3d(-600px, 0px, 130px)',
        'z-index': 1
    })

    $(".carousel-slide").eq(3).css({
        'transform': 'translate3d(-800px, 0px, 250px)',
        'z-index': 2
    })

    $(".carousel-slide").eq(4).css({
        'transform': 'translate3d(-1050px, 0px, 130px)',
        'z-index': 0
    })
    $(".carousel-slide").eq(5).css({
        'transform': 'translate3d(-1300px, 0px, -50px)',
        'z-index': 0
    })

}

const slideActionObject = {
    nextSlide: () => nextAction(),
    prevSlide: () => {
        console.log('prevSlide');
    },
    reset: () => {
        console.log('reset');
    }
}

const action = Object.freeze(slideActionObject)
export default action;