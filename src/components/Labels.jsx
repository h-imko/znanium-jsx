import clsx from "clsx"

/**
 * @typedef {object} labelArgs  
 * @property {string} [text]
 * @property {string} [title]
 * @property {string} [img]
 * @property {"primary" | "primary-alt" | "alt" | "alt1" | "alt2" | "alt3" | "alt4" | "alt5"} [color]
 */

/**
 * @param {labelArgs} param0
 */
function label({ text, title, img, color }) {
	return (
		<span className={
			clsx({
				label: true,
				...(color && { [`label--${color}`]: true })
			})
		} title={ title }>
			{ img ? <img src={ `/src/assets/static/img/${img}` } /> : <span>{ text }</span> }
		</span>
	)
}

/**
 * @param {object} [param0] 
 * @param {labelArgs[]} [param0.items] 
 */
export default function ({ items }) {
	return (
		<span className="labels">
			{ items ? items.map(label) : label({ text: "somelabel" }) }
		</span>
	)
}