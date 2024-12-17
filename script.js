// Ambil semua link menu navigasi
const navLinks = document.querySelectorAll("nav ul li a");

// Fungsi untuk menambahkan class "active" pada link yang sesuai saat scroll
function setActiveLink() {
  const sections = document.querySelectorAll("section");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Event listener untuk scroll
window.addEventListener("scroll", setActiveLink);

// Pilihan lainnya jika menggunakan click untuk aktifkan menu
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
