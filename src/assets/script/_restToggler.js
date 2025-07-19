export default function () {
  document.querySelectorAll(".rest-toggler").forEach(toggler => {
    toggler.addEventListener("click", () => {
      toggler.classList.add("is-active")
    })
  })
}