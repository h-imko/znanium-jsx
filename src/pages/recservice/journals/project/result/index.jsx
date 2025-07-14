import Controls from "../../../../../components/Controls"
import Generic from "../../../../../components/Generic"
import Page from "../../../../../components/Page"
import Table from "../../../../../components/Table"
import Text from "../../../../../components/Text"

export default function index() {
	return (
		<Page breadcrumbs >
			<Generic title={ "Результат запроса № 12536 анализа по журналам" } p={ "От 21.04.99 23:49" }>
				<a href="#" className="button-text">
					<span className="icon icon--arrow_backward"></span>
					Назад к запросу
				</a>
				<Text>
					Найдено: 01.01.1970 <br />
					Файл: capupsta.txt <br />
					Время обработки 123
				</Text>
				<Controls excel items={ [
					{
						select: "Перезапустить поиск для"
					},
				] } />

				<Table bordered data={ {
					headers: [
						{
							title: "Название"
						},
						{
							title: "Суммарная релевантность",
							sortable: true,
							sorted: "desc"
						},
						{
							title: "Кол-во статей",
							sortable: true,
						},
					],
					rows: [
						[
							<a href="#">Какое-то название журнала</a>,
							"122",
							" 36"
						],
						[
							<a href="#">Какое-то название журнала</a>,
							"122",
							" 36"
						],
						[
							<a href="#">Какое-то название журнала</a>,
							"122",
							" 36"
						],
						[
							<a href="#">Какое-то название журнала</a>,
							"122",
							" 36"
						],
						[
							<a href="#">Какое-то название журнала</a>,
							"122",
							" 36"
						],
					]
				} } />
			</Generic >
		</Page>
	)
}