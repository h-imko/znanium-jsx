import Collections from "../../../components/Collections"
import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Controls from "../../../components/Controls"

export default function index() {
	return (
		<Page aside search>
			<Generic title="Коллекции партнёров (891)">
				<Controls total showBy />
				<Collections />
			</Generic>
		</Page >
	)
}