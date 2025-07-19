export default function () {
  document.querySelectorAll(".filter").forEach(filter => {
    const toggler = filter.querySelector(".filter__toggler")

    toggler?.addEventListener("click", () => {
      filter.classList.toggle("is-active")
    })
  })
}