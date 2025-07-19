export default function () {
  document.querySelectorAll("table").forEach(table => {
    const masterCheck = table.querySelector("thead input[type=checkbox]")
    const body = table.querySelector("tbody")

    if (masterCheck) {
      const slaveChecks = body.querySelectorAll("input[type=checkbox]")

      masterCheck.addEventListener("change", () => {
        slaveChecks.forEach(slaveCheck => {
          slaveCheck.checked = masterCheck.checked
        })
      })

      slaveChecks.forEach(slaveCheck => {
        slaveCheck.addEventListener("change", () => {
          masterCheck.checked = !body.matches(":has(input:not(:checked))")
        })
      })
    }
  })
}