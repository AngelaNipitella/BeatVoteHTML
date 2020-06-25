import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider';

function initSlider() {
  const slider = tns({
    container: '.js-slider',
    preventScrollOnTouch: 'force',
    items: 1,
    center: false,
    loop: false,
    controls: true,
    prevButton: '.c-slider__arrow--prev',
    nextButton: '.c-slider__arrow--next',
  });
}

function init() {
  if (document.querySelector('.js-slider')) {
    initSlider();
  }
}

module.exports = init();
