import Generic from "../../../components/Generic"
import Help from "../../../components/Help"
import Novelty from "../../../components/Novelty"
import Page from "../../../components/Page"

export default function index() {
	return (
		<Page aside breadcrumbs search>
			<Generic title="Новинки и новые поступления" p={ <Help /> }>
				<Novelty />
			</Generic>
		</Page>
	)
}