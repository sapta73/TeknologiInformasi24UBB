// project.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const observerOptions = {
    root: null,
    threshold: 0.3,
  };

  const slideIn = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  };

  const observer = new IntersectionObserver(slideIn, observerOptions);
  slides.forEach((slide) => observer.observe(slide));
});
