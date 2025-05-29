import Splide from "./Splide/Splide"

export default function ({ title, cards }) {
	return (
		<div className="cards-slider">
			<div className="container-fluid">
				<div className="cards-slider__inner">
					<a href="" className="cards-slider__title">
						<h2> { title } </h2>
					</a>
					<div className="cards-slider__slider">
						<Splide slides={ cards } arrows={ true } />
					</div>
				</div>
			</div>
		</div>
	)
}