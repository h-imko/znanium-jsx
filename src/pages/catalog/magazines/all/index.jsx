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
			<Generic title="Полный перечень">
				<Controls excel showBy items={ [
					{
						switchItem: {
							button1: {
								icon: "view_grid",
							},
							button2: {
								icon: "view_list",
							},
							text: "Отображение"
						}
					}
				] } />
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