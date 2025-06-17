import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Controls from "../../../../components/Controls"
import Filter from "../../../../components/Filter"
import Document from "../../../../components/Document"
import Bookslist from "../../../../components/Bookslist"
import Alphabetical from "../../../../components/Alphabetical"

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
			</Generic>
		</Page>
	)
}