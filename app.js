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
        link.style.animation = `navlinkFade 0.25s ease forwards ${
          index / 4 + 0.35
        }s`;
      }
    });

    // toggle
    burger.classList.toggle("toggle");
  });
};
navSlide();
