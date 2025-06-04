import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Document from "../../../../components/Document"
import Bookslist from "../../../../components/Bookslist"

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
			</Generic>
		</Page>
	)
}