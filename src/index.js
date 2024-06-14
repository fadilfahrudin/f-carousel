import action from "./modules/action-carousel.js";
import gestureSlider from "./modules/gesture-carousel.js";
import slideShow from "./modules/slide-carousel.js";

document.addEventListener('DOMContentLoaded', () => {
    let containerCarpusel = $('.container__carousel');
    let slider = $("#slider__carousel");
    let slide = $(".slide__carousel");
    let dataDots = slider.attr('data-dots');
    let dataArrows = slider.attr('data-arrows');
    let slideAuto = slider.attr('data-slide-auto');
    let slideDuration = slider.attr('data-duration');
    let slide3DFeature = slider.attr('data-3d');

    // 3d slider feature
    if (slide3DFeature && slide3DFeature === 'true') {
        slider.addClass('slider__3d')
        slide.each((i, el) => {
            $(el).addClass('slide__3d')
            slideShow.setWidth($(el).css('width').replace('px', ''))
        })
        slider.append(slide[2].cloneNode(true));
        slider.prepend(slide[slide.length - 3].cloneNode(true));
        slide.eq(slideShow.getIndex()).css({
            'transform': 'scale(1.3)',
            'z-index': 2,
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
    }

    if (dataDots && dataDots === 'true') {
        let dots = [];
        for (let i = 0; i < slide.length - 2; i++) {
            if (i === 0) {
                dots.push(`<li class="dot__carousel active"></li>`);
            } else {
                dots.push(`<li class="dot__carousel"></li>`);
            }
        }
        containerCarpusel.append(`
            <ul class="dots__carousel">
            ${dots.join('')}
            </ul>
        `);
    }
    if (dataArrows && dataArrows === 'true') {
        containerCarpusel.append(`
            <div class="arrows__carousel">
                <button id="prev__carousel" class="arrow__carousel"></button>
                <button id="next__carousel" class="arrow__carousel"></button>
            </div>
        `);
    }

    if ($('.container__carousel').length > 0) {
        gestureSlider();
    }

    if (slideAuto && slideAuto === 'true') {
        setInterval(() => {
            action.nextSlide();
        }, slideDuration | 3000)
    }

    // click slide
    $("#next__carousel").click(() => {
        action.nextSlide();
    })
    // click slide
    $("#prev__carousel").click(() => {
        action.prevSlide();
    })
    // click dot
    $('.dot__carousel').each((i, el) => {
        el.addEventListener('click', () => {
            action.dotClick(i);
        })
    })

})