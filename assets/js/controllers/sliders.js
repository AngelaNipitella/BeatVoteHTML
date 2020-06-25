import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider';

function initExplorer() {
  const slider1 = tns({
    container: '.js-slider',
    items: 1,
    center: false,
    loop: false,
    controls: false,
    prevButton: '.c-slider__arrow--prev',
    nextButton: '.c-slider__arrow--next',
  });
}

function init() {
  if (document.querySelector('.js-slider')) {
    initExplorer();
  }
}

module.exports = init();
