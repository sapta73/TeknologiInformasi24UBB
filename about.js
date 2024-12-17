// about.js

// Animasi logo saat halaman About dimuat
window.onload = function () {
  const logoContainer = document.querySelector(".logo");
  const aboutContent = document.querySelector(".about-content");

  // Animasi judul dan konten: fade in
  setTimeout(() => {
    aboutContent.style.opacity = 1;
    aboutContent.style.transition = "opacity 1s ease";
  }, 500);
};
