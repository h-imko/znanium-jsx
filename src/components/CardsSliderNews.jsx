import CardsSlider from "./CardsSlider"
import NewsCard from "./NewsCard"

const cardsData = [
	{
		img: 10,
		title: "Подписано соглашение о сотрудничестве между факультетом права НИУ ВШЭ и издательским холдингом ИНФРА-М"
	},
	{
		img: 11,
		title: "Новость покороче"
	},
	{
		img: 18,
		title: "Тоже короткая новость"
	},
]

export default function () {
	return (
		<CardsSlider title={ "Новости" } cards={ [...cardsData, ...cardsData].map(NewsCard) } />
	)
}