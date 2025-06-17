import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Cart from "../../../components/Cart"
import Table from "../../../components/Table"
import Counter from "../../../components/Counter"

export default function index() {
	return (
		<Page breadcrumbs >
			<Generic title="Корзина">
				<Cart>
					<Table data={ {
						headers: [
							{
								title: "Артикул",
								sortable: true,
							},
							{
								title: "Печатное издание",
								sortable: true,
								sorted: "asc"
							},
							{
								title: "Цена экз.",
								sortable: true,
							},
							{
								title: "Кол-во"
							},
							{
								title: "Сумма"
							},
							{}
						],
						rows: [
							[
								<a href="">781591.05.01</a>,
								<a href="">Современный русский язык: Лексикология. Фразеология : учебное пособие / А.Ф. Пантелеев, В.В. Богуславская, Н.А. Белик. — Москва : РИОР : ИНФРА-М, 2025. — 318 с. — (Высшее образование). — DOI: https://doi.org/10.29039/01912-2</a>,
								<>1&nbsp;590&nbsp;₽</>,
								<Counter />,
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							],
							[
								<a href="">781591.05.01</a>,
								<a href="">Современный русский язык: Лексикология. Фразеология : учебное пособие / А.Ф. Пантелеев, В.В. Богуславская, Н.А. Белик. — Москва : РИОР : ИНФРА-М, 2025. — 318 с. — (Высшее образование). — DOI: https://doi.org/10.29039/01912-2</a>,
								<>1&nbsp;590&nbsp;₽</>,
								<Counter />,
								<>2&nbsp;544&nbsp;520&nbsp;₽</>,
								<button type="button" className="cart__table__button" title="Удалить товар"><span className="icon icon--delete"></span></button>
							],
							[
								<a href="">781591.05.01</a>,
								<a href="">Современный русский язык: Лексикология. Фразеология : учебное пособие / А.Ф. Пантелеев, В.В. Богуславская, Н.А. Белик. — Москва : РИОР : ИНФРА-М, 2025. — 318 с. — (Высшее образование). — DOI: https://doi.org/10.29039/01912-2</a>,
								<>1&nbsp;590&nbsp;₽</>,
								<Counter />,
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