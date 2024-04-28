/*document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});*/

var isScrolling;
document.addEventListener(
  "scroll",
  function () {
    window.clearTimeout(isScrolling);
    var scrollbarStyle = document.createElement("style");
    scrollbarStyle.innerHTML = `
      ::-webkit-scrollbar-thumb {
          background-color: yellow; /* Cambia "yellow" al color que desees */
      }`;
    document.body.appendChild(scrollbarStyle);
    isScrolling = setTimeout(function () {
      var scrollbarStyle = document.createElement("style");
      scrollbarStyle.innerHTML = `
      ::-webkit-scrollbar-thumb {
          background-color: #fff5; /* Cambia "#fff5" al color que desees */
      }`;
      document.body.appendChild(scrollbarStyle);
    }, 300);
  },
  false
);

function cerrarMenuLateralPorClick() {
  let checkBoxHabilitadorMenuLateral =
    document.getElementById("check_menu_lateral");
  if (checkBoxHabilitadorMenuLateral.checked)
    checkBoxHabilitadorMenuLateral.checked = false;
}

function abrirMenuLateralPorClick() {
  let checkBoxHabilitadorMenuLateral =
    document.getElementById("check_menu_lateral");
  if (!checkBoxHabilitadorMenuLateral.checked)
    checkBoxHabilitadorMenuLateral.checked = true;
}

document
  .getElementById("cuerpo_portafolio")
  .addEventListener("click", function (evt) {
    cerrarMenuLateralPorClick();
  });

document.getElementById("cabecera").addEventListener("click", function (evt) {
  if (
    evt.target.id === "boton_abrir" ||
    evt.target.id === "check_menu_lateral"
  ) {
    abrirMenuLateralPorClick();
  } else {
    cerrarMenuLateralPorClick();
  }
});

const avatarImg = document.getElementById("imagen_avatar");
const avatarContainer = document.getElementById("avatar_container");
const images = ["images/avatar_dp_1.webp", "images/avatar_dp_2.webp"];
let currentImageIndex = 0;
function alternarImagen() {
  avatarImg.style.opacity = 0;
  avatarImg.style.transition = "opacity 1s ease-in-out";
  setTimeout(() => {
    avatarImg.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    avatarImg.style.opacity = 1;
  }, 1000);
}
setInterval(alternarImagen, 4000);
