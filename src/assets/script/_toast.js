export default function initToasts() {
	const toastPanel = document.querySelector(".toasts")
	const template = toastPanel.querySelector("#toast-template")
	const toastList = toastPanel.querySelector(".toasts__list")

	class Toast extends EventTarget {
		constructor({ title, text, timeout, type } = {
			title: "",
			text: "",
			timeout: null,
			type: null
		}) {
			super()

			this.element = template.content.firstElementChild.cloneNode(true)

			if (title) {
				const titleElement = this.element.querySelector(`[data-data="title"]`)
				titleElement.innerHTML = title
			}

			if (text) {
				const textElement = this.element.querySelector(`[data-data="text"]`)
				textElement.innerHTML = text
			}

			if (timeout) {
				setTimeout(() => {
					this.kill()
				}, timeout)
			}

			if (type) {
				this.element.classList.add(`toasts__item--${type}`)
			}

			this.element.querySelector(".toasts__item__closer").addEventListener("click", () => {
				this.kill()
			})
		}

		kill() {
			return new Promise((resolve, reject) => {
				this.element.animate({
					height: [`${this.element.clientHeight}px`, "0px"]
				}, {
					duration: 400,
					iterations: 1,
					easing: "ease",
					fill: "both",
				}).addEventListener("finish", () => {
					this.dispatchEvent(new CustomEvent("killed"))
					this.element.remove()
					delete this
					resolve()
				})
			})
		}
	}

	return {
		makeToast({ title, text, timeout, type } = {}) {
			return new Promise(resolve => {
				const toast = new Toast({ title, text, timeout, type })

				toastList.append(toast.element)
				toastList.classList.add("is-active")
				toast.element.animate({
					height: ["0px"]
				}, {
					duration: 0,
					iterations: 1,
					fill: "both"
				}).addEventListener("finish", () => {
					toast.element.animate({
						height: ["0px", `${toast.element.scrollHeight}px`]
					}, {
						duration: 400,
						iterations: 1,
						easing: "ease",
						fill: "both"
					}).addEventListener("finish", () => {
						toast.element.scrollIntoView()
						toastList.classList.remove("is-active")
						resolve(toast)
					})
				})
			})
		}
	}
}