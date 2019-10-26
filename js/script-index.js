//modal form feedback

var buttonContact = document.querySelector(".button-contact");
var popupFeedback = document.querySelector(".modal-feedback");
var buttonClose = document.querySelector(".button-close.close-form");

buttonContact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-feedback-show");
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-feedback-show");
});
