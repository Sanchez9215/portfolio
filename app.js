const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const navLinks = document.querySelectorAll(".navLinks li");
  // toggleNav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkFade 0.5s ease forwards ${
          index / 6 + 1
        }s`;
      }
    });

    // toggle
    burger.classList.toggle(".toggle");
  });
};
navSlide();
