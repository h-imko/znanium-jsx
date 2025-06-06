import clsx from "clsx"

/**
 * @typedef {object} labelArgs
 * @property {string} [text]
 * @property {string} [extraClass]
 * @property {string} [title]
 * @property {string} [img]
 * @property {"primary" | "primary-alt" | "accent" | "alt" | "alt1" | "alt2" | "alt3" | "alt4" | "alt5"} [color]
 */

/**
 * @param {labelArgs} param0
 */
function Label({ text = "somelabel", title, img, color, extraClass }) {
	function Text() {
		if (typeof text == "string") {
			return <span>{ text }</span>
		} else {
			return <>{ text }</>
		}
	}

	return (
		<span className={
			clsx({
				label: true,
				...(color && { [`label--${color}`]: true }),
				[extraClass]: extraClass
			})
		} title={ title ?? "Я лейбл" }>
			{ img ? <img src={ `/src/assets/static/img/${img}` } /> : <Text /> }
		</span>
	)
}

export function LabelsAll() {
	/**
	 * @type {labelArgs[]}
	 */
	const items = [
		{
			color: "accent",
			text: "покупка"
		},
		{
			color: "alt",
			text: "покупка"
		},
		{
			color: "alt1",
			text: "новинка"
		},
		{
			color: "alt2",
			text: "бессрочные права"
		},
		{
			color: "alt3",
			text: "основная коллекция"
		},
		{
			color: "alt4",
			text: "бесплатно"
		},
		{
			color: "alt5",
			text: "бесплатно"
		},
		{
			color: "primary",
			text: "ФПУ"
		},
		{
			color: "primary-alt",
			text: "ЭФУ"
		},
		{
			text: "ФПУП"
		},
		{
			img: "cc-by-nc-nd.svg"
		}
	]

	return <Labels items={ items } />
}

/**
 * @param {object} [param0] 
 * @param {labelArgs[]} [param0.items] 
 */
export default function Labels({ items }) {
	return (
		<span className="labels">
			{ items ? items.map(Label) : <Label /> }
		</span>
	)
} 