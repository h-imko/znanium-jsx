import StreakImg from "./StreakImg"

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
		<div class="tariffs__item">
			<div class="block-arrow-border">
				<div class="block-arrow-border__top">
					<div class="block-arrow-border__top__content">
						<div class="tariffs__item__img">
							<StreakImg img={ icon } />
						</div>
					</div>
				</div>
				<div class="block-arrow-border__bottom">
					<div class="tariffs__item__body">
						<div class="tariffs__item__main">
							<div class="tariffs__item__title">{ title } </div>
							<div class="tariffs__item__price">
								<em> от { price.value } </em>
								<span> р/{ price.period } </span>
							</div>
						</div>
						<div class="tariffs__item__footer">
							<a href="" class="tariffs__item__link">Подробнее</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function () {
	return (
		<div class="tariffs">
			<div class="container-fluid">
				<div class="tariffs__inner">
					<h2 class="tariffs__title">Цены на подписку на основную коллекцию</h2>
					<div class="tariffs__list">
						{ itemsData.map(item) }
					</div>
				</div>
			</div>
		</div>
	)
}