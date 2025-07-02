import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Simplebooks from "../../../components/Simplebooks"

export default function index() {
	return (
		<Page aside breadcrumbs>
			<Generic title="Закладки" >
				<Controls showBy items={ [
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
				<Simplebooks />
				<Pagination />
			</Generic>
		</Page>
	)
} 