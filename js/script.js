const link = document.querySelector(".map");
const popup = document.querySelector(".modal-map");
const close = document.querySelector(".modal-close");

link.addEventListener("click", function  (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

const linkfeed = document.querySelector(".footer-copiright-address");
const popupfeed = document.querySelector(".modal-feedback");
const closed = document.querySelector(".modal-close");
const form = popupfeed.querySelector(".feedback-form");
const fullNameUser = popupfeed.querySelector("[name=name-user]");
const email = popupfeed.querySelector("[name=email]");
// const storage = localStorage.getItem(fullNameUser);

let isStorageSupport = true;
let storage = "";

linkfeed.addEventListener("click", function  (evt) {
  evt.preventDefault();
  popupfeed.classList.add("modal-show");
  fullNameUser.focus();
  if (storage) {
    fullNameUser.value = storage;
  }
});

form.addEventListener("submit", function (evt){
  if (!fullNameUser.value || !email.value){
  evt.preventDefault();
  console.log("Select name and email");
  } else {
    if (isStorageSupport)
    localStorage.setItem("fullNameUser", fullNameUser.value);
  }
});

try{
  storage = localStorage.getItem("fullNameUser");
} catch (err) {
  isStorageSupport = false;
}

closed.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeed.classList.remove("modal-show");
});


