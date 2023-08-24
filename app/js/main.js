$(function(){

  
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'); 
  burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');   
  });
});

const burger = document.querySelector('.burger'); 
const mobileMenu = document.querySelector('.header-top__list');
const bodyLock = document.querySelector('body'); 

document.addEventListener('DOMContentLoaded', () => {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('header-top__list--active'); 
    if (mobileMenu.classList.contains('header-top__list--active'))  { 
      burger.classList.add('burger--active'); 
      bodyLock.classList.add('lock'); 
    }
    else { 
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock'); 
    }
  });
});


document.addEventListener('click', function (e) {
  if (e.target !== burger && e.target !== mobileMenu) {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('header-top__list--active');
    bodyLock.classList.remove('lock');
  }
});