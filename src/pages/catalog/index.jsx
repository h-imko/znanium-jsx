import Page from "../../components/Page"
import Generic from "../../components/Generic"
import NavTiles from "../../components/NavTiles"

export default function index() {
	return (
		<Page aside breadcrumbs search>
			<Generic>
				<NavTiles />
			</Generic>
		</Page>
	)
}