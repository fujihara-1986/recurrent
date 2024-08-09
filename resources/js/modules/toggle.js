const ham = document.querySelector('.hamburger'); 
const nav = document.querySelector('.nav_sp'); 
ham.addEventListener('click', function () { 
    ham.classList.toggle('active'); 
    nav.classList.toggle('open'); 
  });

  