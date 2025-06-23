import Collections from "../../../components/Collections"
import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"

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