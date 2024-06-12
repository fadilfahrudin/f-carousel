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
        if (_slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() === slide.length + 1) {
            setTimeout(() => {
                _slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].move(1, false)
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
        if (_slide_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIndex() - 1 === i) {
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

let startX, currentX, isDragging = false;

function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}

function handleGesture(e) {
    if (currentX - startX > 250) {
        _action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].prevSlide();
    } else if (startX - currentX > 250) {
        _action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].nextSlide();
    } else {
        _action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].reset();
    }
}

const gestureSlider = () => {
    $('.slide__carousel').each((i, el) => {
        let offsetX;
        let newX;
        if (isTouchDevice()) {

            $(el).on('touchstart', (e) => {
                e.preventDefault();
                startX = e.touches[0].pageX;
                isDragging = true;
                offsetX = e.touches[0].clientX - $('#slider__carousel').offset().left;
            })

            $(el).on('touchmove', (e) => {
                if (!isDragging) return;
                newX = e.touches[0].clientX - offsetX;
                currentX = e.touches[0].pageX;

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
                offsetX = e.clientX - $('#slider__carousel').offset().left;
            })

            $(el).mousemove((e) => {
                if (!isDragging) return;
                newX = e.clientX - offsetX;
                currentX = e.pageX;

                $('#slider__carousel').css('transition', `transform 0s ease-in-out`)
                $('#slider__carousel').css('transform', `translateX(${newX}px)`)
            })

            $(el).mouseup((e) => {
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

    slider.css('transform', `translateX(-100%)`);

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
                <button id="prev__carousel" class="arrow__carousel">←</button>
                <button id="next__carousel" class="arrow__carousel">→</button>
            </div>
        `);
    }

    (0,_modules_gesture_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    if (slideAuto && slideAuto === 'true') {
        setInterval(() => {
            _modules_action_carousel_js__WEBPACK_IMPORTED_MODULE_0__["default"].nextSlide();
        }, slideDuration | 3000)
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