import Controls from "../../../../../../components/Controls"
import Generic from "../../../../../../components/Generic"
import Page from "../../../../../../components/Page"
import Table from "../../../../../../components/Table"

export default function index() {
	return (
		<Page breadcrumbs  >
			<Generic title={ "Название журнала" } p={ "От  21.04.99  23:49" }>
				<a href="#" className="button-text">
					<span className="icon icon--arrow_backward"></span>
					Назад к результатам
				</a>
				<h2>Статьи</h2>
				<Controls excel />
				<Table bordered data={ {
					headers: [
						{
							title: "Название",
						},
						{
							title: "Релевантность",
							sortable: true,
							sorted: "desc"
						}
					],
					rows: [
						[
							<a href="#">Какое-то название статьи</a>,
							"123"
						],
						[
							<a href="#">Какое-то название статьи</a>,
							"123"
						],
						[
							<a href="#">Какое-то название статьи</a>,
							"123"
						],
						[
							<a href="#">Какое-то название статьи</a>,
							"123"
						],
						[
							<a href="#">Какое-то название статьи</a>,
							"123"
						],
					]
				} } />
			</Generic >
		</Page>
	)
}