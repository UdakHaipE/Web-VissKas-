document.addEventListener('DOMContentLoaded', () => {

    // paņem "NavBar" elementus
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Padara katru nospiežamu
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Dabū datus ko vajag izvadīt
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // aktivizē "navBar" un "navbar-burger"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  });