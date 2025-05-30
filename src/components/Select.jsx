function DialogButton() {
	return (
		<button type="button" className="custom-select__dialog" data-dialog="dialog_list_for_select" title="Открыть полный список"></button>
	)
}

export default function ({ label, hasDialog, hasSource, multiple }) {
	return (
		<div className="custom-select" data-source={ hasSource && "/assets/static/3.json" } data-list={ hasDialog && "testlist" }>
			<div className="custom-select__label">{ label ?? "Я селект" }</div>
			<div className="custom-select__inner">
				<select className="custom-select__select" multiple={ multiple }></select>
				<div className="custom-select__list">
				</div>
				<div className="custom-select__field">
					<input type="text" className="custom-select__input" />
				</div>
				{ hasDialog && <DialogButton /> }
				<div className="custom-select__drop">
					<div className="custom-select__option" data-id="9aed8e13-f212-11e8-8985-90b11c31de4c">111Военное дело. Оружие. Спецслужбы / Военная техника / Военный автомобильный транспорт</div>
					<div className="custom-select__option" data-id="9aed8ec7-f212-11e8-8985-90b11c31de4c">Информатика. Вычислительная техника / Прикладное программное обеспечение / Системы автоматического моделирования</div>
					<div className="custom-select__option" data-id="9aed8ec9-f212-11e8-8985-90b11c31de4c">Информатика. Вычислительная техника / Прикладное программное обеспечение / Системы автоматического проектирования</div>
				</div>
			</div >
		</div >
	)
}