import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Shelves from "../../../components/Shelves"

export default function index() {
	return (
		<Page aside breadcrumbs>
			<Generic title="Книги, журналы, статьи в моих подписках" >
				<Controls excel showBy expand items={ [
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
						switchItem: {
							button1: {
								icon: "tune",
							},
							button2: {
								icon: "match_case",
							},
							text: "Сортировка"
						}
					}
				] } />
				<Shelves />
				<Pagination />
			</Generic>
		</Page>
	)
} 