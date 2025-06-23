import Generic from "../../components/Generic"
import NavTiles from "../../components/NavTiles"
import Page from "../../components/Page"

export default function index() {
	return (
		<Page aside breadcrumbs search>
			<Generic title="Коллекции">
				<NavTiles />
			</Generic>
		</Page>
	)
}