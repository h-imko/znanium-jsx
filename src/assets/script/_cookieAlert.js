export default function () {
  const block = document.querySelector(".cookie-alert")

  if (block) {
    block.querySelector(".cookie-alert__accept").addEventListener("click", () => {
      zcore.setcookie("cookie-accepted", "1", { expires: Date.now() + 2592000000 }, "/")
      block.remove()
    })
  }
}