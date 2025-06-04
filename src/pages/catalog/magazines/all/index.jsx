import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Controls from "../../../../components/Controls"
import Filter from "../../../../components/Filter"
import Document from "../../../../components/Document"
import Bookslist from "../../../../components/Bookslist"

export default function index() {
	return (
		<Page aside breadcrumbs search >
			<Filter />
			<Generic title="Полный перечень">
				<Controls showBy showType excel />
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