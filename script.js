const musik = document.getElementById("musik");
let sudahMain = false;

// Fungsi untuk mainkan musik setelah interaksi
function playMusikSetelahInteraksi() {
  if (!sudahMain) {
    musik.play().then(() => {
      musik.loop = true;
      sudahMain = true;
    }).catch((err) => {
      console.log("Autoplay ditolak: ", err);
    });
  }
}

// Dengarkan klik pertama di mana saja
window.addEventListener("click", playMusikSetelahInteraksi, { once: true });
