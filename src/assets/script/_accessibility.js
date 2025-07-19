export default function () {
  const accessibilityBlock = document.querySelector(".accessibility")
  const toggler = document.querySelector(".theme-swap")

  if (toggler && accessibilityBlock) {
    const initState = localStorage.getItem("theme")
    const initStateParsed = JSON.parse(initState) ?? {}

    if (!initState) {
      localStorage.setItem("theme", JSON.stringify({}))
    }

    toggler.addEventListener("click", () => {
      accessibilityBlock.classList.toggle("is-active")
    })

    accessibilityBlock.querySelectorAll(".accessibility__item").forEach(item => {
      const buttons = item.querySelectorAll(".accessibility__item__button")
      const param = item.dataset.param

      function clearThemeAttribute(param) {
        const currentState = JSON.parse(localStorage.getItem("theme"))
        delete currentState[param]
        localStorage.setItem("theme", JSON.stringify(currentState))


        document.documentElement.classList.forEach(className => {
          if (className.includes(param)) {
            document.documentElement.classList.remove(className)
          }
        })
      }

      buttons.forEach(button => {
        const value = button.dataset.value

        if (initStateParsed[param] == value) {
          button.classList.add("is-active")

          if (initStateParsed[param]) {
            document.documentElement.classList.add(`theme--${param}-${value}`)
          }
        }

        button.addEventListener("click", () => {
          if (!button.classList.contains("is-active")) {
            clearThemeAttribute(param)

            if (value) {
              const currentState = JSON.parse(localStorage.getItem("theme"))
              currentState[param] = value
              localStorage.setItem("theme", JSON.stringify(currentState))

              document.documentElement.classList.add(`theme--${param}-${value}`)
            }

            buttons.forEach(sibling => {
              sibling.classList.toggle("is-active", sibling == button)
            })
          }
        })
      })
    })
  }
}