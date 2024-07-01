let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});
menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

const form = document.getElementById("formul");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index){
  campos[index].style.border = '2px solid #e63636';
  spans[index].stylr.display = 'block',
}

function nameValidade() {
  if (campos[0].value.length < 3) {
    console.log("NOME DEVE TER 3 CARACTERES");
  } else {
    console.log("VALIDADE O NOME");
  }
}
