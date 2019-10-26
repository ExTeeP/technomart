//modal buy notify

var buttonBuy = document.querySelector(".button-buy"); //находит 1 ссылку списка, при querySelectorAll выдает ошибку
var popupNotify = document.querySelector(".modal-notify");
var buttonClose = document.querySelector(".button-close");

buttonBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupNotify.classList.add("modal-notify-show");
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupNotify.classList.remove("modal-notify-show");
});
