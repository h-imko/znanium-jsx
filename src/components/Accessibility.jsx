export default function () {
	return (
		<div className="accessibility">
			<div className="container">
				<div className="accessibility__inner">
					<div className="accessibility__item" data-param="font-size">
						<div className="accessibility__item__label">Размер шрифта:</div>
						<div className="accessibility__item__buttons">
							<button className="accessibility__item__button theme--font-size-small" data-value="small"> А </button>
							<button className="accessibility__item__button theme--font-size-normal"> А </button>
							<button className="accessibility__item__button theme--font-size-large" data-value="large"> А </button>
						</div>
					</div>
					<div className="accessibility__item" data-param="font-serif">
						<div className="accessibility__item__label">Шрифт:</div>
						<div className="accessibility__item__buttons">
							<button className="accessibility__item__button theme--font-serif-sans-serif"> Без засечек </button>
							<button className="accessibility__item__button theme--font-serif-serif" data-value="serif"> С засечками </button>
						</div>
					</div>
					<div className="accessibility__item" data-param="letter-spacing">
						<div className="accessibility__item__label">Интервал:</div>
						<div className="accessibility__item__buttons">
							<button className="accessibility__item__button theme--letter-spacing-normal"> Стандартный </button>
							<button className="accessibility__item__button theme--letter-spacing-large" data-value="large"> Средний </button>
							<button className="accessibility__item__button theme--letter-spacing-larger" data-value="larger"> Большой </button>
						</div>
					</div>
					<div className="accessibility__item" data-param="color">
						<div className="accessibility__item__label">Цвет сайта:</div>
						<div className="accessibility__item__buttons">
							<button className="accessibility__item__button accessibility__item__button--color theme--color-0">А </button>
							<button className="accessibility__item__button accessibility__item__button--color theme--color-1" data-value="1"> А </button>
							<button className="accessibility__item__button accessibility__item__button--color theme--color-2" data-value="2"> А </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}