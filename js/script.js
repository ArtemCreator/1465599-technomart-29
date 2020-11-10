// Модальные окна: карта и фидбек

// Декларирование переменных
const
  linkMap = document.querySelector(".map"),
  linkFeed = document.querySelector(".btn-feed");

const
  popups = document.querySelectorAll(".modal"),
  close = document.querySelectorAll(".modal-close");

// Функции для гибкого использования
const modalOpen = (link, modals, modal) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();

    [].forEach.call(modals, (el) => {
      el.classList.remove("modal-show");
    })

    modal.classList.add("modal-show");
  });
}

const modalHide = (closeBtn, modals) => {
  [].forEach.call(closeBtn, (el) => {
    el.addEventListener("click", (evt) => {
      [].forEach.call(modals, (el) => {
        el.classList.remove("modal-show");
      })
    })
  })
}

// Вызов функций для использования
modalOpen(linkMap, popups, popups[0])
modalOpen(linkFeed, popups, popups[1])

modalHide(close, popups)
