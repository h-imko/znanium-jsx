
/**
 * @param {Object} param0 
 * @param {import("react").JSX.Element[]} param0.slides 
 * @param {boolean} param0.arrows
 */
export default function ({ slides, arrows }) {
	return (
		<div className="splide">
			<div className="splide__track">
				<ul className="splide__list">
					{ slides.map(slide => <li className="splide__slide"> { slide } </li>) }
				</ul>
			</div>
			{
				arrows && (
					<div className="splide__arrows">
						<button type="button" className="splide__arrow splide__arrow--prev" title="Назад"></button>
						<button type="button" className="splide__arrow splide__arrow--next" title="Вперед"></button>
					</div>
				)
			}
		</div>
	)
}