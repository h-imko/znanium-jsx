import toast from "./_toast"

export default function () {
  document.querySelectorAll(".fpl__item__link").forEach(item => {
    const link = item.querySelector(".fpl__item__link__field input")

    function showError() {
      link.selectionStart = 0
      link.selectionEnd = link.value.length
      link.focus()
      toast({
        title: "Скопируйте выделенный текст",
        text: "Произошла непредвиденная ошибка, скопируйте текст вручную",
        type: "error",
      })
    }

    item.querySelector(".fpl__item__link__field button").addEventListener("click", () => {
      if (navigator.clipboard) {
        try {
          navigator.clipboard.writeText(link.value).then(() => {
            toast({
              title: "Успешно скопировано",
              type: "success",
              timeout: 3000,
            })
          })
        } catch (error) {
          console.error(error)
          showError()
        }
      } else {
        showError()
      }
    })
  })
}