import { LOOP, Splide } from "@splidejs/splide"
import { v7 as uuid } from "uuid"
import counter from "./_counter"
import dialog from "./_dialog"
import dropzone from "./_Dropzone"
import { breakpoints, ifClickInside, makeSplide } from "./_helpers"
import select from "./_select"
import initToasts from "./_toast"

document.addEventListener("DOMContentLoaded", () => {
	const { makeToast } = initToasts()
	const accordions = new Map()

	m31()
	sliders()
	singleform()
	showcase()
	dialog()
	select()
	documents()
	accordion()
	customInput()
	table()
	filter()
	counter()
	charts()
	headerNav()
	popovers()
	shelves()
	bookslist()
	dropzone()
	restToggler()
	accessibility()
	testToasts()
	fpl()

	function testToasts() {
		document.querySelector(".test-toast")?.addEventListener("click", () => {
			setTimeout(() => {
				makeToast({
					title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat facere nesciunt ab officiis itaque qui , <a href="">labore, inventore eos. Illum, impedit.</a>`,
					type: "warning",
				})
				setTimeout(() => {
					makeToast({
						title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur",
						text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?",
						type: "success",
					})
					setTimeout(() => {
						makeToast({
							title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur",
							text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?",
							type: "error"
						})
						setTimeout(() => {
							makeToast({
								title: "Неописуемо важная информация, срочно прочитать",
								text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?"
							})
							setTimeout(() => {
								makeToast({
									title: "Неописуемо важная информация, срочно прочитать",
								})
								setTimeout(() => {
									makeToast({
										text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?"
									})
									setTimeout(() => {
										makeToast({
											type: "error",
											text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?"
										})
									}, 1000)
								}, 1000)
							}, 1000)
						}, 1000)
					}, 1000)
				}, 1000)
			}, 1000)
		})
	}

	function accessibility() {
		const accessibilityBlock = document.querySelector(".accessibility")
		const initState = localStorage.getItem("theme")
		const initStateParsed = JSON.parse(initState) ?? {}

		if (!initState) {
			localStorage.setItem("theme", JSON.stringify({}))
		}

		document.querySelector(".theme-swap").addEventListener("click", () => {
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

	function restToggler() {
		document.querySelectorAll(".rest-toggler").forEach(toggler => {
			toggler.addEventListener("click", () => {
				toggler.classList.add("is-active")
			})
		})
	}

	function sliders() {
		Splide.defaults = {
			arrows: false,
			pagination: false,
			perMove: 1,
			gap: 24,
			omitEnd: true,
			keyboard: "focused",
			breakpoints: {
				[breakpoints.mobile]: {
					gap: 16
				}
			}
		}

		makeSplide(".banners", {
			type: LOOP,
			pagination: true,
			autoWidth: true,
			autoHeight: true,
			autoplay: "pause",
			intersection: {
				inView: {
					autoplay: true,
				},
				outView: {
					autoplay: false,
				},
			},
		})

		makeSplide(".collections-special__slider, .cards-slider__slider", {
			perPage: 3,
			arrows: true,
			breakpoints: {
				[breakpoints.laptop]: {
					perPage: 2,
				},
				[breakpoints.mobile]: {
					perPage: 1,
				}
			}
		})

		makeSplide(".documents-slider", {
			arrows: true,
			autoWidth: true,
			perMove: 2
		})
	}

	function bookslist() {
		const selector = "bookslist"

		document.querySelectorAll(`.${selector}`).forEach(list => {
			const controls = document.querySelectorAll(".controls")
			controls.forEach(controlsBlock => {
				controlsBlock.querySelectorAll(`.controls__item[data-for="${selector}"][data-type="view"]`).forEach(item => {
					const buttonDefault = item.querySelector("button:not([data-view-alt])")
					const buttonAlt = item.querySelector(`button[data-view-alt]`)

					list.classList.toggle("is-alt", buttonAlt.classList.contains("is-active"))

					buttonDefault.addEventListener("click", () => {
						buttonDefault.classList.toggle("is-active", true)
						buttonAlt.classList.toggle("is-active", false)
						list.classList.toggle("is-alt", false)
					})

					buttonAlt.addEventListener("click", () => {
						buttonDefault.classList.toggle("is-active", false)
						buttonAlt.classList.toggle("is-active", true)
						list.classList.toggle("is-alt", true)
					})
				})
			})
		})
	}

	function shelves() {
		const selector = "shelves"

		document.querySelectorAll(`.${selector}`).forEach(shelves => {
			const items = shelves.querySelectorAll(".shelf")
			const controls = document.querySelectorAll(".controls")
			const buttons = [...controls].map(item => [...item.querySelectorAll(`.controls__button--collapse[data-for="${selector}"]`)]).flat()

			function updateButtons() {
				const hasOpened = shelves.matches(":has([data-accordion].is-active)")

				buttons.forEach(button => {
					button.classList.toggle("is-active", hasOpened)
				})
			}

			updateButtons()

			new MutationObserver(updateButtons).observe(shelves, {
				attributes: true,
				attributeFilter: ["class"],
				subtree: true
			})

			buttons.forEach(button => {
				button.addEventListener("click", () => {
					const hasOpened = shelves.matches(":has([data-accordion].is-active)")

					items.forEach(item => {
						accordions.get(item).toggle(!hasOpened)
					})
				})
			})
		})
	}

	function popovers() {
		document.querySelectorAll("[data-popover]").forEach(popover => {
			const togglers = document.querySelectorAll(`[data-popovertarget="${popover.id}"]`)
			togglers.forEach(toggler => {
				toggler.addEventListener("click", () => {
					popover.classList.toggle("is-active")
					togglers.forEach(toggler => {
						toggler.classList.toggle("is-active")
					})
				})
			})
			document.addEventListener("click", event => {
				if (!ifClickInside(event, popover, ...togglers)) {
					popover.classList.remove("is-active")
					togglers.forEach(toggler => {
						toggler.classList.remove("is-active")
					})
				}
			})
		})
	}

	function singleform() {
		document.querySelectorAll(".singleform").forEach(singleform => {
			const input = singleform.querySelector(".singleform__input")
			const suggests = singleform.querySelectorAll(".singleform__suggest")
			const radios = singleform.querySelectorAll(".singleform__suggest__item input")

			radios.forEach(radio => {
				radio.addEventListener("change", () => {
					input.setAttribute("placeholder", radio.dataset.placeholder)
				})
			})

			function showSuggests() {
				suggests.forEach(suggest => {
					suggest.removeAttribute("hidden")
				})
			}

			input.addEventListener("focus", showSuggests, {
				once: true,
				passive: true
			})

			singleform.querySelectorAll(".singleform__suggest__extra").forEach(extra => {
				extra.querySelectorAll(".singleform__suggest__extra__opener").forEach(opener => {
					opener.addEventListener("click", () => {
						extra.classList.add("is-active")
					}, {
						once: true,
						passive: true
					})
				})
			})
		})
	}

	function headerNav() {
		document.querySelectorAll(".header__nav").forEach(nav => {
			nav.querySelector(".header__nav__button")?.addEventListener("click", () => {
				nav.classList.toggle("is-active")
			})
		})
	}

	function filter() {
		document.querySelectorAll(".filter").forEach(filter => {
			const toggler = filter.querySelector(".filter__toggler")


			toggler?.addEventListener("click", () => {
				filter.classList.toggle("is-active")
			})

		})
	}

	function table() {
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

	function customInput() {
		document.querySelectorAll(".input").forEach(inputBlock => {
			const input = inputBlock.querySelector("input, textarea")
			const typeTogglers = inputBlock.querySelectorAll(`[data-input-button="toggleType"]`)
			const characterCounters = inputBlock.querySelectorAll(".input__count")
			const clearButtons = inputBlock.querySelectorAll(".input__clear")

			typeTogglers.forEach(toggler => {
				const originalType = input.getAttribute("type")

				toggler.addEventListener("click", () => {
					if (input.getAttribute("type") == originalType) {
						toggler.classList.add("is-active")
						input.setAttribute("type", "text")
					} else {
						toggler.classList.remove("is-active")
						input.setAttribute("type", originalType)
					}
				})
			})

			characterCounters.forEach(counter => {
				const current = counter.querySelector(".input__count__current")
				const max = counter.querySelector(".input__count__max")

				function setLenght() {
					current.textContent = input.value.length
				}

				max.textContent = input.getAttribute("maxlength")
				setLenght()

				input.addEventListener("input", setLenght)
				input.addEventListener("change", setLenght)
			})

			clearButtons.forEach(button => {
				button.addEventListener("click", () => {
					if (input.value.length) {
						input.value = ""
						input.dispatchEvent(new Event("change"))
					}
				})
			})
		})
	}

	function charts() {
		if (document.querySelectorAll(".chart")) {
			import("./_chart")
		}
	}

	function accordion() {
		document.querySelectorAll("[data-accordion]").forEach((accordion, index) => {
			const wrapper = accordion.querySelector("[data-accordion-wrapper]")
			const toggler = accordion.querySelector("[data-accordion-toggler]")
			const content = accordion.querySelector("[data-accordion-content]")

			if (content) {
				content.id = content.getAttribute("id") ?? uuid()
				toggler.ariaExpanded = false
				toggler.setAttribute("aria-controls", content.id)
			}

			function toggle(force) {
				wrapper?.classList.toggle("is-active", force)
				toggler?.classList.toggle("is-active", force)
				content?.classList.toggle("is-active", force)
				toggler.ariaExpanded = accordion.classList.toggle("is-active", force)
			}

			function expand() {
				toggle(true)
			}

			function collapse() {
				toggle(false)
			}

			toggler?.addEventListener("click", () => {
				toggle()
			})

			accordions.set(accordion, { expand, collapse, toggle })
		})

		document.querySelectorAll("[data-accordion-group]").forEach(group => {
			const slaves = group.querySelectorAll("[data-accordion]")
			const toggler = group.querySelector("[data-accordion-collapse]")

			toggler?.addEventListener("click", () => {
				const hasOpened = group.matches(":has([data-accordion].is-active)")

				slaves.forEach(slave => {
					accordions.get(slave).toggle(!hasOpened)
				})
			})
		})
	}

	function documents() {
		document.querySelectorAll(".document").forEach(doc => {
			doc.querySelectorAll(".document__tabs").forEach(tabs => {
				const navs = tabs.querySelectorAll(".document__tabs__tab")
				const contents = tabs.querySelectorAll(".document__tabs__content")

				navs.forEach((nav, index) => {
					nav.addEventListener("click", () => {
						navs.forEach((checkNav, jndex) => {
							checkNav.classList.toggle("is-active", nav == checkNav)
							contents.item(jndex)?.classList.toggle("is-active", nav == checkNav)
						})
					})
				})
			})

			doc.querySelectorAll(".document__biblio-card").forEach(card => {
				const button = card.querySelector(".document__biblio-card__button")
				const text = card.querySelector(".document__biblio-card__text")

				function showError() {
					window.getSelection().selectAllChildren(text)
					makeToast({
						title: "Скопируйте выделенный текст",
						text: "Произошла непредвиденная ошибка, скопируйте текст вручную",
						type: "error",
					})
				}

				button.addEventListener("click", () => {
					if (navigator.clipboard) {
						try {
							navigator.clipboard.writeText(text.textContent).then(() => {
								makeToast({
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

			doc.querySelectorAll(".document__info__item__rest-toggler").forEach(toggler => {
				toggler.addEventListener("click", () => {
					toggler.classList.add("is-active")
				})
			})
		})
	}

	function m31() {
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

	function showcase() {
		document.querySelectorAll(".showcase").forEach(showcase => {
			const tabs = showcase.querySelectorAll(".showcase__tab")
			/** 
			* @type {[{item: HTMLElement, itemMain: HTMLElement, itemExtra: HTMLElement, tab: HTMLElement, tabExtra: HTMLElement }]}
			*/
			const items = []

			showcase.querySelectorAll(".showcase__item").forEach((item, index) => {
				items.push({
					item,
					itemMain: item.querySelector(".showcase__item__main"),
					itemExtra: item.querySelector(".showcase__item__extra"),
					tab: tabs.item(index),
					tabMain: tabs.item(index)?.querySelector(".showcase__tab__main"),
					tabExtra: tabs.item(index)?.querySelector(".showcase__tab__extra"),
				})
			})

			items.forEach(item => {
				item.tab?.addEventListener("focusin", () => {
					// TODO
					item.tab.scrollIntoViewIfNeeded()
				})

				item.tab?.addEventListener("click", event => {
					const switchMainExtra = item.itemMain.classList.contains("is-active")

					items.forEach(itemTest => {
						itemTest.item.classList.toggle("is-active", item == itemTest)
						itemTest.tab.classList.toggle("is-active", item == itemTest)
						itemTest.itemMain.classList.toggle("is-active", false)
						itemTest.tabMain.toggleAttribute("disabled", false)
						itemTest.itemExtra?.classList.toggle("is-active", false)
						itemTest.tabExtra?.classList.toggle("is-active", false)
					})

					if (ifClickInside(event, item.tabExtra)) {
						item.itemExtra?.classList.toggle("is-active", switchMainExtra)
						item.tabExtra?.classList.toggle("is-active", switchMainExtra)
						item.itemMain.classList.toggle("is-active", !switchMainExtra)
						item.tabMain.toggleAttribute("disabled", !switchMainExtra)
					} else {
						item.itemExtra?.classList.toggle("is-active", false)
						item.tabExtra?.classList.toggle("is-active", false)
						item.itemMain.classList.toggle("is-active", true)
						item.tabMain.toggleAttribute("disabled", true)
					}
				})
			})
		})
	}

	function fpl() {
		document.querySelectorAll(".fpl__item__link").forEach(item => {
			const link = item.querySelector(".fpl__item__link__field input")

			function showError() {
				link.selectionStart = 0
				link.selectionEnd = link.value.length
				link.focus()
				makeToast({
					title: "Скопируйте выделенный текст",
					text: "Произошла непредвиденная ошибка, скопируйте текст вручную",
					type: "error",
				})
			}

			item.querySelector(".fpl__item__link__field button").addEventListener("click", () => {
				if (navigator.clipboard) {
					try {
						navigator.clipboard.writeText(link.value).then(() => {
							makeToast({
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
})