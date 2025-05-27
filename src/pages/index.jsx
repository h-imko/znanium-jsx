import CollectionSpecial from "../components/CollectionSpecial"
import Page from "../components/Page"
import M31 from "../components/M31"
import Banners from "../components/Banners"
import Singleform from "../components/Singleform"
import Showcase from "../components/Showcase"

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
		</Page>
	)
}