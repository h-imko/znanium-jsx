import Chart from "chart.js/auto"

Chart.defaults.font.family = getComputedStyle(document.documentElement).fontFamily
Chart.defaults.plugins.legend.position = "bottom"
Chart.defaults.maintainAspectRatio = false
Chart.defaults.interaction.intersect = false
Chart.defaults.interaction.mode = "index"

document.querySelectorAll(".chart").forEach(chart => {
	const rawData = chart.dataset.data
	const rawOptions = chart.dataset.options
	const type = chart.dataset.type ?? "bar"
	const data = JSON.parse(decodeURIComponent(atob(rawData)))
	const options = rawOptions ? JSON.parse(decodeURIComponent(atob(rawOptions))) : {}

	new Chart(chart.querySelector("canvas"), {
		type,
		data,
		options
	})
})