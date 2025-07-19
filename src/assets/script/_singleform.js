export default function () {
  document.querySelectorAll(".singleform").forEach(singleform => {
    const input = singleform.querySelector(".singleform__input")
    const suggests = singleform.querySelectorAll(".singleform__suggest")
    const radios = singleform.querySelectorAll(".singleform__suggest__item input")

    radios.forEach(radio => {
      radio.addEventListener("change", () => {
        input.setAttribute("placeholder", radio.dataset.placeholder)
      })
    })

    function showSuggests() {
      suggests.forEach(suggest => {
        suggest.removeAttribute("hidden")
      })
    }

    input.addEventListener("focus", showSuggests, {
      once: true,
      passive: true
    })

    singleform.querySelectorAll(".singleform__suggest__extra").forEach(extra => {
      extra.querySelectorAll(".singleform__suggest__extra__opener").forEach(opener => {
        opener.addEventListener("click", () => {
          extra.classList.add("is-active")
        }, {
          once: true,
          passive: true
        })
      })
    })
  })
}