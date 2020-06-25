function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function cookieCheck() {
  if (getCookie('accepted_cookies').length < 1) {
    document.querySelector('.js-cookies').classList.add('is-active');
  }
}

function closeMsg() {
  document.querySelector('.js-cookies').classList.remove('is-active');
  document.cookie = 'accepted_cookies=true';
}

function init() {
  document.querySelectorAll('.js-cookies-btn').forEach((btn) => btn.addEventListener('click', closeMsg));
  cookieCheck();
}

export default init();
