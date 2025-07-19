export default function () {
  document.querySelectorAll(".header__nav").forEach(nav => {
    nav.querySelector(".header__nav__button")?.addEventListener("click", () => {
      nav.classList.toggle("is-active")
    })
  })
}