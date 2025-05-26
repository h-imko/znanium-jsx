import { ifClickInside, throttle } from "./_helpers"

export default function select() {
	document.querySelectorAll(".custom-select:not(.is-initialized)").forEach(async custom => {
		const select = custom.querySelector("select")
		const customDrop = custom.querySelector(".custom-select__drop")
		const customList = custom.querySelector(".custom-select__list")
		const customLabel = custom.querySelector(".custom-select__field")
		const customInput = custom.querySelector(".custom-select__input")
		const originalOptions = [...custom.querySelectorAll(".custom-select__option")]
		let dataSource = custom.dataset.source
		const isStatic = !Boolean(dataSource)
		const isMultiple = select.multiple
		const relatedList = document.querySelector(`#${custom.dataset.list}`)
		const optionsSelected = new Map()
		const options = isStatic ? getDOMOptions() : await fetchOptions()
		const optionsNodes = new Map()
		window.biba = optionsNodes

		function getDOMOptions() {
			return originalOptions.map(option => {
				return {
					text: option.textContent,
					id: option.dataset.id
				}
			})
		}

		/**
		 * @returns {Promise<Array<{text: string, id: string}>>}
		 */
		async function fetchOptions() {
			const value = await fetch(dataSource)
			const json = await value.json()
			return json
		}

		const throttleFetchAndRender = throttle(async () => {
			renderOptionsList(await fetchOptions())
		}, 500)

		function filterOptions() {
			return options.filter(option => {
				return option.text.toLowerCase().includes(customInput.value.toLowerCase())
			})
		}

		function toggle(force) {
			customDrop.classList.toggle("is-active", force)
			customLabel?.classList.toggle("is-active", force)
			custom.classList.toggle("is-active", force)
		}

		function renderSelectedOptions() {
			const chosens = [...optionsSelected.entries()].map(([id, text]) => {
				const chosen = document.createElement("div")
				const chosenRemove = document.createElement("button")
				chosenRemove.type = "button"

				chosen.classList.add("custom-select__chosen")
				chosenRemove.classList.add("custom-select__chosen__remove")
				chosen.textContent = text

				chosenRemove.addEventListener("click", () => {
					optionsSelected.delete(id)
					const relatedCheck = relatedList?.querySelector(`[value="${id}"]`)
					if (relatedCheck) {
						relatedCheck.checked = false
					}
					renderSelectedOptions()
					renderOptionsList()
				})

				if (isMultiple) {
					chosen.append(chosenRemove)
				}

				return chosen
			})

			customList.replaceChildren(...chosens)
		}

		function renderOptionsList(renderlist = filterOptions()) {
			optionsNodes.clear()

			renderlist.forEach(optionData => {
				const customOption = document.createElement("button")
				customOption.type = "button"
				customOption.classList.add("custom-select__option")

				customOption.classList.toggle("is-active", optionsSelected.has(optionData.id))
				customOption.textContent = optionData.text
				customOption.dataset.id = optionData.id

				customOption.addEventListener("click", () => {
					if (isMultiple) {
						if (customOption.classList.toggle("is-active")) {
							optionsSelected.set(optionData.id, optionData.text)
							const relatedCheck = relatedList?.querySelector(`[value="${optionData.id}"]`)
							if (relatedCheck) {
								relatedCheck.checked = true
							}
						} else {
							optionsSelected.delete(optionData.id)
							const relatedCheck = relatedList?.querySelector(`[value="${optionData.id}"]`)
							if (relatedCheck) {
								relatedCheck.checked = false
							}
						}
					} else {
						optionsNodes.forEach(cOption => {
							cOption.classList.remove("is-active")
						})
						customOption.classList.add("is-active")
						optionsSelected.clear()
						optionsSelected.set(optionData.id, optionData.text)
						toggle(false)
					}
					renderSelectedOptions()
				})

				optionsNodes.set(optionData.id, customOption)
			})

			customDrop.replaceChildren(...optionsNodes.values())
		}

		if (isStatic) {
			renderOptionsList()
		} else {
			throttleFetchAndRender()
		}

		custom.classList.toggle("is-multiple", isMultiple)
		select.tabIndex = -1

		relatedList?.addEventListener("change", event => {
			console.log(event)

			const checkbox = event.target
			const id = event.target.value
			const text = event.target.parentElement.textContent.trim()

			if (checkbox.checked) {
				optionsSelected.set(id, text)
			} else {
				optionsSelected.delete(id)
			}

			renderSelectedOptions()
			renderOptionsList()
		})

		customInput.addEventListener("click", (event) => {
			event.stopPropagation()
			toggle(true)
		})

		customInput.addEventListener("focus", () => {
			toggle(true)
		})

		custom.addEventListener("focusout", () => {
			toggle(custom.matches(":focus-within"))
		})

		customInput.addEventListener("input", () => {
			if (isStatic) {
				renderOptionsList(filterOptions())
			} else {
				if (customInput.value.length > 2) {
					dataSource = "/assets/static/4.json"
					throttleFetchAndRender()
				} else {
					dataSource = "/assets/static/3.json"
					throttleFetchAndRender()
				}
			}
		})

		customLabel?.addEventListener("click", () => {
			toggle()
		})

		if (!isMultiple) {
			custom.addEventListener("click", event => {
				if (!ifClickInside(event, customDrop)) {
					toggle(true)
				}
			})
		}

		document.addEventListener("click", (event) => {
			if (!ifClickInside(event, custom, customDrop, customLabel, customList)) {
				toggle(false)
			}
		})

		custom.classList.add("is-initialized")
	})
}