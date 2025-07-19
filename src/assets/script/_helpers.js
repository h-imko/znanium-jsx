import Splide from "@splidejs/splide"
import { Intersection } from '@splidejs/splide-extension-intersection'
// import { Grid } from "@splidejs/splide-extension-grid"
import { childGalleryPropertyName } from "./_gallery"

/**
 * @param {number} num 
 */
export function times(num) {
	return Array(num).fill(null)
}

/**
 *
 * @param {Event} event
 * @param {Array.<Element>} targets
 * @returns
 */
export function ifClickInside(event, ...targets) {
	return targets.some(target => {
		return event.composedPath().includes(target)
	})
}

/**
 *
 * @param {Splide} splide
 * @param {HTMLElement} counter
 */
export function bindSplideCounter(splide, counter) {
	splide.on("mounted", () => {
		counter.style.setProperty("--splide-page-current", splide.index + 1)
		counter.style.setProperty("--splide-page-total", splide.Components.Slides.getLength())
	})

	splide.on("moved", (newPos) => {
		counter.style.setProperty("--splide-page-current", newPos + 1)
	})
}

export function setVh() {
	document.documentElement.style.setProperty("--vh", `${visualViewport.height / 100}px`)

	visualViewport.addEventListener("resize", () => {
		document.documentElement.style.setProperty("--vh", `${visualViewport.height / 100}px`)
	})
}

/**
 *
 * @param {Splide} splide
 * @param {HTMLElement[]} arrows
 */
export function bindSplideArrows(splide, arrows) {
	arrows.forEach(arrows => {
		const arrow_prev = arrows.querySelector(".splide__arrow--prev")
		const arrow_next = arrows.querySelector(".splide__arrow--next")

		function setArrowsState(current_index = 0) {
			arrow_prev.toggleAttribute("disabled", current_index == 0)
			arrow_next.toggleAttribute("disabled", current_index == splide.Components.Controller.getEnd())
		}

		arrow_prev.addEventListener("click", () => {
			splide.go("<")
		})

		arrow_next.addEventListener("click", () => {
			splide.go(">")
		})

		splide.on("overflow", isOverflow => {
			arrows.classList.toggle("is-disabled", !isOverflow)
		})

		splide.on("moved", setArrowsState)
		splide.on("mounted", setArrowsState)
	})

	return splide
}

/**
 * @param {import("@splidejs/splide").Options} options 
 * @param {string} selector 
 */
export function makeSplide(selector, options = {}) {
	document.querySelectorAll(selector).forEach(container => {
		const slider = container.querySelector(".splide")
		const arrows = container.querySelectorAll(".splide__arrows")
		const counter = container.querySelector(".splide__counter")
		const splide = new Splide(slider, options)
		const childGallery = slider[childGalleryPropertyName]

		disableSplideDragOverflow(splide)

		if (arrows.length && !splide.options.arrows) {
			bindSplideArrows(splide, arrows)
		}

		if (counter) {
			bindSplideCounter(splide, counter)
		}

		if (options.grid) {
			syncSplideGridToStyle(splide, container)
		}

		if (childGallery) {
			splide.sync(childGallery)
		}

		setTimeout(() => {
			splide.mount({ Intersection })
			childGallery?.mount()
		})
	})
}

/**
 * 
 * @param {Splide} splide 
 */
export function disableSplideDragOverflow(splide) {
	splide.on("overflow", isOverflow => {
		splide.options = {
			drag: isOverflow
		}
	})
}

/**
 *
 * @param {Splide} splide
 * @param {HTMLElement} container
 */
export function syncSplideGridToStyle(splide, container) {
	function setStyle() {
		container.style.setProperty("--splide-grid-row-gap", `${splide.options.grid.gap.row}px`)
		container.style.setProperty("--splide-grid-col-gap", `${splide.options.grid.gap.col}px`)
	}
	setStyle()
	splide.on("updated", setStyle)
}

export function headerHeightToCSS() {
	const header = document.body.querySelector("header")

	function setSize() {
		document.documentElement.style.setProperty("--header-height", `${header.getClientRects()[0].height}px`)
	}

	setSize()

	new ResizeObserver(() => {
		setSize()
	}).observe(header)
}

/**
 * @param {Function} func 
 * @param {number} ms 
 */
export function throttle(func, ms) {
	let isThrottled = false,
		savedArgs,
		savedThis

	function wrapper() {

		if (isThrottled) {
			savedArgs = arguments
			savedThis = this
			return false
		}

		const result = func.apply(this, arguments)

		isThrottled = true

		setTimeout(function () {
			isThrottled = false
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs)
				savedArgs = savedThis = null
			}
		}, ms)
	}

	return wrapper
}

/**
 * @param {Function} func 
 * @param {number} delay 
 */
export function debounce(func, delay) {
	let timeout = null

	return (...args) => {
		if (timeout) clearTimeout(timeout)

		timeout = setTimeout(() => {
			func(...args)
			timeout = null
		}, delay)
	}
}

export const breakpoints = {
	mobile: 768,
	tablet: 1024,
	laptop: 1400
}

// const breakpoints = (() => {
// 	const style = getComputedStyle(document.documentElement)
// 	return {
// 		mobile: parseInt(style.getPropertyValue("--mobile")),
// 		tablet: parseInt(style.getPropertyValue("--tablet")),
// 		laptop: parseInt(style.getPropertyValue("--laptop"))
// 	}
// })()
