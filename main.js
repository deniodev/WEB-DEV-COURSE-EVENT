const hambuger = document.querySelector('#hambuger');
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const naviLinks = document.querySelectorAll('.nav-link');

hambuger.addEventListener('click', () => {
  menu.classList.add('mobile-menu');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('mobile-menu');
  });

  naviLinks.forEach((n) => n.addEventListener('click', () => menu.classList.remove('mobile-menu')));