/**
 * @typedef {object} extra
 * @property {string} label
 * @property {import("react").JSX.Element} content
 */

function Item(item) {
	return (
		<div className="form__item"> { item } </div>
	)
}

function Row(items) {
	return (
		<div className="form__row"> { items.map(Item) } </div>
	)
}

/**
 * @param {extra} param0
 */
function Extra({ label, content }) {
	return (
		<div className="form__extra">
			<button type="button" class="form__extra__toggler">{ label }</button>
			<div className="form__extra__content"> { content } </div>
		</div>
	)
}

/**
 * @param {Object} param0 
 * @param {import("react").JSX.Element[][]} param0.items
 * @param {extra} param0.extra
 */
export default function ({ items, extra }) {
	return (
		<div className="form">
			{ items.map(Row) }
			{ extra && Row([<Extra { ...extra } />]) }
		</div>
	)
}