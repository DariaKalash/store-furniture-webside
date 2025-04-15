const burgerBtn = document.getElementById('burgerButton');
const mobileMenu = document.getElementById('burgerMenu');
const closeBM = document.getElementById('closeButton');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeBM.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});