import Cart from "../../../components/Cart"
import Generic from "../../../components/Generic"
import Input from "../../../components/Input"
import Page from "../../../components/Page"
import SelectSimple from "../../../components/SelectSimple"
import Table from "../../../components/Table"

export default function index() {
	return (
		<Page breadcrumbs >
			<Generic title="Корзина">
				<Cart>
					<Table data={ {
						headers: [
							{},
							{
								title: "Название",
								sortable: true,
								sorted: "asc"
							},
							{
								title: "Издательство"
							},
							{
								title: "Тип"
							},
							{
								title: "Цена"
							},
							{}
						],
						rows: [
							[
								<SelectSimple />,
								<Input placeholder="Поиск по наименованию" />,
								<Input placeholder="Поиск по издательству" />,
								"",
								"",
								<button type="button" className="cart__table__button" title="Сбросить фильтры"><span className="icon icon--filter_alt_off"></span></button>
							],
							[
								1,
								<a href="">Полная коллекция по педагогике</a>,
								"Логос",
								"Книга",
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							],
							[
								1,
								<a href="">Полная коллекция по педагогике</a>,
								"Логос",
								"Книга",
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							],
							[
								1,
								<a href="">Полная коллекция по педагогике</a>,
								"Логос",
								"Книга",
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							]
						]
					} } />
				</Cart>
			</Generic>
		</Page>
	)
}