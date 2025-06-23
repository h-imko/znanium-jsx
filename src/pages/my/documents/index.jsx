import Bookslist from "../../../components/Bookslist"
import Controls from "../../../components/Controls"
import Document from "../../../components/Document"
import Filter from "../../../components/Filter"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"

export default function index() {
	return (
		<Page aside breadcrumbs search >
			<Filter applied togglerText="Изменить условия поиска" />
			<Generic title="Книги, журналы, статьи в моих подписках" >
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