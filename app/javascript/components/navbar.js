const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.homemade-nav');
  // const navitem = document.querySelector('.nav-item:hover');
  if (navbar) {
    window.addEventListener('scroll', () => {
      // var windowHeight = window.innerHeight;
      if (window.scrollY >= 120) {
        navbar.classList.add('navbar-green');
      } else {
        navbar.classList.remove('navbar-green');
      }
    });
  }
  // if (navbar.classList.contains('navbar-green')) = true {
  //   navitem.classList.add()
  // }
}
export { initUpdateNavbarOnScroll };
