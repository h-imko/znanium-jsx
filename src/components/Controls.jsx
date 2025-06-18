import clsx from "clsx"
import Help from "./Help"
import ExportList from "./ExportList"
import SelectSimple from "./SelectSimple"
import { v4 as uuid } from "uuid"

export function Item({ children, popover }) {
	const popoverId = uuid()

	function Popover() {
		return (
			<>
				<Button popovertarget={ popoverId } icon={ "download" } text={ "Экспорт в Excel" } />
				<div className="controls__item__popover" data-popover="" id={ popoverId }>
					<ExportList />
				</div>
			</>
		)
	}

	return (
		<div className="controls__item">
			{ children }
			{ popover && <Popover /> }
		</div>
	)
}

export function Button({ isActive, children, title, popovertarget, isCollapse, icon, text }) {
	return (
		<button
			type="button"
			className={
				clsx({
					"controls__button": true,
					"controls__button--collapse": isCollapse,
					"is-active": isActive
				})
			}
			title={ title }
			data-popovertarget={ popovertarget }
		>
			{ icon && <span className={ `icon icon--${icon}` }></span> }
			{ text }
		</button>
	)
}

export default function ({ total, price, excel, showBy, showType, sortBy, createShelf, expand, sortType, addReader, children }) {
	return (
		<div className="controls">
			{ total && (
				<Item>
					<span>Наименований — 332, документов — 334 </span>
					<Help />
				</Item>
			) }
			{ createShelf && (
				<Item>
					<Button icon={ "view_grid" } text={ "создать полку" } />
				</Item>
			) }
			{ price && (
				<Item>
					<span>Наименований — 332, документов — 334 </span>
					<Help />
					<span>, на сумму: 130 769 950 ₽ </span>
					<Help />
				</Item>
			) }
			{ showBy && (
				<Item>
					<span>Показывать по</span>
					<SelectSimple />
					<span>Показано <em>1-10</em> из <em> 10 </em> </span>
				</Item>
			) }
			{ excel && (
				<Item popover />
			) }
			{ addReader && (
				<Item>
					<Button icon={ "add_box" } text={ "добавить читателя" } />
				</Item>
			) }
			{ showType && (
				<Item>

					<span>Отображение</span>
					<Button icon={ "view_grid" } />
					<Button icon={ "view_list" } />
				</Item>
			) }
			{ sortType && (
				<Item>
					<span>Сортировка</span>
					<Button icon={ "tune" } />
					<Button icon={ "match_case" } />
				</Item>
			) }
			{ sortBy && (
				<Item>
					<span>Сортировка по</span>
					<SelectSimple />
				</Item>
			) }
			{ expand && (
				<Item>
					<Button isCollapse />
				</Item>
			) }
			{ children }
		</div>
	)
}