import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import AccordionList from "../../../components/Accordion-list"

export default function index() {
	return (
		<Page aside={ true } breadcrumbs={ true } search={ true }>
			<Generic title="Тематический рубрикатор ЭБС Znanium">
				<AccordionList />
			</Generic>
		</Page>
	)
}