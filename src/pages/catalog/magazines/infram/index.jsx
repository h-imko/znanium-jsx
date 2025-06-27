import Bookslist from "../../../../components/Bookslist"
import Document from "../../../../components/Document"
import Generic from "../../../../components/Generic"
import Page from "../../../../components/Page"
import Pagination from "../../../../components/Pagination"

export default function index() {
	return (
		<Page aside breadcrumbs  >
			<Generic title="Журналы ИНФРА-М">
				<Bookslist>
					<Document isMagazine />
					<Document isMagazine />
					<Document isMagazine />
					<Document isMagazine />
					<Document isMagazine />
				</Bookslist>
				<Pagination />
			</Generic>
		</Page>
	)
}