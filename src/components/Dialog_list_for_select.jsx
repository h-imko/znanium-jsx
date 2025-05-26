import Checkbox from "./Checkbox"

export default function () {
	return (
		<dialog className="dialog" id="dialog_list_for_select">
			<div className="dialog__body">
				<div className="dialog__header">
					<hgroup className="dialog__hgroup">
						<h2 className="dialog__title">ББК</h2>
					</hgroup>
					<button className="dialog__close" type="button" aria-label="Закрыть окно" data-dialog-selfcloser></button>
				</div>
				<div className="dialog__main">
					<div className="accordion-list" id="testlist" data-accordion-group>
						<div className="accordion-list__header">
							<button type="button" className="accordion-list__toggler" title="Развернуть/свернуть все" data-accordion-collapse></button>
						</div>
						<div className="accordion-list__items">
							<div className="accordion-list__item" data-accordion>
								<div className="accordion-list__item__header">
									<button className="accordion-list__item__toggler" title="Развернуть/свернуть" data-accordion-toggler></button>
									<Checkbox label={ "Военное дело. Оружие. Спецслужбы / Военная техника / Военный автомобильный транспорт" } value={ "9aed8e13-f212-11e8-8985-90b11c31de4c" } />
								</div>
								<div className="accordion-list__item__wrapper" data-accordion-wrapper>
									<div className="accordion-list__item__content" data-accordion-content>
										<div className="accordion-list__item">
											<div className="accordion-list__item__header">
												<Checkbox label={ "Информатика. Вычислительная техника / Прикладное программное обеспечение / Системы автоматического моделирования" } value={ "9aed8ec7-f212-11e8-8985-90b11c31de4c" } />
											</div>
										</div>
										<div className="accordion-list__item">
											<div className="accordion-list__item__header">
												<Checkbox label={ "Информатика. Вычислительная техника / Прикладное программное обеспечение / Системы автоматического проектирования" } value={ "9aed8ec9-f212-11e8-8985-90b11c31de4c" } />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="dialog__footer">
					<button type="button" className="button" data-dialog-selfcloser>Применить</button>
				</div>
			</div>
		</dialog>
	)
}