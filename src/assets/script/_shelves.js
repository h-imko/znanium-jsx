import accordions from "./_accordions"

export default function () {
  const selector = "shelves"

  document.querySelectorAll(`.${selector}`).forEach(shelves => {
    const items = shelves.querySelectorAll(".shelf")
    const controls = document.querySelectorAll(".controls")
    const buttons = [...controls].map(item => [...item.querySelectorAll(`.controls__button--collapse`)]).flat()

    function updateButtons() {
      const hasOpened = shelves.matches(":has([data-accordion].is-active)")

      buttons.forEach(button => {
        button.classList.toggle("is-active", hasOpened)
      })
    }

    updateButtons()

    new MutationObserver(updateButtons).observe(shelves, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true
    })

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const hasOpened = shelves.matches(":has([data-accordion].is-active)")

        items.forEach(item => {
          accordions.get(item).toggle(!hasOpened)
        })
      })
    })
  })
}