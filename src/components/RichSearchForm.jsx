import Radio from "./Radio"
import Checkbox from "./Checkbox"
import Select from "./Select"
import Input from "./Input"
import Form from "./Form"
import Fieldset from "./Fieldset"

export default function () {
	return (
		<Form items={ [
			[
				<Select />
			],
			[
				<Fieldset legend={ "Содержимое" }>
					<Radio label={ "в названиях" } name={ "test" } />
					<Radio label={ "в текстах" } name={ "test" } />
					<Radio label={ "в оглавлениях" } name={ "test" } />
					<Radio label={ "везде" } name={ "test" } />
				</Fieldset>
			],
			[
				<Checkbox label={ "Строгий поиск по названию" } />
			],
			[
				<Select multiple={ true } hasDialog={ true } />
			],
			[
				<Select multiple={ true } />
			],
			[
				<Checkbox label={ "Собственная литература ГК ИНФРА-М" } />
			],
			[
				<Input label={ "Год выпуска" } />
			],
			[
				<Select multiple={ true } />
			],
			[
				<Select multiple={ true } />
			],
			[
				<Select multiple={ true } />
			],
			[
				<Select />
			],
			[
				<Fieldset legend={ "Тип издания" }>
					<Radio label={ "любой" } name={ "test1" } />
					<Radio label={ "книги" } name={ "test1" } />
					<Radio label={ "журналы" } name={ "test1" } />
					<Radio label={ "статьи" } name={ "test1" } />
					<Radio label={ "ЭФУ" } name={ "test1" } />
				</Fieldset>
			],
			[
				<div class="form__controls">
					<button type="submit" class="button">Найти</button>
					<button type="reset" class="button button--secondary"><span>Очистить</span> </button>
				</div>
			],
		] } extra={ {
			label: "Специальные условия поиска",
			content: (<Form items={ [
				[
					<Select multiple={ true } />
				],
				[
					<Select multiple={ true } hasDialog={ true } />
				],
				[
					<Select />
				],
				[
					<Fieldset legend={ "Тип издания" }>
						<Radio label={ "любой" } name={ "test2" } />
						<Radio label={ "книги" } name={ "test2" } />
						<Radio label={ "журналы" } name={ "test2" } />
						<Radio label={ "статьи" } name={ "test2" } />
						<Radio label={ "ЭФУ" } name={ "test2" } />
					</Fieldset>
				],
				[
					<Input label={ "Новинки, начиная с" } type={ "date" } />
				],
				[
					<Fieldset legend={ "Права" }>
						<Checkbox label={ "Бессрочные" } />
						<Checkbox label={ "Эксклюзивные" } />
					</Fieldset>
				],
			] } />)
		}
		} />
	)
}

<form class="form">
	<div class="form__row">
		<div class="form__item">
			<div class="filter__form__extra">
				<div class="filter__form__extra__content">
					<div class="filter__form">
						<div class="form">
							<div class="form__row">
							</div>
							<div class="form__row">
								<div class="form__item">
								</div>
							</div>
							<div class="form__row">
								<div className="form__item">
								</div>
							</div>
							<div class="form__row">
								<div class="form__item">
								</div>
							</div>
							<div class="form__row">
								<div class="form__item">
								</div>
							</div>
							<div class="form__row">
								<div class="form__item">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form__row">
		<div class="form__item">
		</div>
	</div>
</form>