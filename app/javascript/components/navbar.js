const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.homemade-nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-green');
      } else {
        navbar.classList.remove('navbar-green');
      }
    });
  }
}
export { initUpdateNavbarOnScroll };
