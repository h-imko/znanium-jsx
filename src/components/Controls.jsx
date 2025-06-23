import clsx from "clsx"
import { v7 as uuid } from "uuid"
import ExportList from "./ExportList"
import Help from "./Help"
import SelectSimple from "./SelectSimple"

/**
 * @param {Object} param0 
 * @param {boolean} param0.total 
 * @param {boolean} param0.price 
 * @param {boolean} param0.excel 
 * @param {boolean} param0.showBy 
 * @param {boolean} param0.showType 
 * @param {boolean} param0.sortBy 
 * @param {boolean} param0.createShelf 
 * @param {boolean} param0.expand 
 * @param {boolean} param0.sortType 
 * @param {boolean} param0.addReader 
 * @param {itemSimple[]} param0.items 
 * @param {boolean} param0.children 
 */
export default function ({ total, price, excel, showBy, expand, items }) {

	/**
	 * @typedef itemSimpleButton
	 * @property {string} button.icon 
	 * @property {string} button.text
	 */

	/**
	 * @typedef itemSimple 
	 * @property {string} select 
	 * @property {itemSimpleButton} button 
	 * @property {{ button1: itemSimpleButton, button2: itemSimpleButton, text: string}} switchItem 
	 */

	function Item({ children, popover }) {

		function Popover() {
			const popoverId = uuid()

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

	function Button({ isActive, title, popovertarget, isCollapse, icon, text }) {
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

	/**
	 * @param {itemSimple} param0
	 */
	function ItemSimple({ select, button, switchItem }) {
		function SelectInner() {
			return (
				<>
					<span>{ select }</span>
					<SelectSimple />
				</>
			)
		}

		function ButtonInner() {
			return (
				<Button icon={ button.icon } text={ button.text } />
			)
		}

		function SwitchInner() {
			return (
				<>
					<span>{ switchItem.text }</span>
					<Button icon={ switchItem.button1.icon } text={ switchItem.button1.text } />
					<Button icon={ switchItem.button2.icon } text={ switchItem.button2.text } />
				</>
			)
		}

		return (
			<Item>
				{ select && <SelectInner /> }
				{ button && <ButtonInner /> }
				{ switchItem && <SwitchInner /> }
			</Item>
		)
	}
	
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
			{ showBy && (
				<Item>
					<span>Показывать по</span>
					<SelectSimple />
					<span>Показано <em>1-10</em> из <em> 10 </em> </span>
				</Item>
			) }
			{
				items?.map(ItemSimple)
			}
			{ excel && (
				<Item popover />
			) }
			{ expand && (
				<Item>
					<Button isCollapse />
				</Item>
			) }
		</div>
	)
}