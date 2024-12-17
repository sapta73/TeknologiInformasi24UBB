// Efek Smooth Scroll untuk Navigasi
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// Efek Hover Tombol Reach Out
const reachOutBtn = document.querySelector(".reach-out");
reachOutBtn.addEventListener("mouseover", () => {
  reachOutBtn.style.backgroundColor = "#fff";
  reachOutBtn.style.color = "#000";
});
reachOutBtn.addEventListener("mouseout", () => {
  reachOutBtn.style.backgroundColor = "#FFD700";
  reachOutBtn.style.color = "#000";
});
