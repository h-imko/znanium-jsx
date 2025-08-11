export default function () {
	document.querySelectorAll(".dropzone:not(.is-initialized)").forEach(dropzone => {
		dropzone.classList.add("is-initialized")
		const input = dropzone.querySelector(".dropzone__input")
		const list = dropzone.querySelector(".dropzone__list")
		const files = new Set()
		const accept = input.accept
		const maxlength = input.dataset.maxlength ?? 1
		const maxsize = input.dataset.maxsize

		/**
		 * 
		 * @param {File} file 
		 */
		function makeThumb(file) {
			const thumb = document.createElement("div")
			thumb.classList.add("dropzone__item")
			thumb.setAttribute("title", file.name)

			const remover = document.createElement("button")
			remover.classList.add("dropzone__item__remove")
			remover.type = "button"
			remover.addEventListener("click", (event) => {
				event.preventDefault()
				files.delete(file)
				thumb.remove()
				URL.revokeObjectURL(file.img)
				update()
			})

			const preview = document.createElement("a")
			preview.classList.add("dropzone__item__preview")
			preview.setAttribute("target", "_blank")

			const previewImg = document.createElement("img")
			preview.append(previewImg)

			if (file.img) {
				previewImg.setAttribute("src", file.img)
				preview.setAttribute("href", file.img)
			}

			thumb.append(preview, remover)

			return thumb
		}

		function update() {
			const fileBuffer = new DataTransfer()

			files.forEach(file => {
				fileBuffer.items.add(file)
			})

			input.files = fileBuffer.files
			dropzone.classList.toggle("is-full", files.size == maxlength)
		}

		input.addEventListener("change", function () {
			dropzone.classList.remove("is-dragover")

			for (const file of this.files) {
				let extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
				if (accept && !accept.includes(extension)) {
					alert(`Файл такого типа не поддерживается - ${file.name}`);
				} else if (files.size == maxlength) {
					alert(`Превышено максимальное количество файлов, файл ${file.name} не будет загружен`)
				} else if (file.size > maxsize) {
					alert(`Превышен максимальный размер файла - ${file.name}`)
				} else {
					files.add(file)

					if (file.type.includes("image")) {
						file.img = URL.createObjectURL(file)
					}

					list.append(makeThumb(file))
				}
			}

			update()
		})

		input.addEventListener("dragenter", () => {
			dropzone.classList.add("is-dragover")
		})

		input.addEventListener("dragleave", () => {
			dropzone.classList.remove("is-dragover")
		})
	})
}