//modal form feedback

var buttonContact = document.querySelector(".button-contact");
var popupFeedback = document.querySelector(".modal-feedback");
var buttonClose = document.querySelector(".button-close.close-form");
var closeModal = document.querySelector(".overlay");

buttonContact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-feedback-show");
  closeModal.classList.add("overlay-show");
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-feedback-show");
  closeModal.classList.remove("overlay-show");
});

closeModal.addEventListener("click", function(evt) {
  popupFeedback.classList.remove("modal-feedback-show");
  closeModal.classList.remove("overlay-show");
})

//modal overlay
