import RichSearchForm from "./RichSearchForm"

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

export default function () {
	return (
		<div className="filter">
			<div className="filter__panel">
				<button type="button" className="filter__toggler">Изменить условия поиска</button>
				<div className="filter__applied">
					{ appliedItemsData.map(AppliedItem) }
				</div>
			</div>
			<div className="filter__form">
				<RichSearchForm />
			</div>
		</div>
	)
}