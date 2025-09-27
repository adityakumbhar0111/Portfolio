function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}

const toggleMenu = () => {
  document.querySelector(".nav-links").classList.toggle("active");
};

AOS.init();

var typed = new Typed(".auto-type", {
  strings: ["Coding", "Learning", "Web Developer", "Full-Stack Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const toggleButton = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
