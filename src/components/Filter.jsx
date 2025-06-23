import RichSearchForm from "./RichSearchForm"

/**
 * @param {Object} param0 
 * @param {import("react").JSX.Element} param0.form 
 * @param {string} param0.togglerText 
 * @param {boolean} param0.applied 
 */
export default function ({ form, togglerText, applied }) {
	const appliedItemsData = [
		{
			caption: "Содержимое",
			values: ["в текстах"],
		},
		{
			caption: "Автор(ы)",
			values: ["Вандыш-Бубко Василий Васильевич", "Васильев Валерий Васильевич"],
		},
		{
			caption: "Собственная литература ГК ИНФРА-М",
			values: ["Да"],
		},
		{
			caption: "Бесплатные",
			values: ["Включить"],
		},
	]

	function AppliedItem({ caption, values }) {
		function Value(value) {
			return (
				<div className="filter__applied__item__value">
					<span>{ value }</span>
					<button type="button" className="filter__applied__item__remove" title="Отменить условие"></button>
				</div>
			)
		}
		return (
			<div className="filter__applied__item">
				<span className="filter__applied__item__caption">{ caption }: </span>
				{ values.map(Value) }
			</div>
		)
	}

	function Applied() {
		return (
			<div className="filter__applied">
				{ appliedItemsData.map(AppliedItem) }
			</div>
		)
	}
	return (
		<div className="filter">
			<div className="filter__panel">
				<button type="button" className="filter__toggler">{ togglerText }</button>
				{ applied && <Applied /> }
			</div>
			<div className="filter__form">
				{ form || <RichSearchForm /> }
			</div>
		</div>
	)
}