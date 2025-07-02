import Collections from "../../../components/Collections"
import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"

export default function index() {
	return (
		<Page aside search>
			<Generic title="Коллекции партнёров (891)">
				<Controls total showBy />
				<Collections />
				<Pagination />
			</Generic>
		</Page >
	)
}