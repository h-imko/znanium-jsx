import Cart from "../../../components/Cart"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
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
								title: " Журнал ",
								sortable: true,
								sorted: "asc"
							},
							{
								title: "Цена"
							},
							{}
						],
						rows: [
							[
								1,
								<a href="">Аудитор, 2021</a>,
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							],
							[
								1,
								<a href="">Аудитор, 2021</a>,
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							],
							[
								1,
								<a href="">Аудитор, 2021</a>,
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							],
						]
					} } />
				</Cart>
			</Generic>
		</Page>
	)
}