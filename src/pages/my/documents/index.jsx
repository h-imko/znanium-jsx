import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Controls from "../../../components/Controls"
import Filter from "../../../components/Filter"
import Document from "../../../components/Document"
import Bookslist from "../../../components/Bookslist"

export default function index() {
	return (
		<Page aside breadcrumbs search >
			<Filter applied togglerText="Изменить условия поиска" />
			<Generic title="Книги, журналы, статьи в моих подписках" >
				<Controls total excel showBy showType sortBy />
				<Bookslist>
					<Document />
					<Document />
					<Document />
					<Document />
					<Document />
				</Bookslist>
			</Generic>
		</Page>
	)
}