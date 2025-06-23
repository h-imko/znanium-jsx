import Document from "../../../../components/Document"
import Page from "../../../../components/Page"

export default function index() {
	return (
		<Page breadcrumbs aside>
			<Document isDetail isMagazine />
		</Page>
	)
}