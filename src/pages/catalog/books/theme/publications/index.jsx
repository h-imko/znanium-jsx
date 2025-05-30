import Page from "../../../../../components/Page"
import Generic from "../../../../../components/Generic"
import Filter from "../../../../../components/Filter"

export default function index() {
	return (
		<Page aside={ true } breadcrumbs={ true } search={ true } >
			<Generic title="Тематический рубрикатор ЭБС Znanium">
				<Filter />
			</Generic>
		</Page>
	)
}