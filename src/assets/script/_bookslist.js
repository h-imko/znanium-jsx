export default function () {
  const selector = "bookslist"

  document.querySelectorAll(`.${selector}`).forEach(list => {
    const controls = document.querySelectorAll(".controls")
    controls.forEach(controlsBlock => {
      controlsBlock.querySelectorAll(`.controls__item[data-for="${selector}"][data-type="view"]`).forEach(item => {
        const buttonDefault = item.querySelector("button:not([data-view-alt])")
        const buttonAlt = item.querySelector(`button[data-view-alt]`)

        list.classList.toggle("is-alt", buttonAlt.classList.contains("is-active"))

        buttonDefault.addEventListener("click", () => {
          buttonDefault.classList.toggle("is-active", true)
          buttonAlt.classList.toggle("is-active", false)
          list.classList.toggle("is-alt", false)
        })

        buttonAlt.addEventListener("click", () => {
          buttonDefault.classList.toggle("is-active", false)
          buttonAlt.classList.toggle("is-active", true)
          list.classList.toggle("is-alt", true)
        })
      })
    })
  })
}