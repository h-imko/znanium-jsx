import Radio from "./Radio"
import Checkbox from "./Checkbox"
import Select from "./Select"
import Input from "./Input"
import Form from "./Form"
import Fieldset from "./Fieldset"

const items = [[
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
	<Select multiple hasDialog />
],
[
	<Select multiple />
],
[
	<Checkbox label={ "Собственная литература ГК ИНФРА-М" } />
],
[
	<Input label={ "Год выпуска" } />
],
[
	<Select multiple />
],
[
	<Select multiple />
],
[
	<Select multiple />
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
]]

const extraItems = [
	[
		<Select multiple />
	],
	[
		<Select multiple hasDialog />
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
]

const extraForm = <Form items={ extraItems } />

export default function () {
	return (
		<Form bordered items={ items } extra={ {
			label: "Специальные условия поиска",
			content: extraForm
		} } controls={ { submit: "Найти", reset: "Очистить" } } />
	)
} 