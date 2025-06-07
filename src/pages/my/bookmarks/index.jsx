import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Simplebooks from "../../../components/Simplebooks"
import Controls from "../../../components/Controls"

export default function index() {
	return (
		<Page aside breadcrumbs>
			<Generic title="Закладки" >
				<Controls showBy sortType />
				<Simplebooks />
			</Generic>
		</Page>
	)
} 