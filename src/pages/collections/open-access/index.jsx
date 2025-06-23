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
			<Generic title="Основная коллекция ЭБС. Коллекция Open Access">
				<Controls total excel showBy items={ [
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
					},
					{
						select: "Сортировка по"
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