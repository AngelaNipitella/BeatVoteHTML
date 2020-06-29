function switcher() {
  const search = document.querySelector('.js-toggle-filter');
  if (!search.classList.contains('is-active')) {
    search.classList.add('is-active');
  } else {
    search.classList.remove('is-active');
  }
}

function init() {
  const showHiddenButton = document.querySelectorAll('.js-toggle');
  const search = document.querySelector('.js-toggle-filter');

  if (showHiddenButton && search) {
    showHiddenButton.forEach((el) => {
      el.addEventListener('click', switcher);
    });
  }
}

export default init();