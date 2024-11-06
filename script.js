const toggle_btn = document.getElementById("toggle_btn");
const toggle_btn_Icon = document.querySelector(".toggle_btn i");
const dropdown_header = document.querySelector(".dropdown_header");

function abrirMenu() {
  dropdown_header.classList.toggle("open");
  const isOpen = dropdown_header.classList.contains("open");
  toggle_btn_Icon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

toggle_btn.addEventListener("click", abrirMenu);

// let count = 1;
// document.getElementById("radio1").checked = true;

// function proximaImagem() {
//   count++;
//   if (count > 3) {
//     count = 1;
//   }
//   document.getElementById("radio" + count).checked = true;
// }

// setInterval(function () {
//   proximaImagem();
// }, 3500);
