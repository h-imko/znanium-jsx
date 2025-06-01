import Page from "../../../../../components/Page"
import Generic from "../../../../../components/Generic"
import Controls from "../../../../../components/Controls"
import Filter from "../../../../../components/Filter"
import Document from "../../../../../components/Document"
import Bookslist from "../../../../../components/Bookslist"

export default function index() {
	return (
		<Page aside breadcrumbs search >
			<Filter />
			<Generic
				title="Журналы ИНФРА-М"
				p={ <button type="button" className="hover-type-2" title="Добавить в мои предпочтения"><span className="icon icon--add_box"></span></button> }>
				<Controls price excel showBy showType sortBy />
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