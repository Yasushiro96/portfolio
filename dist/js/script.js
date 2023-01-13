window.onscroll = function () {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   const toTop = document.querySelector('#to-top');
 
   if (window.pageYOffset > fixedNav) {
     header.classList.add('navbar-fixed');
     toTop.classList.remove('hidden');
     toTop.classList.add('flex');
   } else {
     header.classList.remove('navbar-fixed');
     toTop.classList.remove('flex');
     toTop.classList.add('hidden');
   }
 };
 
 const button = document.querySelector('#navbar-button');
 const menu = document.querySelector('#menu');
 
 
 button.addEventListener('click', () => {
   menu.classList.toggle('hidden');
 });
 