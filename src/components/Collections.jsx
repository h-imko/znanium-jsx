export default function () {

	function Collection() {
		return (
			<div class="collections__collection">
				<div class="collections__collection__info">
					<a href="" class="collections__collection__title">Базовая коллекция ЭБС. СПО (9670)</a>
					<div class="collections__collection__labels">
						<div class="labels">
							<div class="label label--alt1">
								<span>покупка</span>
							</div>
							<div class="label label--alt2">
								<span>основная коллекция</span>
							</div>
						</div>
					</div>
				</div>
				<div class="collections__collection__buy">
					<div class="collections__collection__price">от 87 000 ₽</div>
					<button type="button" class="collections__collection__button"> В корзину </button>
				</div>
			</div>
		)
	}

	function Item({ isAccordion }) {

		function HeaderButton() {
			return (
				<button type="button" class="collections__item__header" data-accordion-toggler>
					<span class="collections__item__title"> Znanium лучшее (892)</span>
				</button>
			)
		}

		function Header() {
			return (
				<div class="collections__item__header">
					<Collection />
				</div>
			)
		}

		function Child() {
			return (
				<div class="collections__item__wrapper" data-accordion-wrapper>
					<div class="collections__item__content" data-accordion-content>
						<div class="collections__item">
							<div class="collections__item__header">
								<Collection />
							</div>
						</div>
						<div class="collections__item">
							<div class="collections__item__header">
								<Collection />
							</div>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="collections__item" data-accordion={ isAccordion }>
				{ isAccordion ? <> <HeaderButton />  <Child />  </> : <Header /> }
			</div>
		)
	}

	return (
		<div className="collections">
			<Item />
			<Item isAccordion />
			<Item isAccordion />
			<Item />
			<Item />
		</div>
	)
}