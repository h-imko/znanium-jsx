import Dropzone from "../../../components/Dropzone"
import Filter from "../../../components/Filter"
import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import Input from "../../../components/Input"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Placeholder from "../../../components/Placeholder"
import Table from "../../../components/Table"

export default function index() {
	return (
		<Page breadcrumbs  >
			<Generic title={ "Рекомендательные сервисы" }>
				<Filter togglerText="Создать запрос" form={
					<Form bordered items={
						[
							[
								<Input label={ "Название" } />,
							],
							[
								<Input label={ "Текст" } textarea />,
							],
							[
								<Dropzone />
							]
							,
						]
					} controls={ {
						submit: "Применить",
						reset: "Очистить"
					} } />
				} />
				<h2>Результаты</h2>
				<Placeholder />
				<Table data={ {
					headers: [
						{
							title: "Название",
						},
						{
							title: "Время создания",
							sortable: true,
							sorted: "asc"
						},
						{}
					],
					rows: [
						[
							<a href="#">Какое-то название запроса</a>,
							<time>21.01.05  14:99</time>,
							<button type="button" className="cart__table__button" title="Удалить"><span className="icon icon--delete"></span></button>
						],
					]
				} } />
				<Pagination />
			</Generic >
		</Page>
	)
}