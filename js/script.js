//global

var closeModal = document.querySelector(".overlay");  //background overlay modal

//localStorage

var isStorageSupport = true; //localStorage support browser
var storageName = "";  //localStorage name field value
var storageEmail = "";  //localStorage email field value

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

//modal feedback

var feedback = document.querySelector(".modal-feedback");

if (feedback) {
  var openFeedback = document.querySelector(".button-contact");  //button open modal feedback
  var popupFeedback = document.querySelector(".modal-feedback");  //modal feedback
  var buttonCloseFeedback = popupFeedback.querySelector(".button-close"); //button close modal feedback
  var formFeedback = popupFeedback.querySelector(".form-feedback"); //form feedback
  var nameField = popupFeedback.querySelector("#name-field"); //form input name
  var emailField = popupFeedback.querySelector("#email-field");  //form input email
  var feedbackField = popupFeedback.querySelector("#feedback-field");  //form textarea

  openFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-feedback-show");
    closeModal.classList.add("overlay-show");
    if (storageName && storageEmail) {
      nameField.value = storageName;
      emailField.value = storageEmail;
      feedbackField.focus();
    } else {
        nameField.focus();
    }
  });

  buttonCloseFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-feedback-show");
    closeModal.classList.remove("overlay-show");
  });

  closeModal.addEventListener("click", function (evt) {
    popupFeedback.classList.remove("modal-feedback-show");
    closeModal.classList.remove("overlay-show");
    popupFeedback.classList.remove("modal-feedback-error");
  });

  formFeedback.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !feedbackField.value) {
      evt.preventDefault();
      popupFeedback.classList.add("modal-feedback-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", nameField.value);
        localStorage.setItem("email", emailField.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupFeedback.classList.contains("modal-feedback-show")) {
        popupFeedback.classList.remove("modal-feedback-show");
        popupFeedback.classList.remove("modal-feedback-error");
        closeModal.classList.remove("overlay-show");
      }
    }
  });
};

// modal map

var map = document.querySelector(".modal-map");

if (map) {
  var openMap = document.querySelector(".contact-map a");  //clic open modal map
  var popupMap = document.querySelector(".modal-map");  //modal map
  var buttonCloseMap = popupMap.querySelector(".button-close"); //button close modal map

  openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-map-show");
    closeModal.classList.add("overlay-show");
  });

  buttonCloseMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-map-show");
    closeModal.classList.remove("overlay-show");
  });

  closeModal.addEventListener("click", function (evt) {
    popupMap.classList.remove("modal-map-show");
    closeModal.classList.remove("overlay-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains("modal-map-show")) {
        popupMap.classList.remove("modal-map-show");
        closeModal.classList.contains("overlay-show");
        closeModal.classList.remove("overlay-show");
      }
    }
  });
};

//modal notify buy

var notifyBuy = document.querySelector(".modal-notify")

if (notifyBuy) {
  var openNotifyBuy = document.querySelectorAll(".button-buy"); //button open modal notify
  var popupNotifyBuy = document.querySelector(".modal-notify");  //modal notify
  var buttonCloseNotifyBuy = document.querySelector(".button-close");  //button close modal notify
  var buttonContinueNotifyBuy = document.querySelector(".button-continue");  //button continue modal notify

  for (var i = 0; i < openNotifyBuy.length; i++) {
    openNotifyBuy[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupNotifyBuy.classList.add("modal-notify-show");
      closeModal.classList.add("overlay-show");
    });
  };

  buttonCloseNotifyBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupNotifyBuy.classList.remove("modal-notify-show");
    closeModal.classList.remove("overlay-show");
  });

  buttonContinueNotifyBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupNotifyBuy.classList.remove("modal-notify-show");
    closeModal.classList.remove("overlay-show");
  });

  closeModal.addEventListener("click", function(evt) {
    popupNotifyBuy.classList.remove("modal-notify-show");
    closeModal.classList.remove("overlay-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupNotifyBuy.classList.contains("modal-notify-show")) {
        popupNotifyBuy.classList.remove("modal-notify-show");
        closeModal.classList.remove("overlay-show");
      }
    }
  });
};
