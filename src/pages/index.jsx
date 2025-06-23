import Advantages from "../components/Advantages"
import Banners from "../components/Banners"
import CardsSlider from "../components/CardsSlider"
import CollectionSpecial from "../components/CollectionSpecial"
import M31 from "../components/M31"
import NewsCard from "../components/News/NewsCard"
import Page from "../components/Page"
import Showcase from "../components/Showcase"
import Singleform from "../components/Singleform"
import Tariffs from "../components/Tariffs"
import WebinarCard from "../components/Webinar/WebinarCard"

const cardsDataNews = [
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

const cardsDataWebinars = [
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

export default function index() {
	return (
		<Page>
			<Singleform />
			<Banners />
			<M31>
				<CollectionSpecial />
			</M31>
			<Showcase />
			<Showcase empty />
			<M31>
				<Advantages />
			</M31>
			<Tariffs />
			<CardsSlider title={ "Новости" } cards={ [...cardsDataNews, ...cardsDataNews].map(NewsCard) } />
			<CardsSlider title={ "Вебинары" } cards={ [...cardsDataWebinars, ...cardsDataWebinars].map(WebinarCard) } />
		</Page>
	)
}