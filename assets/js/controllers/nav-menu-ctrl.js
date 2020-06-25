function switcher() {
  const searchModal = document.querySelector('.js-header-nav');
  if (!searchModal.classList.contains('is-active')) {
    searchModal.classList.add('is-active');
  } else {
    searchModal.classList.remove('is-active');
  }
}

function init() {
  const openCloseButtons = document.querySelectorAll('.js-menu');
  const searchModal = document.querySelector('.js-header-nav');

  if (openCloseButtons && searchModal) {
    openCloseButtons.forEach((el) => {
      el.addEventListener('click', switcher);
    });
  }
}

export default init();
