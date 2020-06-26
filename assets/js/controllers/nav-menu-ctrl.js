function switcher() {
  const searchModal = document.querySelector('.js-header-nav');
  if (!searchModal.classList.contains('is-active')) {
    searchModal.classList.add('is-active');
  } else {
    searchModal.classList.remove('is-active');
  }
}

function toggleSticky() {
  const newScroll = window.scrollY || window.pageYOffset;
  if (newScroll > 0) {
    document.querySelector('.js-header').classList.add('is-sticked');
  } else if (document.querySelector('.js-header').classList.contains('is-sticked')) {
    document.querySelector('.js-header').classList.remove('is-sticked');
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
  if (document.querySelector('.js-header')) {
    window.addEventListener('scroll', toggleSticky);
  }
}

export default init();
