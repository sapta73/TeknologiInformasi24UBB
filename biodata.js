// Infinite Scroll
const container = document.getElementById("biodata-container");

function loadNewSlide() {
  const newSlide = document.createElement("section");
  newSlide.className = "biodata-slide";
  newSlide.innerHTML = `
        <div class="biodata-left">
            <div class="photo-box">
                <img src="3.jpg" alt="Foto Biodata">
            </div>
        </div>
        <div class="biodata-right">
            <h1>Nama Baru</h1>
            <h2>Identitas Baru</h2>
            <p>Deskripsi Baru untuk Biodata Ini.</p>
            <div class="bintang-dekorasi">✦ ✦</div>
            <div class="bottom-boxes">
                <div class="minat">
                    <h3>MINAT</h3>
                    <p>● <span>Minat Baru</span></p>
                </div>
                <div class="impian">
                    <h3>IMPIAN</h3>
                    <p>● <span>Impian Baru</span></p>
                </div>
            </div>
        </div>`;
  container.appendChild(newSlide);
}

// Event Listener untuk Infinite Scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadNewSlide();
  }
});
