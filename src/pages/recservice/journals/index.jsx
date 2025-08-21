import Dropzone from "../../../components/Dropzone"
import Filter from "../../../components/Filter"
import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import IconButtons from "../../../components/IconButtons"
import Input from "../../../components/Input"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Placeholder from "../../../components/Placeholder"
import Table from "../../../components/Table"

export default function index() {
	return (
		<Page breadcrumbs  >
			<Generic title={ "Рекомендательные сервисы" }>
				<div className="form__item">

					<div class="input">
						<label for="1745250532410" class="input__label"> Содержание дисциплины из РПД </label>
						<textarea type="text" id="1745250532410" placeholder="Вставьте текст с описанием дисциплины из РПД" required="" maxlength="32000"></textarea>
						<div class="input__caption">
							<div class="input__count"> <span class="input__count__current">0</span> / <span class="input__count__max">32000</span> </div>
							<button type="button" class="input__clear">Очистить поле</button>
						</div>
					</div>
				</div>
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
							<IconButtons items={ [
								{
									icon: "eye",
									isButton: true,
									title: "Открыть"
								},
								{
									icon: "delete",
									isButton: true,
									title: "Удалить"
								},
							] } />
						],
					]
				} } />
				<Pagination />
			</Generic >
		</Page>
	)
}