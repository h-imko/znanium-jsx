export default function () {
  document.querySelectorAll(".document").forEach(doc => {
    doc.querySelectorAll(".document__tabs").forEach(tabs => {
      const navs = tabs.querySelectorAll(".document__tabs__tab")
      const contents = tabs.querySelectorAll(".document__tabs__content")

      navs.forEach((nav, index) => {
        nav.addEventListener("click", () => {
          navs.forEach((checkNav, jndex) => {
            checkNav.classList.toggle("is-active", nav == checkNav)
            contents.item(jndex)?.classList.toggle("is-active", nav == checkNav)
          })
        })
      })
    })

    doc.querySelectorAll(".document__biblio-card").forEach(card => {
      const button = card.querySelector(".document__biblio-card__button")
      const text = card.querySelector(".document__biblio-card__text")

      function showError() {
        window.getSelection().selectAllChildren(text)
        makeToast({
          title: "Скопируйте выделенный текст",
          text: "Произошла непредвиденная ошибка, скопируйте текст вручную",
          type: "error",
        })
      }

      button.addEventListener("click", () => {
        if (navigator.clipboard) {
          try {
            navigator.clipboard.writeText(text.textContent).then(() => {
              makeToast({
                title: "Успешно скопировано",
                type: "success",
                timeout: 3000,
              })
            })
          } catch (error) {
            console.error(error)
            showError()
          }
        } else {
          showError()
        }
      })
    })

    doc.querySelectorAll(".document__info__item__rest-toggler").forEach(toggler => {
      toggler.addEventListener("click", () => {
        toggler.classList.add("is-active")
      })
    })
  })
}