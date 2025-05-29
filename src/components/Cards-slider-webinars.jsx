import CardsSlider from "./Cards-slider"
import WebinarCard from "./Webinar-card"

const cardsData = [
	{
		pattern: 1,
		color: 3,
		title: "Оптимизация комплектоваия библиотеки в течение учебного года",
		isButtonActive: true
	},
	{
		pattern: 2,
		color: 2,
		title: "Оптимизация комплектоваия",
		isButtonActive: false
	},
	{
		pattern: 3,
		color: 1,
		title: "Оптимизация комплектоваия Оптимизация комплектоваия",
		isButtonActive: true
	},
]

export default function () {
	return (
		<CardsSlider title={ "Вебинары" } cards={ [...cardsData, ...cardsData].map(WebinarCard) } />
	)
}