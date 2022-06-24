const headerToggle = document.querySelector('.header-toggle');
const nav = document.querySelector('.nav');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownButtons = document.querySelectorAll('.site-nav__link--icon');

function toggleClass(e) {
  e.preventDefault();
  const target = e.target;
  const dropdown = target.nextElementSibling;

  if (!target.classList.contains('site-nav__link--active')) {
    target.classList.add('site-nav__link--active');
    dropdown.classList.add('dropdown--opened');
    dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
  } else {
    target.classList.remove('site-nav__link--active');
    dropdown.classList.remove('dropdown--opened');
    dropdown.style.maxHeight = null;
  }
}

function initHandlers(match) {
  if (match) {
    dropdownButtons.forEach((button) => {
      button.addEventListener('click', toggleClass);
    });
  } else {
    dropdownButtons.forEach((button) => {
      button.removeEventListener('click', toggleClass);
    });
  }
}

headerToggle.addEventListener('click', () => {
  if (!headerToggle.classList.contains('header-toggle--opened')) {
    document.body.style = 'overflow-y: hidden';
  } else {
    document.body.style = '';
  }
  headerToggle.classList.toggle('header-toggle--opened');
  nav.classList.toggle('nav--animated');
});

window.addEventListener('resize', (e) => {
  const mobile = window.matchMedia('(max-width: 767px)').matches;
  if (mobile) {
    initHandlers(mobile);
  }
});

const media = window.matchMedia('(max-width: 767px)').matches;

if (media) {
  initHandlers(media);
}
