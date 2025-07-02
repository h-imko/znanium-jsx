import Alphabetical from "../../../../components/Alphabetical"
import Bookslist from "../../../../components/Bookslist"
import Controls from "../../../../components/Controls"
import Document from "../../../../components/Document"
import Filter from "../../../../components/Filter"
import Generic from "../../../../components/Generic"
import Page from "../../../../components/Page"
import Pagination from "../../../../components/Pagination"

export default function index() {
	return (
		<Page aside breadcrumbs search >
			<Filter applied togglerText="Изменить условия поиска" />
			<Generic title="Алфавитный указатель">
				<Alphabetical />
				<Controls showBy />
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