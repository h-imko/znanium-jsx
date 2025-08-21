export default function () {
  document.querySelectorAll(".input").forEach(inputBlock => {
    const input = inputBlock.querySelector("input, textarea")
    const typeTogglers = inputBlock.querySelectorAll(`[data-input-button="toggleType"]`)
    const characterCounters = (inputBlock.closest(".form__item") ?? inputBlock).querySelectorAll(".input__count")
    const clearButtons = inputBlock.querySelectorAll(".input__clear")

    typeTogglers.forEach(toggler => {
      const originalType = input.getAttribute("type")

      toggler.addEventListener("click", () => {
        if (input.getAttribute("type") == originalType) {
          toggler.classList.add("is-active")
          input.setAttribute("type", "text")
        } else {
          toggler.classList.remove("is-active")
          input.setAttribute("type", originalType)
        }
      })
    })

    characterCounters.forEach(counter => {
      const current = counter.querySelector(".input__count__current")
      const max = counter.querySelector(".input__count__max")

      function setLenght() {
        current.textContent = input.value.length
      }

      max.textContent = input.getAttribute("maxlength")
      setLenght()

      input.addEventListener("input", setLenght)
      input.addEventListener("change", setLenght)
    })

    clearButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (input.value.length) {
          input.value = ""
          input.dispatchEvent(new Event("change"))
        }
      })
    })
  })
}