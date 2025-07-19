import { v7 as uuid } from "uuid"
import accordions from "./_accordions"

export default function () {
  document.querySelectorAll("[data-accordion]").forEach(accordion => {
    const wrapper = accordion.querySelector("[data-accordion-wrapper]")
    const toggler = accordion.querySelector("[data-accordion-toggler]")
    const content = accordion.querySelector("[data-accordion-content]")

    if (content) {
      content.id = content.getAttribute("id") ?? uuid()
      toggler.ariaExpanded = false
      toggler.setAttribute("aria-controls", content.id)
    }

    function toggle(force) {
      wrapper?.classList.toggle("is-active", force)
      toggler?.classList.toggle("is-active", force)
      content?.classList.toggle("is-active", force)
      toggler.ariaExpanded = accordion.classList.toggle("is-active", force)
    }

    function expand() {
      toggle(true)
    }

    function collapse() {
      toggle(false)
    }

    toggler?.addEventListener("click", () => {
      toggle()
    })

    accordions.set(accordion, { expand, collapse, toggle })
  })

  document.querySelectorAll("[data-accordion-group]").forEach(group => {
    const slaves = group.querySelectorAll("[data-accordion]")
    const toggler = group.querySelector("[data-accordion-collapse]")

    toggler?.addEventListener("click", () => {
      const hasOpened = group.matches(":has([data-accordion].is-active)")

      slaves.forEach(slave => {
        accordions.get(slave).toggle(!hasOpened)
      })
    })
  })
}