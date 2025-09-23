const buttonClose = document.querySelector(".popup__close");
const popupContainer = document.querySelector(".b-container");
buttonClose.addEventListener("click", () => {
  popupContainer.classList.add("popup_disable");
});
