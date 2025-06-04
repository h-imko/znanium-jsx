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
					<span class="icon icon--download"></span>
					<span>Экспорт в Excel</span>
				</Button>
				<div class="controls__item__popover" data-popover="" id={ popoverId }>
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

function Button({ isActive, children, title, popovertarget }) {
	return (
		<button
			type="button"
			className={
				clsx({
					"controls__button": true,
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

export default function ({ total, price, excel, showBy, showType, sortBy }) {
	return (
		<div className="controls">
			{ total && (
				<Item>
					<span>Наименований — 332, документов — 334 </span>
					<Help />
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
			{ showType && (
				<Item>
					<span>Отображение</span>
					<Button><span class="icon icon--view_grid"></span></Button>
					<Button><span class="icon icon--view_list"></span></Button>
				</Item>
			) }
			{ sortBy && (
				<Item>
					<span>Сортировка по</span>
					<SelectSimple />
				</Item>
			) }
		</div>
	)
}