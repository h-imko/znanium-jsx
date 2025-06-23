import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Simplebooks from "../../../components/Simplebooks"

export default function index() {
	return (
		<Page aside breadcrumbs>
			<Generic title="История чтения" >
				<Simplebooks time title />
			</Generic>
		</Page>
	)
} 