import CollectionSpecial from "../components/CollectionSpecial"
import Page from "../components/Page"
import M31 from "../components/M31"
import Banners from "../components/Banners"
import Singleform from "../components/Singleform"
import Showcase from "../components/Showcase"
import Advantages from "../components/Advantages"
import Tariffs from "../components/Tariffs"
import CardsSliderNews from "../components/Cards-slider-news"
import CardsSliderWebinars from "../components/Cards-slider-webinars"

export default function index() {
	return (
		<Page>
			<Singleform />
			<Banners />
			<M31>
				<CollectionSpecial />
			</M31>
			<Showcase />
			<Showcase empty={ true } />
			<M31>
				<Advantages />
			</M31>
			<Tariffs />
			<CardsSliderNews />
			<CardsSliderWebinars />
		</Page>
	)
}