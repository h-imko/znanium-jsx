import Page from "../../../../../components/Page"
import Generic from "../../../../../components/Generic"
import RichSearchForm from "../../../../../components/RichSearchForm"

export default function index() {
	return (
		<Page aside={ true } breadcrumbs={ true } search={ true } >
			<Generic title="Тематический рубрикатор ЭБС Znanium">
				{
					RichSearchForm()
				}
			</Generic>
		</Page>
	)
}