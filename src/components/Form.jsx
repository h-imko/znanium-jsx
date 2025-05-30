/**
 * @typedef {object} extra
 * @property {string} label
 * @property {import("react").JSX.Element} content
 */

/**
 * @typedef {object} controls
 * @property {boolean} [submit]
 * @property {boolean} [reset]
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
 * @param {controls} param0
 */
function Controls({ submit, reset }) {
	return (
		Row([
			<div class="form__controls">
				{ submit && <button type="submit" class="button">{ submit }</button> }
				{ reset && <button type="reset" class="button button--secondary">{ reset }</button> }
			</div>
		])
	)
}

/**
 * @param {Object} param0 
 * @param {import("react").JSX.Element[][]} param0.items
 * @param {extra} param0.extra
 * @param {controls} param0.controls
 */
export default function ({ items, extra, controls }) {
	return (
		<div className="form">
			{ items.map(Row) }
			{ extra && Row([<Extra { ...extra } />]) }
			{ controls && <Controls { ...controls } /> }
		</div>
	)
}