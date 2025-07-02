import List from "../../components/News/List"
import Page from "../../components/Page"
import Pagination from "../../components/Pagination"

export default function index() {
	return (
		<Page search breadcrumbs>
			<List />
			<Pagination />
		</Page>
	)
}