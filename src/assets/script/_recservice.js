export default function () {
  document.querySelectorAll(".recservice1").forEach(block => {
    const tabs = block.querySelectorAll(".recservice1__tab")
    const contents = block.querySelectorAll(".recservice1__content")

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach((tabCompared, jndex) => {
          const isCurrent = tab == tabCompared

          tabCompared.classList.toggle("is-active", isCurrent)
          contents[jndex].classList.toggle("is-active", isCurrent)
        })
      })
    })
  })
}