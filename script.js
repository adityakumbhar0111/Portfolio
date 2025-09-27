function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}

AOS.init();

var typed = new Typed(".auto-type", {
  strings: ["Coding", "Learning", "Web Developer", "Full-Stack Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const toggleBtn = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleBtn.classList.toggle("active"); 
});


navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    toggleBtn.classList.remove("active"); 
  });
});
