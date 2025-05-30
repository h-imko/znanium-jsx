function DialogButton() {
	return (
		<button type="button" class="custom-select__dialog" data-dialog="dialog_list_for_select" title="Открыть полный список"></button>
	)
}

export default function ({ label, hasDialog, hasSource, multiple }) {
	return (
		<div class="custom-select" data-source={ hasSource && "/assets/static/3.json" } data-list={ hasDialog && "testlist" }>
			<div class="custom-select__label">{ label ?? "Я селект" }</div>
			<div class="custom-select__inner">
				<select class="custom-select__select" multiple={ multiple }></select>
				<div class="custom-select__list">
				</div>
				<div class="custom-select__field">
					<input type="text" class="custom-select__input" />
				</div>
				{ hasDialog && <DialogButton /> }
				<div class="custom-select__drop">
					<div class="custom-select__option" data-id="9aed8e13-f212-11e8-8985-90b11c31de4c">111Военное дело. Оружие. Спецслужбы / Военная техника / Военный автомобильный транспорт</div>
					<div class="custom-select__option" data-id="9aed8ec7-f212-11e8-8985-90b11c31de4c">Информатика. Вычислительная техника / Прикладное программное обеспечение / Системы автоматического моделирования</div>
					<div class="custom-select__option" data-id="9aed8ec9-f212-11e8-8985-90b11c31de4c">Информатика. Вычислительная техника / Прикладное программное обеспечение / Системы автоматического проектирования</div>
				</div>
			</div >
		</div >
	)
}