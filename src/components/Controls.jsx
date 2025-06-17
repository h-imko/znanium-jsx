import clsx from "clsx"
import Help from "./Help"
import ExportList from "./ExportList"
import SelectSimple from "./SelectSimple"
import { v4 as uuid } from "uuid"

function Item({ children, popover }) {
	const popoverId = uuid()

	function Popover() {
		return (
			<>
				<Button popovertarget={ popoverId }>
					<span className="icon icon--download"></span>
					<span>Экспорт в Excel</span>
				</Button>
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

function Button({ isActive, children, title, popovertarget, isCollapse }) {
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
			{ children }
		</button>
	)
}

export default function ({ total, price, excel, showBy, showType, sortBy, createShelf, expand, sortType, addReader }) {
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
					<Button><span className="icon icon--view_grid"></span>создать полку</Button>
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
			{ excel && (
				<Item popover />
			) }
			{ showBy && (
				<Item>
					<span>Показывать по</span>
					<SelectSimple />
					<span>Показано <em>1-10</em> из <em> 10 </em> </span>
				</Item>
			) }
			{ addReader && (
				<Item>
					<Button><span className="icon icon--add_box"></span>добавить читателя</Button>
				</Item>
			) }
			{ showType && (
				<Item>
					<span>Отображение</span>
					<Button><span className="icon icon--view_grid"></span></Button>
					<Button><span className="icon icon--view_list"></span></Button>
				</Item>
			) }
			{ sortType && (
				<Item>
					<span>Сортировка</span>
					<Button><span className="icon icon--tune"></span></Button>
					<Button><span className="icon icon--match_case"></span></Button>
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
		</div>
	)
}