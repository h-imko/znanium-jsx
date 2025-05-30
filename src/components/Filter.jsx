import RichSearchForm from "./RichSearchForm"

export default function () {
	return (
		<div class="filter">
			<div class="filter__panel">
				<button type="button" class="filter__toggler">Изменить условия поиска</button>
				<div class="filter__applied">
					<div class="filter__applied__item">
						<span class="filter__applied__item__caption">Содержимое: </span>
						<div class="filter__applied__item__value">
							<span>в текстах</span>
							<button type="button" class="filter__applied__item__remove" title="Отменить условие"></button>
						</div>
					</div>
					<div class="filter__applied__item">
						<span class="filter__applied__item__caption">Автор(ы) : </span>
						<div class="filter__applied__item__value">
							<span>Вандыш-Бубко Василий Васильевич</span>
							<button type="button" class="filter__applied__item__remove" title="Отменить условие"></button>
						</div>
					</div>
					<div class="filter__applied__item">
						<span class="filter__applied__item__caption">Собственная литература ГК ИНФРА-М : </span>
						<div class="filter__applied__item__value">
							<span> Да </span>
							<button type="button" class="filter__applied__item__remove" title="Отменить условие"></button>
						</div>
					</div>
					<div class="filter__applied__item">
						<span class="filter__applied__item__caption">Бесплатные: </span>
						<div class="filter__applied__item__value">
							<span>Включить</span>
							<button type="button" class="filter__applied__item__remove" title="Отменить условие"></button>
						</div>
					</div>
				</div>
			</div>
			<div class="filter__form">
				<RichSearchForm />
			</div>
		</div>
	)
}