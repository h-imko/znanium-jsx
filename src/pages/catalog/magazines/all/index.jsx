import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Controls from "../../../../components/Controls"
import Filter from "../../../../components/Filter"
import Document from "../../../../components/Document"
import Bookslist from "../../../../components/Bookslist"

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
			</Generic>
		</Page>
	)
}