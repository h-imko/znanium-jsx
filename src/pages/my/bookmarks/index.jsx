import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Simplebooks from "../../../components/Simplebooks"
import Controls from "../../../components/Controls"

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
			</Generic>
		</Page>
	)
} 