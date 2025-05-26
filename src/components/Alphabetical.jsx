import clsx from "clsx"

/**
 * @param {string} list 
 */
function letters(list) {
	return (
		list.split("").map((letter, index) => {
			return <a href="" className={
				clsx({
					alphabetical__item: true,
					"is-disabled": !((index + 4) % 5)
				})
			}>{ letter }</a>
		})
	)
}

export default function () {
	return (
		<nav className="alphabetical">
			<div className="alphabetical__row">
				<a href="" className="alphabetical__item is-active">Все</a>
				{ letters("АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ") }
			</div>
			<div className="alphabetical__row">
				<a href="" className="alphabetical__item is-active">Все</a>
				{ letters("ABCDEFGHIJKLMNOPQRSTUVWXYZ") }
			</div >
		</nav >
	)
}