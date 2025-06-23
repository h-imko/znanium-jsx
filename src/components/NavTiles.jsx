import StreakImg from "./StreakImg"

export default function () {
	const itemsData = [
		{
			img: 1,
			text: "Номенклатура ВАК"
		},
		{
			img: 2,
			text: "Журналы ИНФРА-М"
		}
	]

	function item({ img, text }) {
		return (
			<a href="" className="nav-tiles__item">
				<StreakImg img={ img } />
				<span>{ text }</span>
			</a>
		)
	}

	return (
		<div className="nav-tiles">
			{ [...itemsData, ...itemsData, ...itemsData, ...itemsData].map(item) }
		</div>
	)
}