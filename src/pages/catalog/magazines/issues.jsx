import Page from "../../../components/Page"
import Document from "../../../components/Document"

export default function index() {
	return (
		<Page breadcrumbs>
			<Document isDetail isMagazine />
		</Page>
	)
}