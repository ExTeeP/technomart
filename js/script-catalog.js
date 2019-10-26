//modal buy notify

var buttonBuy = document.querySelector(".button-buy"); //находит 1 ссылку списка, при querySelectorAll выдает ошибку
var popupNotify = document.querySelector(".modal-notify");
var buttonClose = document.querySelector(".button-close");
var closeModal = document.querySelector(".overlay");

buttonBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupNotify.classList.add("modal-notify-show");
  closeModal.classList.add("overlay-show");
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupNotify.classList.remove("modal-notify-show");
  closeModal.classList.remove("overlay-show");
});

closeModal.addEventListener("click", function(evt) {
  popupNotify.classList.remove("modal-notify-show");
  closeModal.classList.remove("overlay-show");
});
