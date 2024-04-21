function cerrarMenuLateralPorClick() {
  let checkBoxHabilitadorMenuLateral =
    document.getElementById("check_menu_lateral");
  if (checkBoxHabilitadorMenuLateral.checked)
    checkBoxHabilitadorMenuLateral.checked = false;
}

document
  .getElementById("cuerpo_portafolio")
  .addEventListener("click", function (evt) {
    cerrarMenuLateralPorClick();
  });

document
  .getElementById("boton_contactame")
  .addEventListener("click", function (evt) {
    cerrarMenuLateralPorClick();
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
