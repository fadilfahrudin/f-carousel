/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


let slider = document.querySelector("#slider__carousel");
let slide = document.querySelectorAll(".slide__carousel");
let isTransitioning = false;
slider.append(slide[0].cloneNode(true));
slider.prepend(slide[slide.length - 1].cloneNode(true));



const actionObject = {
    nextSlide: () => {
        if (isTransitioning) return;
        isTransitioning = true;
        _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(_slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() + 1);
        (0,_dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        if ($('#slider__carousel').attr('data-3d') === 'true' && _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() === slide.length + 1) {
            setTimeout(() => {
                _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(1, false)
                ;(0,_dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                isTransitioning = false
            }, 300)
        } else if ($('#slider__carousel').attr('data-3d') === 'false' && _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() === slide.length) {
            setTimeout(() => {
                _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(0, false)
                ;(0,_dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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

        _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(_slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() - 1);
        (0,_dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

        if (_slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() === 0) {
            setTimeout(() => {
                _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(slide.length, false)
                ;(0,_dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                isTransitioning = false
            }, 300)
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    },
    dotClick: (i) => {
        _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(i + 1);
        (0,_dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    },
    reset: () => {
        _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(_slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex());
        (0,_dots_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
}


const action = Object.freeze(actionObject)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (action);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideShow);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setDot)
/* harmony export */ });
/* harmony import */ var _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function setDot() {
    let dots = $(".dot__carousel");
    dots.each((i, dot) => {
        if ($('#slider__carousel').attr('data-3d') === 'true' && _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() - 1 === i) {
            dots.removeClass('active');
            dot.classList.add('active');
        } else if ($('#slider__carousel').attr('data-3d') === 'false' && _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() === i) {
            dots.removeClass('active');
            dot.classList.add('active');
        }
    });
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _slide_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


let startX, currentX, isDragging = false;

function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}

const slider3dShow = (i, slideRight) => {
    $('.slide__3d').css({
        'transform': 'scale(1)',
        'z-index': 0,
        'transition': 'none',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i).css({
        'transform': 'scale(1.2)',
        'z-index': 3,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i - 1).css({
        'transform': 'scale(1.1)',
        'z-index': 2,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i + 1).css({
        'transform': 'scale(1.1)',
        'z-index': 2,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i - 2).css({
        'transform': 'scale(1.2 translateX(20%)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(i + 2).css({
        'transform': 'scale(1.1) translateX(-20%)',
        'z-index': 1,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': 'none'
    })
    $('.slide__3d').eq(slideRight ? i - 1 : i + 1).css({
        'transform': 'scale(1.3)',
        'z-index': 4,
        'transition': 'transform 0.5s ease-in-out',
        'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
    })

}

function handleGesture(e) {
    if (currentX - startX > _slide_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSlideWidth() / 2) {
        _action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].prevSlide();

    } else if (startX - currentX > _slide_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSlideWidth() / 2) {
        _action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].nextSlide();

    } else {
        _action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].reset();
    }
}

const gestureSlider = () => {
    $('.slide__carousel').each((i, el) => {
        let offsetX, initialTranslateX, newX;
        if (isTouchDevice()) {

            $(el).on('touchstart', (e) => {
                e.preventDefault();
                startX = e.touches[0].pageX;
                isDragging = true;
                const transformMatrix = $('#slider__carousel').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                initialTranslateX = transformMatrix[4] ? parseFloat(transformMatrix[4]) : 0;
                offsetX = e.touches[0].clientX - initialTranslateX;
            })

            $(el).on('touchmove', (e) => {
                if (!isDragging) return;
                newX = e.touches[0].clientX - offsetX;
                currentX = e.touches[0].pageX;

                if ($('.slider__3d').length > 0) {
                    slider3dShow(i)
                }

                $('#slider__carousel').css('transition', `transform 0s ease-in-out`)
                $('#slider__carousel').css('transform', `translateX(${newX}px)`)
            })

            $(el).on('touchend', (e) => {
                if (!isDragging) return;
                isDragging = false;
                handleGesture();
            })
        } else {
            $(el).mousedown((e) => {
                e.preventDefault();
                startX = e.pageX;
                isDragging = true;
                const transformMatrix = $('#slider__carousel').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                initialTranslateX = transformMatrix[4] ? parseFloat(transformMatrix[4]) : 0;
                offsetX = startX - initialTranslateX;
                $(el).css("pointer-events", "fill");
            })

            $(el).mousemove((e) => {
                if (!isDragging) return;
                $(el).css("pointer-events", "fill");

                currentX = e.pageX;
                newX = e.clientX - offsetX;

                if ($('.slider__3d').length > 0) {
                    let move = currentX - startX
                    if (i - 2 === _slide_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getIndex()) {
                        slider3dShow(i, move > 10)
                    }
                }

                $('#slider__carousel').css('transition', 'none');
                $('#slider__carousel').css('transform', `translateX(${newX}px)`);
            })

            $(document).mouseup((e) => {
                if (!isDragging) return;
                isDragging = false;

                handleGesture();
            })
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gestureSlider);



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_action_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_gesture_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);




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
        _modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"].setIndex(1)
        slider.addClass('slider__3d')
        slide.each((i, el) => {
            $(el).addClass('slide__3d')
            _modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"].setWidth($(el).css('width').replace('px', ''))
        })
        slider.append(slide[2].cloneNode(true));
        slider.append(slide[3].cloneNode(true));
        slider.prepend(slide[slide.length - 3].cloneNode(true));
        slider.prepend(slide[slide.length - 4].cloneNode(true));
        // slide.css({
        //     'transform': 'scale(1) translateX(100%)',
        //     'z-index': 0,
        //     'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        // })
        slide.eq(_modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIndex()).css({
            'transform': 'scale(1.3)',
            'z-index': 2,
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide.eq(_modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIndex() + 1).css({
            'transform': 'scale(1.2) translateX(-20%)',
            'z-index': 1,
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide.eq(_modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIndex() - 1).css({
            'transform': 'scale(1.2) translateX(20%)',
            'z-index': 1,
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        slide.eq(_modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIndex() + 2).css({
            'transform': 'scale(1) translateX(-100%)',
            'z-index': 0,
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })
        $('.slide__carousel').eq(1).css({
            'transform': 'scale(1) translateX(100%)',
            'z-index': 0,
            'box-shadow': '0px 10px 15px -3px rgba(0,0,0,0.1)'
        })

        _modules_slide_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"].setSlide($(".slide__carousel"))
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
        (0,_modules_gesture_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    if (slideAuto && slideAuto === 'true') {
        setInterval(() => {
            _modules_action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].nextSlide();
        }, slideDuration)
    }

    // click slide
    $("#next__carousel").click(() => {
        _modules_action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].nextSlide();
    })
    // click slide
    $("#prev__carousel").click(() => {
        _modules_action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].prevSlide();
    })
    // click dot
    $('.dot__carousel').each((i, el) => {
        el.addEventListener('click', () => {
            _modules_action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].dotClick(i);
        })
    })

})
})();

/******/ })()
;