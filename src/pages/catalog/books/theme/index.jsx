import AccordionList from "../../../../components/AccordionList"
import Generic from "../../../../components/Generic"
import Page from "../../../../components/Page"

export default function index() {
	return (
		<Page aside breadcrumbs search >
			<Generic title="Тематический рубрикатор ЭБС Znanium">
				<AccordionList />
			</Generic>
		</Page>
	)
}