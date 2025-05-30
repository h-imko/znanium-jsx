import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import AccordionList from "../../../../components/AccordionList"

export default function index() {
	return (
		<Page aside breadcrumbs search >
			<Generic title="Тематический рубрикатор ЭБС Znanium">
				<AccordionList />
			</Generic>
		</Page>
	)
}