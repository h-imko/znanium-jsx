export default function () {

	function Collection() {
		return (
			<div className="collections__collection">
				<div className="collections__collection__info">
					<a href="" className="collections__collection__title">Базовая коллекция ЭБС. СПО (9670)</a>
					<div className="collections__collection__labels">
						<div className="labels">
							<div className="label label--alt1">
								<span>покупка</span>
							</div>
							<div className="label label--alt2">
								<span>основная коллекция</span>
							</div>
						</div>
					</div>
				</div>
				<div className="collections__collection__buy">
					<div className="collections__collection__price">от 87 000 ₽</div>
					<button type="button" className="collections__collection__button"> В корзину </button>
				</div>
			</div>
		)
	}

	function Item({ isAccordion }) {

		function HeaderButton() {
			return (
				<button type="button" className="collections__item__header" data-accordion-toggler>
					<span className="collections__item__title"> Znanium лучшее (892)</span>
				</button>
			)
		}

		function Header() {
			return (
				<div className="collections__item__header">
					<Collection />
				</div>
			)
		}

		function Wrapper() {
			return (
				<div className="collections__item__wrapper" data-accordion-wrapper>
					<div className="collections__item__content" data-accordion-content>
						<div className="collections__item">
							<div className="collections__item__header">
								<Collection />
							</div>
						</div>
						<div className="collections__item">
							<div className="collections__item__header">
								<Collection />
							</div>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="collections__item" data-accordion={ isAccordion }>
				{ isAccordion ? <> <HeaderButton />  <Wrapper />  </> : <Header /> }
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