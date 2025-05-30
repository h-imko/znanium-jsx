function items() {
	return (
		<>
			<li class="accordion-nav__item">
				<span class="accordion-nav__item__self">
					<a href=""> Видеоинструкции </a>
				</span>
			</li>
			<li class="accordion-nav__item" data-accordion>
				<div class="accordion-nav__item__self">
					<a href="">
						Видеоинструкции
					</a>
					<button type="button" class="accordion-nav__item__toggler" data-accordion-toggler title="Скрыть/показать"></button>
				</div>
				<div class="accordion-nav__item__list" data-accordion-wrapper>
					<div class="accordion-nav__item__content" data-accordion-content>
						<ul class="accordion-nav__sub">
							<li class="accordion-nav__sub__item">
								<a href="">
									Для студента
								</a>
							</li>
							<li class="accordion-nav__sub__item">
								<a href="">
									Для читателя
								</a>
							</li>
							<li class="accordion-nav__sub__item">
								<a href="">
									Для библиотекаря
								</a>
							</li>
							<li class="accordion-nav__sub__item">
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

export default function () {
	return (
		<nav class="accordion-nav" data-accordion>
			<button class="accordion-nav__toggler" data-accordion-toggler><span>Текущий раздел</span></button>
			<div class="accordion-nav__wrapper" data-accordion-wrapper>
				<div class="accordion-nav__content" data-accordion-content>
					<ul class="accordion-nav__list">
						{ [items(), items(), items()] }
					</ul>
				</div>
			</div>
		</nav>
	)
}