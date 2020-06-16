const openCloseButtons = document.querySelectorAll('.js-menu');
const searchModal = document.querySelector('nav.c-header__nav');

const switcher = () => {
    if (!searchModal.classList.contains('c-header__nav--show')) {
        searchModal.classList.add('c-header__nav--show');
    } else {
        searchModal.classList.remove('c-header__nav--show');
    }
};

const setListener = (elements) => {
    elements.forEach((el) => {
        el.addEventListener('click', switcher);
    });
};

setListener(openCloseButtons);