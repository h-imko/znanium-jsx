import Page from "../../../../../components/Page"
import Generic from "../../../../../components/Generic"
import Controls from "../../../../../components/Controls"
import Document from "../../../../../components/Document"
import Bookslist from "../../../../../components/Bookslist"

export default function index() {
	return (
		<Page aside breadcrumbs  >
			<Generic title="ФИЗИКО-МАТЕМАТИЧЕСКИЕ НАУКИ">
				<Controls showBy />
				<Bookslist>
					<Document isMagazine />
					<Document isMagazine />
					<Document isMagazine />
					<Document isMagazine />
					<Document isMagazine />
				</Bookslist>
			</Generic>
		</Page>
	)
}