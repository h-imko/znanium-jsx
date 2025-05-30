import Splide from "./Splide/Splide"
import Labels from "./Labels"

const items = [
	{
		img: 6,
		author: "Постников В.М.",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit ipsam dolor aut."
	},
	{
		img: 7,
		author: "Постников В.М.",
		title: "Записки горного института, 2024, № 5"
	}
]

function slide({ img, author, title }) {
	return (
		<a href="" className="documents-slider__slide">
			<img className="documents-slider__slide__img" src={ `/src/assets/static/img/${img}.webp` } alt="Книга такая-то" />
			<span className="documents-slider__slide__labels">
			</span>
			<Labels />
			<span className="documents-slider__slide__author">{ author }</span>
			<span className="documents-slider__slide__title">{ title }</span>
		</a>
	)
}

export default function ({ title }) {
	return (
		<div className="documents-slider">
			<div className="container-fluid">
				<div className="documents-slider__inner">
					<div className="documents-slider__header">
						{ title && <h2>{ title }</h2> }
					</div>
					<Splide arrows slides={ [...items, ...items, ...items, ...items].map(slide) } />
				</div>
			</div>
		</div>
	)
}