import { ifClickInside } from "./_helpers"

export default function dialog() {
	document.querySelectorAll("dialog").forEach(dialog => {
		const body = dialog.querySelector(".dialog__body")

		dialog.addEventListener("close", event => {
			// console.log(event)
			// console.log(dialog.returnValue)

		})

		dialog.querySelectorAll("[data-dialog-selfcloser]").forEach(dialogCloser => {
			dialogCloser.addEventListener("click", () => {
				dialog.close()
			})
		})

		dialog.addEventListener("click", (event) => {
			if (!ifClickInside(event, body)) {
				dialog.close()
			}
		})

		document.querySelectorAll(`[data-dialog="${dialog.id}"]`).forEach(opener => {
			opener.addEventListener("click", () => {
				dialog.showModal()
			})
		})
	})
}