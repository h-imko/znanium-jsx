export default function () {

	function items() {
		return (
			<>
				<li className="accordion-nav__item">
					<span className="accordion-nav__item__self">
						<a href=""> Видеоинструкции </a>
					</span>
				</li>
				<li className="accordion-nav__item" data-accordion>
					<div className="accordion-nav__item__self">
						<a href="">
							Видеоинструкции
						</a>
						<button type="button" className="accordion-nav__item__toggler" data-accordion-toggler title="Скрыть/показать"></button>
					</div>
					<div className="accordion-nav__item__list" data-accordion-wrapper>
						<div className="accordion-nav__item__content" data-accordion-content>
							<ul className="accordion-nav__sub">
								<li className="accordion-nav__sub__item">
									<a href="">
										Для студента
									</a>
								</li>
								<li className="accordion-nav__sub__item">
									<a href="">
										Для читателя
									</a>
								</li>
								<li className="accordion-nav__sub__item">
									<a href="">
										Для библиотекаря
									</a>
								</li>
								<li className="accordion-nav__sub__item">
									<a href="">
										Для преподавателя
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</>
		)
	}

	return (
		<nav className="accordion-nav" data-accordion>
			<button className="accordion-nav__toggler" data-accordion-toggler><span>Текущий раздел</span></button>
			<div className="accordion-nav__wrapper" data-accordion-wrapper>
				<div className="accordion-nav__content" data-accordion-content>
					<ul className="accordion-nav__list">
						{ [items(), items(), items()] }
					</ul>
				</div>
			</div>
		</nav>
	)
}