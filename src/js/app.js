const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

document.addEventListener("DOMContentLoaded", () => {
 

   hamburger.addEventListener("click", () => {
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
      navbar.classList.toggle('shadow');
      hamburger.classList.toggle('toggle');
   });
 
});


    const navMenu = document.querySelectorAll('.nav-item');
    hamburger.addEventListener('click', () => {
      navMenu.forEach(item => {
          item.style.animation = 'none';
          void item.offsetWidth; 
          item.style.animation = null;
          item.style.animationName = 'shadow';
          item.style.animationDuration = '3s';
          item.style.animationTimingFunction = 'forwards';
          item.style.animationFillMode = 'both';
      });
  });