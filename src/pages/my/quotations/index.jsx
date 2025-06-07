import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Quotes from "../../../components/Quotes"

export default function index() {
	return (
		<Page aside breadcrumbs>
			<Generic title="Цитатник">
				<Quotes />
			</Generic>
		</Page>
	)
} 