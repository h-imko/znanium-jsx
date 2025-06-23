import Collections from "../../../components/Collections"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"

export default function index() {
	return (
		<Page aside search>
			<Generic title="Основная коллекция и её сегменты">
				<Collections />
			</Generic>
		</Page >
	)
}