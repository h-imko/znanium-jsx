import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Controls from "../../../components/Controls"
import Shelves from "../../../components/Shelves"

export default function index() {
	return (
		<Page aside breadcrumbs>
			<Generic title="Книги, журналы, статьи в моих подписках" >
				<Controls excel showBy showType sortType createShelf expand />
				<Shelves />
			</Generic>
		</Page>
	)
} 