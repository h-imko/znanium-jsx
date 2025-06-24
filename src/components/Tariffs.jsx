import StreakImg from "./StreakImg"

export default function () {
	const itemsData = [
		{
			icon: 2,
			title: "Учебные заведения",
			price: {
				value: "80 000",
				period: "год"
			}
		},
		{
			icon: 13,
			title: "Публичные библиотеки",
			price: {
				value: "30 000",
				period: "год"
			}
		},
		{
			icon: 16,
			title: "Частные лица",
			price: {
				value: "317",
				period: "мес"
			}
		}
	]

	function item({ icon, title, price }) {
		return (
			<div className="tariffs__item">
				<div className="block-arrow-border">
					<div className="block-arrow-border__top">
						<div className="block-arrow-border__top__content">
							<div className="tariffs__item__img">
								<StreakImg img={ icon } />
							</div>
						</div>
					</div>
					<div className="block-arrow-border__bottom">
						<div className="tariffs__item__body">
							<div className="tariffs__item__main">
								<div className="tariffs__item__title">{ title } </div>
								<div className="tariffs__item__price">
									<em> от { price.value } </em>
									<span> р/{ price.period } </span>
								</div>
							</div>
							<div className="tariffs__item__footer">
								<a href="#" className="tariffs__item__link">Подробнее</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="tariffs">
			<div className="container-fluid">
				<div className="tariffs__inner">
					<h2 className="tariffs__title">Цены на подписку на основную коллекцию</h2>
					<div className="tariffs__list">
						{ itemsData.map(item) }
					</div>
				</div>
			</div>
		</div>
	)
}