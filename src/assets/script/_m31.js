export default function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting)
      entry.target.isVisible = entry.isIntersecting
    })
  })

  setTimeout(() => {
    const m31s = document.querySelectorAll(".m31__bg")
    const scrolled = window.scrollY
    let currentScrollMove

    m31s.forEach(m31 => {
      setTimeout(() => {
        m31.style.setProperty("--offset", m31.offsetTop)
        m31.style.setProperty("--scrolled", scrolled)
        observer.observe(m31)

        setTimeout(() => {
          m31.classList.add("is-initialized")
        })
      })
    })

    window.addEventListener("scroll", () => {
      clearTimeout(currentScrollMove)
      currentScrollMove = setTimeout(() => {
        const scrolled = window.scrollY

        m31s.forEach(m31 => {
          if (m31.isVisible) {
            setTimeout(() => {
              m31.style.setProperty("--scrolled", scrolled)
            })
          }
        })
      })
    })
  })
}