function switcher() {
  const searchModal = document.querySelector('nav.c-header__nav');
  if (!searchModal.classList.contains('c-header__nav--show')) {
    searchModal.classList.add('c-header__nav--show');
  } else {
    searchModal.classList.remove('c-header__nav--show');
  }
};

function init() {
  const openCloseButtons = document.querySelectorAll('.js-menu');
  const searchModal = document.querySelector('nav.c-header__nav');

  if (openCloseButtons && searchModal) {
    openCloseButtons.forEach((el) => {
        el.addEventListener('click', switcher);
    });
  }
}

export default init();