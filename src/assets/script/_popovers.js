import { ifClickInside } from "./_helpers"

export default function () {
  document.querySelectorAll("[data-popover]").forEach(popover => {
    const togglers = document.querySelectorAll(`[data-popovertarget="${popover.id}"]`)

    togglers.forEach(toggler => {
      toggler.addEventListener("click", () => {
        popover.classList.toggle("is-active")
        togglers.forEach(toggler => {
          toggler.classList.toggle("is-active")
        })
      })
    })

    document.addEventListener("click", event => {
      if (!ifClickInside(event, popover, ...togglers)) {
        popover.classList.remove("is-active")
        togglers.forEach(toggler => {
          toggler.classList.remove("is-active")
        })
      }
    })
  })
}