import Page from "../../../components/Page"
import Novelty from "../../../components/Novelty"
import Generic from "../../../components/Generic"
import Help from "../../../components/Help"

export default function index() {
	return (
		<Page aside breadcrumbs search>
			<Generic title="Новинки и новые поступления" p={ <Help /> }>
				<Novelty />
			</Generic>
		</Page>
	)
}