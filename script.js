const hamburger = document.querySelector('.hamburger');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenuButtons = document.querySelectorAll('.mobile-menu .has-submenu > button');

hamburger?.addEventListener('click', () => {
  const open = mobileMenuWrapper.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

mobileMenuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.has-submenu');
    const expanded = parent.classList.toggle('open');
    button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
});
