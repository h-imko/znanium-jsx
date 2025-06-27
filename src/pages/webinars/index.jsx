import Page from "../../components/Page"
import Pagination from "../../components/Pagination"
import List from "../../components/Webinar/List"

export default function index() {
	return (
		<Page aside breadcrumbs calendar>
			<List />
			<Pagination />
		</Page>
	)
}