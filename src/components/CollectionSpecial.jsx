import StreakImg from "./StreakImg"
import Splide from "./Splide/Splide"

const cardsData = [
	{
		img: 3,
		title: "Беспилотные летательные аппараты",
		text: (
			<>
				<p>Коллекция книг по БПЛА: знакомство с основными технологиями, конструкциями и принципами работы беспилотных летательных аппаратов.</p>
				<ul>
					<li>Актуальная тематическая учебная и научная литература</li>
					<li>МГТУ им. Баумана, Инфра-Инженерия и другие профильные издательства</li>
				</ul>
			</>
		)
	},
	{
		img: 1,
		title: "Военное дело",
		text: (
			<>
				<p>Коллекция книг по военному делу для обеспечения дисциплины «Основы военной подготовки» для студентов, обучающихся на военных кафедрах и в учебных военных центрах гражданских вузов.</p>
				<ul>
					<li>Боевая и служебно-прикладная физическая подготовка</li>
					<li>Военная техника и вооружение</li>
					<li>Национальная безопасность и оборона государства</li>
					<li>Военная история</li>
					<li>Военное право. Военная прокуратура</li>
				</ul>
			</>
		)
	},
	{
		img: 17,
		title: "Основы российской государственности",
		text: (
			<>
				<p>Дисциплина «Основы российской государственности» направлена на формирование у обучающихся системы знаний, навыков и компетенций, а также ценностей, правил и норм поведения, связанных с осознанием принадлежности к российскому обществу, развитием чувства патриотизма и гражданственности. Предлагаем ознакомиться с коллекцией книг для обеспечения образовательного процесса.</p>
			</>
		)
	}
]

const items = [...cardsData, ...cardsData].map(cardData => card(cardData))

function card({ img, title, text }) {
	return (
		<div className="collections-special__card">
			<div className="collections-special__card__img">
				<StreakImg img={ `/src/assets/static/img/dashed-icons/${img}.svg` } />
			</div>
			<div className="collections-special__card__body">
				<h3 className="collections-special__card__title">{ title }</h3>
				<div className="collections-special__card__text">
					{ text }
				</div>
				<div className="collections-special__card__footer">
					<a href="" className="collections-special__card__link">В коллекцию</a>
				</div>
			</div>
		</div>
	)
}

export default function () {
	return (
		<div className="collections-special">
			<div className="container-fluid">
				<div className="collections-special__inner">
					<h2 className="collections-special__title">Специальные коллекции</h2>
					<div className="collections-special__slider">
						<Splide slides={ items } arrows={ true } />
					</div>
				</div>
			</div>
		</div>
	)
}